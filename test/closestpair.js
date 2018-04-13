'use strict'

let expect = require('chai').expect;
let ClosestPairFinder = require('../app/closestpair');

describe('ClosestPairFinder', () => {
    it('should find the shortest distance', () => {
        let c = new ClosestPairFinder();
        
        //{{2, 3}, {12, 30}, {40, 50}, {5, 1}, {12, 10}, {3, 4}};
        let pointArr = [{x : 2, y : 3},{x : 12, y : 30},{x : 40, y : 50},{x : 5, y : 1},{x : 12, y : 10},{x : 3, y : 4}];
        console.log(c.run(pointArr));
        console.log(JSON.stringify(c.pairDataList));

        //1.4142135623730951
        //[{"p1":{"x":2,"y":3},"p2":{"x":3,"y":4},"dist":1.4142135623730951},{"p1":{"x":2,"y":3},"p2":{"x":3,"y":4},"dist":1.4142135623730951},{"p1":{"x":2,"y":3},"p2":{"x":5,"y":1},"dist":3.605551275463989},{"p1":{"x":3,"y":4},"p2":{"x":5,"y":1},"dist":3.605551275463989},{"p1":{"x":12,"y":30},"p2":{"x":12,"y":10},"dist":20},{"p1":{"x":12,"y":30},"p2":{"x":12,"y":10},"dist":20},{"p1":{"x":12,"y":30},"p2":{"x":40,"y":50},"dist":34.40930106817051},{"p1":{"x":12,"y":10},"p2":{"x":40,"y":50},"dist":48.82622246293481}]

        /***
         * 0 0
         * 0 1
         * 100 45
         * 2 3
         * 9 9
         */
        pointArr = [{x : 0, y : 0},{x : 0, y : 1},{x : 100, y : 45},{x : 2, y : 3},{x : 9, y : 9}];
        console.log(c.run(pointArr));
        console.log(JSON.stringify(c.pairDataList));

        //1
        //[{"p1":{"x":0,"y":0},"p2":{"x":0,"y":1},"dist":1},{"p1":{"x":0,"y":0},"p2":{"x":0,"y":1},"dist":1},{"p1":{"x":2,"y":3},"p2":{"x":9,"y":9},"dist":9.219544457292887},{"p1":{"x":2,"y":3},"p2":{"x":9,"y":9},"dist":9.219544457292887},{"p1":{"x":2,"y":3},"p2":{"x":100,"y":45},"dist":106.62082348209472},{"p1":{"x":9,"y":9},"p2":{"x":100,"y":45},"dist":97.86214794290998}]

    });
});
