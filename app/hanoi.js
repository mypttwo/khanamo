'use strict'

let hanoi = (disc, src, aux, dest) => {
    if (disc > 0) {
        hanoi(disc - 1, src, dest, aux);
        dest.push(src.pop());
        print(disc, src, dest, aux);
        hanoi(disc - 1, aux, src, dest);
    }
};

let print = (disc, src, dest, aux) => {
    console.log(`Move disc ${disc} from ${src.name} to ${dest.name}`);
    console.log(`${src.name} : ${src}`);
    console.log(`${dest.name} : ${dest}`);
    console.log(`${aux.name} : ${aux}`);
    console.log('-----------------------------------------------------');
    
}

module.exports = hanoi;