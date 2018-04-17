'use strict'

let expect = require('chai').expect;
let assert = require('chai').assert;
let doBFS = require('../app/bfs');

describe('Breadth First Search', () => {
    it('solve for adjacency lists', () => {
        var adjList = [
            [1],
            [0, 4, 5],
            [3, 4, 5],
            [2, 6],
            [1, 2],
            [1, 2, 6],
            [3, 5],
            []
            ];
            
        var bfsInfo = doBFS(adjList, 3);
        for (var i = 0; i < adjList.length; i++) {
            console.log(`vertex ${i}: distance = ${bfsInfo[i].distance}, predecessor = ${bfsInfo[i].predecessor}`);
        }
        
        
        assert.deepEqual(bfsInfo[0],{distance: 4, predecessor: 1});
        assert.deepEqual(bfsInfo[1], {distance: 3, predecessor: 4});
        assert.deepEqual(bfsInfo[2], {distance: 1, predecessor: 3});
        assert.deepEqual(bfsInfo[3], {distance: 0, predecessor: null});
        assert.deepEqual(bfsInfo[4], {distance: 2, predecessor: 2});
        assert.deepEqual(bfsInfo[5], {distance: 2, predecessor: 2});
        assert.deepEqual(bfsInfo[6], {distance: 1, predecessor: 3});
        assert.deepEqual(bfsInfo[7], {distance: null, predecessor: null});

    });
});