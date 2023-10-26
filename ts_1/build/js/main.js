"use strict";
// ////// Implicit Type ////////
// let myName = "Elyor";
// let age = 25;
// let isLoading = true;
// let albums = 'two'
// // let albums = 2
// console.log(myName)
// ///// Explicit Type ///// 
// let myName: string ;
// let age: number;
// let isLoading: boolean;
// let albums: string | number
// myName = 'Elyor';
// age = 25;
// isLoading = true;
// albums = 11
// console.log(myName)
//////// Arrays  ///////
// let stringArr = ['one', 'two', 'three']
// let numberArr = [1, 2, 3]
// let boolenArr = [true, false, true]
// let mixedData = ['one', 2, true]
// console.log( stringArr)
////////// Arrays  ///////
// let stringArr: string[];
// let numberArr: number[];
// let booleanArr: boolean[];
// let mixedData: (string | number | boolean)[]
// mixedData = ['one', 2, true]
// console.log(mixedData)
//////////////  Tuple  ///////
// let mixedTup: [string, number, boolean] = ['Elyor', 21, false];
// console.log(mixedTup)
// console.log(typeof mixedTup)
//////////////  Tuple  ///////
// let mixedTup: [string, number, boolean]
// mixedTup = ['Elyor', 21, false];
// console.log(mixedTup)
// //////////////  Objects  ///////
// interface Guitarist  {
//     name: string,
//     active: boolean,
//     albums: (string | number )[]
// }
// let myObj: Guitarist = {
//     name: 'Jone',
//     active: false,
//     albums: [10, 1256, 'Start']
// }
// console.log(myObj.name)
//////////////  Objects  ///////
// interface Guitarist {
//     name: string,
//     active: boolean,
//     albums: (string | number )[]
// }
// let myObj: Guitarist = {
//     name: 'Jone',
//     active: false,
//     albums: [19, 12, 'Start']
// }
// const greetGuitarist = (guitarist: Guitarist) => {
//     return `Hello ${guitarist.name}`
// }
// console.log(greetGuitarist(myObj))
// //////////////  Objects  ///////
// // type Guitarist = {
// //     name?: string,
// //     active: boolean,
// //     albums: (string | number )[]
// // }
// interface Guitarist {
//     name?: string,
//     active: boolean,
//     albums: (string | number )[]
// }
// let myObj: Guitarist = {   
//     active: false,
//     albums: [19, 12, 'Start']
// }
// let myObj_2: Guitarist = {
//     name: 'Jonatan',
//     active: true,
//     albums: [11, 1, 'begin']
// }
// const greetGuitarist = (guitarist: Guitarist) => {
//     if (guitarist.name) {
//         return `Hello ${guitarist.name.toUpperCase()}!`    
//     }
//     return 'Hello!'   
// }
// console.log(greetGuitarist(myObj))
////////  Enums  //////////////////////////////
// enum Grade {
//     U=1,
//     D,
//     C,
//     B,
//     A,
// }
// console.log(Grade.B)
// //////////  Type Aliases  //////////////
// type stringOrNumberType = string | number
// type stringOrNumberTypeArray = (string | number)[]
// type booleanType = boolean
// // type Guitarist =  {
// //     name: stringOrNumberType,
// //     active: booleanType,
// //     albums: stringOrNumberTypeArray
// // }
// interface Guitarist {
//     name: stringOrNumberType,
//     active: booleanType,
//     albums: stringOrNumberTypeArray
// }
// let myObj: Guitarist = {
//     name: 'Holand',
//     active: true,
//     albums: [1254, 258, 'Beginer']
// }
// console.log(myObj.albums)
// ////////// Literal types //////////////
// let userName: 'Elyor' | 'John' | 'Amy'
// userName = 'Elyor'
// userName = 'John'
// userName = 'Amy'
// ////////// Functions //////////////
// const add = (a:number, b: number) => { 
//     return a + b
// }
// console.log(add(3, 4))
// // //////////  Functions  //////////////
// const add = (a: number, b: number): number => {   
//     return a + b
// }
// console.log(add(3, 4))
// ////////// Functions //////////////
// const add = (a: string, b: string) => { 
//     return `${a} ${b}!` 
// }
// console.log(add('Hello', 'World'))
// // /////////// Functions    /////////////
// const add = (a: string, b: string): string => {       
//     return `${a} ${b}!`
// }
// console.log(add('Hello', 'World'))
///////////// Functions   /////////////
// const add = (a: string, b: string): string => {     
//     return `${a} ${b}!`
// }
// const logMsg = (message: any): void => { 
//     return message
// }
// console.log(add('Hello', 'world'))
// console.log(logMsg("This is a message"))
///////////// Functions    /////////////
// // type mathFanction = (a: number, b: number) => number
// interface mathFanction {
//     (a: number, b: number): number
// } 
// let multiply: mathFanction = function(a, b) {
//     return a * b
// }
// console.log(multiply(2, 2))
// /////////// Functions    /////////////
// // type myFanction = (name: string, age: number) => string
// interface myFanction {
//     (name: string, age: number): string
// } 
// let multiply: myFanction = function(name, age) {
//     return `My name is ${name} , I am ${age} years old`
// }
// console.log(multiply('Bob', 20))
// /////////// Functions    /////////////
// // type myFanction = (name: string, age: number) => string
// interface myFanction {
//     (name: string, age: number): string
// } 
// let multiply: myFanction = function(name, age) {
//     return `My name is ${name} , I am ${age} years old`
// }
// console.log(multiply('Bob', 20))
// //////// Optional parametrs  ////////
// const addAll = (a: number, b: number, c?: number): number => {
//     if (typeof c !== 'undefined') {
//         return a + b + c
//     }  
//     return a + b 
// }
// // console.log(addAll(2, 3))
// //////// Optional param value  ////////
// const addAll = (a: number, b: number, c?: number): number => {
//     if (typeof c !== 'undefined') {
//         return a + b + c
//     }  
//     return a + b 
// }
// const sumAll = (a: number, b: number, c: number = 2): number => {
//     return a + b
// }
// console.log(addAll(2, 3, 2))
// console.log(sumAll(2, 3))
// console.log(addAll(2, 3))
//////// default param value  ////////
// const addAll = (a: number, b: number, c: number): number => {
//     if (typeof c !== 'undefined') {
//         return a + b + c
//     }  
//     return a + b 
// }
// const sumAll = (a: number = 10, b: number, c: number = 2): number => {
//     return a + b + c 
// }
// console.log(addAll(2, 3, 2))
// console.log(sumAll(undefined, 3))
// //////// Rest Parameters  ////////
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
console.log(total(10, 2, 3, 4));
