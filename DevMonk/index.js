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
// const num = [1,2,3,4]

// console.log(num)

// const multiply2 = num.map((x, i, arr) => {
//     return x*2;
// })
// console.log(multiply2)

// const morethan2 = num.filter((x, i, arr) => {
//     return x>2
// })
// console.log(morethan2)

//FUNCTION in Javascript
//function declaration | function definition | function statement
// function square(a){
//     return a * a;
// }
// console.log(square(3))

// function expression | anonymous fxn are assigned to a variable  
// const square = function (a){
//     return a * a;
// }
// console.log(square(5))

//waht is first class function
// function square(a){
//     return a * a;
// }

// function displaysquare(fxn){
//     console.log("square is"+fxn(10))
// }

// displaysquare(square)

// what is IIFE?
// Immediately Invoked Funcion Expression  without calling function
// (function hello(num){
//     console.log(num+num)
// })(19)

// closure

// (function (x){
//     return (function(y){
//         console.log(x)
//     })(2);
// })(3)

// function scope

// for (var i =0; i<5; i++){
//     setTimeout(function() {
//         console.log(i);
//     }, i*1000);
// }

//function hoisting

// var x=21
// var fun = function(){
//     console.log(x)
//     var x = 20
// }

// fun()

// const fn = (a, x, y, ...numbers) => {
//     console.log(x,y,numbers)
// }
// fn(5,6,3,7, 8, 9)
