'use strict'

let expect = require('chai').expect;
let QuickSort = require('../app/quicksort');

describe('QuickSort', ()=>{
    it('should sort an array', ()=>{
        let c = new QuickSort();

        let arr = [12, 11, 13, 5, 6, 7];
        console.log(c.run(arr));
    });
});
