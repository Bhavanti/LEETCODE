/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let count=0;
    let n;
    if(nums.length%2===0){
         n=nums.length/2;
        for(let i=0; i<nums.length; i++){
            for(let j=i+1; j<nums.length; j++){
                if(nums[i]===nums[j]){
                    count++;
                }
            }
            if(count+1===n){
                return nums[i];
            }
        }
    }
    
};
console.log(repeatedNTimes([5,1,5,2,5,3,5,4]));