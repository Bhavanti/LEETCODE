const countPairs=(nums,target)=>{
    count =0
       for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
                 if(nums[j]+nums[i]<target){
                    count++;
                 }
            
        }
       }
       return count;
}
countPairs([0,1,5,6,8,7],9)