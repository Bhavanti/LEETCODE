const compose =(Function) => {
    const value=(x)=>{
        return x;
    }
    if(Function.length===0){
        return value;
    }
    return function (x){
    let result = x;
    for (let i= Function.length-1; i>=0; i--){
             result=Function[i](result);
    }
    return result;
}
}
let ValFunc =
[
    (x)=>x-1,
    (x)=>x*x,
    (x)=>x+2,
    (x)=>x*3

]
const FuncComp = compose(ValFunc);
console.log(FuncComp(5));