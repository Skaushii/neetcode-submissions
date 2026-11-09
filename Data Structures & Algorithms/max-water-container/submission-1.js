class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxWater = 0;
        while(left<right){
            const width=right-left;
            const currentheight=Math.min(heights[left], heights[right]);
            const currentArea = width * currentheight;
            maxWater = Math.max(maxWater, currentArea);
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxWater;
    }
}
