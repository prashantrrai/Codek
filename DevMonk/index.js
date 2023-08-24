// (function () {
//     console.log(1);
//     setTimeout(function () {
//       console.log(2);
//     }, 1000);
//     setTimeout(function () {
//       console.log(3);
//     }, 0);
//     console.log(4);
//   })();
  
// Hoisting in Var
// console.log(a)
// var a;

// Shadow Hoisting in Let and Const
// console.log(b, c)
// let b;
// const c;
//(they have hoisting but in temporal dead zone)

//SCOPING in deep
// function test(){
//     var a = 'hello'
//     let b = "boys"

//     if(true){
//         let  a = 'world' //variable shadowing
//         // var b = "girls" //illegal shadowing
//         console.log(a)
//         console.log(b)
//     }
//     console.log(a)
//     console.log(b)
// }

// test()

//declaration in var, let and const
// var a;
// var a;
// let b;
// let b;
// const c;
// const c;

// we can re-declare let inside block{} becoz of shadowing
// let a;
// {
//     let a;
// }

//const need some initialization value for same
// const b =3;
// {
//     const b=3;
// }

//re-initialisation in var, let and const
// var a=4;
// a=5;
// let b=5;
// b=9;
// const c =8; 
// c =6;

// function abc(){
//     console.log(a)
//     const a =10
// }

// abc()


// function xyz(){
//     console.log(a, b, c)

//     const c =30
//     let b =20
//     var a =10
// }

// xyz()

// console.log(count)
// let count = 1;
// var count2 = 2;

// console.log("Hello") 


//MAP , FILTER, REDUCE
const num = [1,2,3,4]

console.log(num)

const multiply2 = num.map((x, i, arr) => {
    return x*2;
})
console.log(multiply2)

const morethan2 = num.filter((x, i, arr) => {
    return x>2
})
console.log(morethan2)