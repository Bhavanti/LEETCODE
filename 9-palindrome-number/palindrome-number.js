
const isPalindrome=(x)=>{
    let str = x.toString();
    let left=0;
    let right=str.length-1;
    for (;left<right;left++,right--){
        if(str[left]!=str[right]){
            return false;
        }
    }
    return true;
}
isPalindrome(12135214);