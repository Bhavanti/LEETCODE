const removeElement=(nums,val)=>{
    let k=nums.length;
    for(let i=k-1; i>=0; i--){
        if(nums[i]==val){
            nums.splice(i,1);
        }
        k=nums.length;
    }
    return k;
}
console.log(removeElement([0,1,2,2,3,0,4,2],2));
