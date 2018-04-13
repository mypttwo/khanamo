'use strict'

class QuickSort{

    partition(arr, left, right){
        let pivot = Math.floor((right + left)/2);

        while(left <= right){
            while(arr[left] < arr[pivot]){
                left++;
            }
            while(arr[pivot] < arr[right]){
                right--;
            }
            if(left <= right){
                [arr[left], arr[right]] = [arr[right], arr [left]];
                left++;
                right--;
            }
        }

        return left;
    }

    quicksort(arr, left, right){
        let pivot = this.partition(arr, left, right);

        if(left < pivot - 1){
            this.quicksort(arr, left, pivot -1);
        }

        if(right > pivot){
            this.quicksort(arr, pivot, right);
        }
    }

    run(arr){
        this.quicksort(arr, 0, arr.length - 1);
        return arr;
    }
}

module.exports = QuickSort;

