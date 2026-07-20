const containsDuplicate =(nums)=>{
   let numSet = new Set();
   for(let i=0 ; i<nums.length; i++){
    if(numSet.has(nums[i])){
        return true;
    }
    numSet.add(nums[i]);
   }
   return false;

}
containsDuplicate([1,2,3,4]);