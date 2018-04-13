'use strict'

const expect = require('chai').expect;
let MergeSort = require('../app/mergesort');


describe('MergeSort', () => {
    it('should sort an array of integers', ()=>{

        let c = new MergeSort();

        let arr = [12, 11, 13, 5, 6, 7];
        let resp = c.run(arr);    
        console.log(resp);  
        console.log(`inversionCount : ${c.inversionCount}`);
        console.log(`inversionPairs : ${c.inversionPairs}`);
         

        arr = [1,1, -1];
        resp = c.run(arr);
        console.log(resp); 
        console.log(`inversionCount : ${c.inversionCount}`);
        console.log(`inversionPairs : ${c.inversionPairs}`);
        
        arr = [];
        resp = c.run(arr);
        console.log(resp); 
        console.log(`inversionCount : ${c.inversionCount}`);
        console.log(`inversionPairs : ${c.inversionPairs}`);
        
    });

    it('should sort an array of mixed data types', ()=>{
        let c = new MergeSort();

        let arr = ['12', 'foo', 'bar', 8, 2, 5];
        let resp = c.run(arr);    
        console.log(resp); 
    });
});

