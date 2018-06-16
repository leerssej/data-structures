

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);  
  var tempArrToModify = this._storage.get(index);
  if (!Array.isArray(tempArrToModify)) {
    tempArrToModify = [];
  }
  for (let i = 0; i < tempArrToModify.length; i++) {
    if (tempArrToModify[i][0] === k) {
      tempArrToModify[i][1] = v;
      return this._storage.set(index, tempArrToModify);
    }
  }
  tempArrToModify.push([k, v]);
  this._storage.set(index, tempArrToModify);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tempArrToReview = this._storage.get(index);
  for (let i = 0; i < tempArrToReview.length; i++) {
    if (tempArrToReview[i][0] === k) {
      return tempArrToReview[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tempArrToModify = this._storage.get(index);
  if (!Array.isArray(tempArrToModify)) {
    tempArrToModify = [];
  }
  for (let i = 0; i < tempArrToModify.length; i++) {
    if (tempArrToModify[i][0] === k) {
      tempArrToModify.splice(i, 1);
      return this._storage.set(index, tempArrToModify);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 *
 * insert: O(1) if mostly buckets and short tuple collection
 * insert: O(n) if mostly long tuple collections and 1 bucket
 * retrieve: same as insert
 * remove: same as insert
 * 
 */


