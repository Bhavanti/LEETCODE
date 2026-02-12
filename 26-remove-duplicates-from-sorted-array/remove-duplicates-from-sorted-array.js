const removeDuplicates=(nums)=>{
    let k=nums.length;
    for(let i=0; i<k; i++){
        for(let j=k-1; j>=0; j--){
            if(i!=j){
                if(nums[i]==nums[j]){
                    nums.splice(j,1);
                    console.log("Array length is", nums.length)
                }
            }
        }
         k=nums.length;
    }
    return k;
}
console.log(removeDuplicates([0,0,0,0,0,0,0,0]));
