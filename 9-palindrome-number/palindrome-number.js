const isPalindrome=(x)=>{
 let k=x;
let reversedNum=0;
 while(x>0){
    let digit=x%10;
    reversedNum=reversedNum*10+digit;
    x=Math.trunc(x/10);
 }
 if(reversedNum===k){
    return true;
 }else{
    return false;
 }
 return -1;
}
isPalindrome(121);