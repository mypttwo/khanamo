'use strict'

let dijkstra = require('../app/dijkstra');
let expect = require('chai').expect;

describe('Dijkstra', () => {
    it('finds the min distance from the specified source point', () => {

        let printSolution = (distArr) => {
            for (let i = 0; i < distArr.length; i++)
                console.log("%d  %d", i, distArr[i]);
        }
        
        let graph = [[0, 4, 0, 0, 0, 0, 0, 8, 0],
        [4, 0, 8, 0, 0, 0, 0, 11, 0], 
        [0, 8, 0, 7, 0, 4, 0, 0, 2],
        [0, 0, 7, 0, 9, 14, 0, 0, 0],
        [0, 0, 0, 9, 0, 10, 0, 0, 0],
        [0, 0, 4, 14, 10, 0, 2, 0, 0],
        [0, 0, 0, 0, 0, 2, 0, 1, 6],
        [8, 11, 0, 0, 0, 0, 1, 0, 7],
        [0, 0, 2, 0, 0, 0, 6, 7, 0]];
        
        let distArr = dijkstra(graph, 8);

        printSolution(distArr);  

        expect(JSON.stringify(distArr)).to.equal('[14,10,2,9,16,6,6,7,0]');      
    });
});
