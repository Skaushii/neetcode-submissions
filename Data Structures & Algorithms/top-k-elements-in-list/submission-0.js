class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map= new Map();
        for(let num of nums){
            map.set(num,(map.get(num)||0)+1);
        }
        const freqarr=Array.from(map.entries());
        freqarr.sort((a,b)=>b[1]-a[1]);
        return freqarr.slice(0,k).map(pair=>pair[0]);
    }
}
