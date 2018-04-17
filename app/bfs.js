'use strict'

/* A Queue object for queue-like functionality over JavaScript arrays. */
let Queue = function() {
    this.items = [];
};
Queue.prototype.enqueue = function(obj) {
    this.items.push(obj);
};
Queue.prototype.dequeue = function() {
    return this.items.shift();
};
Queue.prototype.isEmpty = function() {
    return this.items.length === 0;
};

/*
 * Performs a breadth-first search on a graph
 * @param {array} graph - Graph, represented as adjacency lists.
 * @param {number} source - The index of the source vertex.
 * @returns {array} Array of objects describing each vertex, like
 *     [{distance: _, predecessor: _ }]
 */
let doBFS = function(graph, source) {
    var bfsInfo = [];

    for (var i = 0; i < graph.length; i++) {
	    bfsInfo[i] = {
	        distance: null,
	        predecessor: null };
    }

    bfsInfo[source].distance = 0;

    var queue = new Queue();
    queue.enqueue(source);

    // Traverse the graph
    
    // As long as the queue is not empty:
    //  Repeatedly dequeue a vertex u from the queue.
    //  
    //  For each neighbor v of u that has not been visited:
    //     Set distance to 1 greater than u's distance
    //     Set predecessor to u
    //     Enqueue v
    
    while(!queue.isEmpty()){
        
        var pos = queue.dequeue();
        
        for (var i = 0; i < graph[pos].length; i++) {
            var neighbour = graph[pos][i];
            if(bfsInfo[neighbour].distance === null){
                bfsInfo[neighbour].distance = bfsInfo[pos].distance + 1;
                bfsInfo[neighbour].predecessor = pos;
                queue.enqueue(neighbour);
            }
        }
        
    }
    
    return bfsInfo;
};

module.exports = doBFS;
