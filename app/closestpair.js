'use strict'

//https://www.geeksforgeeks.org/closest-pair-of-points/

class PairData{
    constructor(p1, p2, dist){
        this.p1 = p1;
        this.p2 = p2;
        this.dist= dist;
    }
}

class ClosestPairFinder {

    closestStrip(strip, min){
        strip.sort(function(a,b){
            return a.y - b.y;
        });
        
        // Pick all points one by one and try the next points till the difference
        // between y coordinates is smaller than d.
        // This is a proven fact that this loop runs at most 6 times
        for (let i = 0; i < strip.length; ++i){
            for (let j = i+1; j < strip.length && (strip[j].y - strip[i].y) < min; ++j){
                if (dist(strip[i],strip[j]) < min){
                    min = dist(strip[i], strip[j]);
                }
            }
        }
        return min;
    }

    bruteForce(arr){
        let min = 0;
        if(arr.length >1){
            min = this.dist(arr[0], arr[1]);
        }
        for (let i = 0; i < arr.length; ++i){
            for (let j = i+1; j < arr.length; ++j){
                let d = this.dist(arr[i], arr[j]);
                if (d < min){
                    min = d;
                }
            }
        }
        return min;
    }

    dist(p1, p2){
        let dist = Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y),2));
        let pd = new PairData(p1, p2, dist);
        this.pairDataList.push(pd); 
        return dist;
    }

    closestUtil(pointArr){

        if(pointArr.length < 4){
            return this.bruteForce(pointArr)
        }

        let middlePoint = pointArr[Math.floor(pointArr.length/2)];
        let middleIndex = Math.floor((pointArr.length)/2);

        let leftArray = pointArr.slice(0, middleIndex);
        let rightArray = pointArr.slice(middleIndex);

        let dl = this.closestUtil(leftArray);
        let dr = this.closestUtil(rightArray);

        let dMin = Math.min(dl, dr);

        let strip = [];

        pointArr.forEach(point =>{
            if(Math.abs(point.x - middlePoint.x) < dMin){
                strip.push(point);
            }
        });

        return Math.min(dMin, this.closestStrip(strip, dMin));

    }
    run(pointArr){
        this.pairDataList = [];
        pointArr.sort(function(a,b){
            return a.x - b.x;
        });       

        return this.closestUtil(pointArr);
    }
}

module.exports = ClosestPairFinder;
