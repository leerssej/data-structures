// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var x = 0; x < Object.keys(this).length; x++) {
    if (this[x] = node) {
      continue;
    }
    this.removeEdge(this[x], node);   
  }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this[fromNode] === undefined || this[toNode] === undefined) { 
    return false;
  }
  return this[toNode].indexOf(fromNode) > -1 && this[fromNode].indexOf(toNode) > -1;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index1 = this[fromNode].indexOf(toNode);
  var index2 = this[toNode].indexOf(fromNode);
  if (index1 > -1) {
    this[fromNode].splice(index1, 1);
  }
  if (index2 > -1) {
    this[toNode].splice(index2, 1);
  } 
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var keys = Object.keys(this);
  keys.forEach((val) => cb(parseInt(val)));  
};

/*
 * Complexity: What is the time complexity of the above functions?
 * forEachNode: O(n);
 * addEdge: O(1);
 * hasEdge: O(1);
 * removeEdge: O(n);
 * contains: O(1);
 * addNode: O(1);
 */


