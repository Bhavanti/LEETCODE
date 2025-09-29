const findMaxK=(nums)=>{
     let set = new Set(nums);
     let k = Math.max(...nums);
     while(k>0){
        if(set.has(k) && set.has(-k)){
            return k;
        }else{
            k--;
        }
     }
     return -1;
}
console.log(findMaxK([1,2,5,-5,8,9]));