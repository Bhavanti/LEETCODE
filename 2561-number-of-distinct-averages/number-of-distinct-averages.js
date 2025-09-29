const distinctAverages=(nums)=>{
      
       if(nums.length%2===0){
        let avgSet = new Set();
       while(nums.length!=0 ){
        let minNum=Math.min(...nums);
       let maxNum = Math.max(...nums);
        let avg=(minNum+maxNum)/2;
        nums.splice(nums.indexOf(minNum),1);
        nums.splice(nums.indexOf(maxNum),1);
        avgSet.add(avg);
       }
        return avgSet.size;
       }else{
        return -1;
       }
       
}
console.log(distinctAverages([4,1,4,0,3,5]));