const plusOne = function(digits) {
   let b=digits[digits.length-1]+1;
   let a=b%10;
   for(let i=digits.length-2; i>=0; i--){
    b=(digits[i]+Math.trunc(b/10));
    digits[i]=b%10;
   }
    if(Math.trunc(b/10)===1){
        digits.unshift(1);
    }
   digits[digits.length-1]=a;
   return digits;
};
console.log(plusOne([9,9,9]));