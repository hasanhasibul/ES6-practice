// function doubleIt(num1){
//     return num1*2;

// }
// const result = doubleIt(5);
// console.log(result);
// const doSomething = function(num){
//     return num * num ;
// }
// const result = doSomething(5);
// console.log(result);
const DoMath = (num)=>num*6

const result = DoMath(5);
console.log(result);

const DoMath2 = (x,y) =>{
    const add = x+y;
    const reduce = x-y;
    const multiply = add * reduce;
    return multiply;
}
const result2 = DoMath2(7,5);
console.log(result2);
