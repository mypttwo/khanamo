'use strict'

class MergeSort{

    merge(leftArr, rightArr){
        let sorted = [];
        while(leftArr.length && rightArr.length){
            if(leftArr[0] < rightArr[0]){
                sorted.push(leftArr.shift());
            } else {
                if(leftArr[0] != rightArr[0]){
                    this.inversionPairs.push([leftArr[0], rightArr[0]]);
                    this.inversionCount++;
                }
                sorted.push(rightArr.shift());
            }
        }
        return sorted.concat(leftArr).concat(rightArr);
    }

    mergeSort(arr){

        if(arr.length == 1){
            return arr;
        }
        
        let middleIndex = Math.floor((arr.length)/2);

        let leftArr = arr.slice(0, middleIndex);
        let rightArr = arr.slice(middleIndex);

        return this.merge(this.mergeSort(leftArr), this.mergeSort(rightArr));
    }
    run(arr){
        this.inversionCount = 0;
        this.inversionPairs = [];

        if(arr.length <= 1){
            return arr;
        }
        
        return this.mergeSort(arr);
    }
}

module.exports = MergeSort;








