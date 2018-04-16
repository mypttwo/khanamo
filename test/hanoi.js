'use strict'

let expect = require('chai').expect;
let hanoi = require('../app/hanoi');

describe('Towers of Hanoi', ()=>{
    it('solving', () =>{
        let a = [7, 6, 5, 4, 3, 2, 1];
        a.name = 'START';
        let b = [];
        b.name = 'TEMP';
        let c = [];
        c.name = 'END';
        
        hanoi(a.length, a, b, c);
    });
});