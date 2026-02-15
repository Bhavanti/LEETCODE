var rotate = function(nums, k) {
    let n=nums.length;
    k=k%n;
    let start = 0;
    let end = n-1;
    while(start<end){
        let temp=nums[start];
        nums[start]=nums[end];
        nums[end]=temp;
        start++;
        end--;
    }
    start=0;
    end=k-1;
    while(start<end){
        let temp=nums[start];
        nums[start]=nums[end];
        nums[end]=temp;
        start++;
        end--;
    }
    start=k;
    end=n-1;
    while(start<end){
        let temp=nums[start];
        nums[start]=nums[end];
        nums[end]=temp;
        start++;
        end--;
    }
return nums;
};
console.log(rotate([1,2,3,4,5],2));