const createCounter = (init) =>{
    let current = init;
      const increment = ()=>{
        return ++current
      }
      const decrement=()=>{
        return --current
      }
      const reset =()=>{
        current=init;
        return current;
      }
      return{
        increment,
        decrement,
        reset
      };
}
const counter=createCounter(0);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.reset());