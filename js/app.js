console.log("***");
console.log("***");
console.log("***");

// console.log("*\n**\n***");
//  run()

// function run(){
// console.log("*");
// console.log("**");
// console.log("***");
// console.log("Hello");
//  return "tringle";
// }
// // run()

// console.log(run());

// function findBirthYear(currentAge=0,name="My test"){
//     const currentYear=2023;
//     const birthYear= currentYear-currentAge;
//     return `${name} was born in ${birthYear}`;
// }

// console.log(findBirthYear(21,"Su Su"));
// console.log(findBirthYear(29,"Mg Mg"));
// console.log(findBirthYear(24,"Aye Aye"));
// console.log(findBirthYear(23,"Wai Yan"));

// console.log(findBirthYear());

// function area(width=0,breadth=0){
//     const result=width*breadth;
// return `width ${width}ft \nbreadth ${breadth}ft\narea ${result}sqft`;
// }

// console.log(area(6,8));
// console.log(area());

// const fruits=["apple","banana","mango","orange"];
// fruits[2]="lime";
// console.log(fruits);
// console.log(typeof fruits);

// console.log(fruits[3]);

// const arr=[];
// arr[0]="aaa";
// arr[1]="bbb";
// arr[2]="ccc";
// console.log(arr);

// const myself={
//     name:"Su Yin Htwe",
//     age:"21",
//     townshoip:"hlaing"

// }
// console.log(myself);
// console.log(typeof myself);

// //acess property
// console.log(myself["name"]);
// console.log(myself["age"]);

// //dot
// console.log(myself.name);
// console.log(myself.townshoip);

// //overwrite
// myself.name="su su";
// console.log(myself);

// const obj={};
// obj["a"]="aaa";
// obj.b="bbb";
// console.log(obj);


// console.log("Su Yin Htwe")
// let x=9;
// console.log(x)
// let y=3;
// console.log(y)
// console.log(x+y)

// const name="mg mg";
// let age=15;
// let township="Mgway";

// let pocketMoney=200;
// const orange=50;
// pocketMoney-=orange;
// console.log(pocketMoney);

// const st1={
// name,
// age,
// township
// }
// console.log(st1);
// const st2={
//     name:"kyaw kyaw",
//     age:16,
//     township:"Ygn"
//     }
//     console.log(st2);
//     const st3={
//         name:"aye aye",
//         age:17,
//         township:"naypyitaw"
//         }
//         let students=[st1,st2,st3];
//         console.log(students);
//         console.table(students);

        // const records=[];
        // let recordIndex = 0;
        
        // function area(width,height){
        //         const resultArea=width*height;
        //         records[recordIndex++]={
        //             width:width + "ft",
        //             height:height + "ft",
        //             area:resultArea + "sqft",
        //         };
        //         return resultArea + "sqft";
        //     }
            
        //     console.log(area(6,8));
        //     console.log(area(50,12));
        //     console.log(area(13,4));

        //     console.log(records);
        //     console.table(records);
            
        
// const rates= {
//     USD:2100,
//     SGD:1500,
//     EUR:3000,
// }
//  function toMMK(amount,fromCurrency){
//     const exchangeRate = rates[fromCurrency];
//     const result =amount * exchangeRate
//     return result + "MMK"
//  }

//  console.log(toMMK(200,"USD"));
//  console.log(toMMK(1450,"SGD"));
//  console.log(toMMK(50,"EUR"));

//  function fromMMK(amount,toCurrency){
//     const exchangeRate=rates[toCurrency];
//     const result= amount/exchangeRate;
//     return `${result} ${toCurrency}`;
//  }
//  console.log(fromMMK(500000,"USD"));
//  console.log(fromMMK(100000,"SGD"));

//  function declaration
// function run(x,y){
    
//     return x*y;
// }

// function expressiion

// const run=function(){

// }

// IIFE
// (function(){
//     console.log("I'm life");
// })()

// console.log(`I'm susu and $(function(){return 29}) years old.`);

// global scope
// const x=5;

// function run()
// {
//         console.log(x);
//         let y=6;
//         console.log(y);
// }
// console.log(y); m ya pr

// console.log(y);
// let y=7;

// const obj={
//         a:"aaa",
//         b:"bbb",
//         c:"ccc",
//         run:function(){
//                 return "I'm run "+this.test()
//         },
//         test(){
//                 return "I'm test "
//         }
// }
// console.log(obj.a);
// console.log(obj.b);
// console.log(obj.run());
// console.log(obj.test());

// condition 

// if
// else
// else if

// let x;

// if(false){
// x=5;
// console.log("*");
// console.log("**");
// console.log("***");

// }
// else{
//         x=10;
//         console.log("*false*");
// }
// console.log(x);

// // no need else

// function run(){
//         if(false){
//                 return "true run";
//         }
//         return "false run";
// }
// console.log(run());

// const mark=85;
// //asc=>1,2,3......10
// //desc=>10,9,8,......1

// if(mark >=80){
//         console.log("distention");
// }
// else if(mark >=40){
//         console.log("Passed");
// }
// else if(mark < 40){
//         console.log("fail");
// }
 
// looping
// for(let i=0;i <= 100;i += 5){
//         console.log(i);
// }

// for(let i=100;i>=0;i-=10){
//         console.log(i);
//           //break,continue
//           if(i===50) break;

// }

// Creating an array with 5 fruit elements
// const fruitArray = ["Apple", "Banana", "Orange", "Grapes", "Strawberry"];

// // Accessing and printing each element in the array
// for (let i = 0; i < fruitArray.length; i++) {
//     console.log(fruitArray[i]);
// }

// const fruit = ["Apple", "Banana", "Orange", "Grapes", "Strawberry"];

// for (let i=0;i<5;i++){
//         console.log(i,fruit(i));
// }

// console.log(fruit);
//  for (x of fruit){
//         console.log(x);
//  }

// const car={
//         make:"Toyota",
//         model:"Camy",
//         year:20022,
// };
// for(key in car){
//         console.log(key,car[key]);
// }
// let total=0;
// const products = [
//         { id: 1, description: "Product 1", price: 10.99 },
//         { id: 2, description: "Product 2", price: 20.49 },
//         { id: 3, description: "Product 3", price: 15.75 },
//         { id: 4, description: "Product 4", price: 8.95 },
//         { id: 5, description: "Product 5", price: 12.99 }
//       ];

// for(el of products){
//         total +=el.price;
//         console.log(`${el.description} : ${el.price}`);
// }
// console.log("=============");
// console.log("total",total);

// for(el of products){
// for (x in el){
//         if(x=="id") continue;
//         console.log(x,",",el[x]);
// }
// }

// let x=10;
// let y=5;
// console.log(x > y);
// console.log(x=='10');
// console.log(x==='10');
// console.log(x!=y);

// console.log(true ? "it is true" : "it is false");
// console.log(false ? "it is true" : "it is false");

// const pocketMoney = 1000;
// const choice = pocketMoney > 1500 ? "taxi" : "bus";
// console.log(choice);

//  console.log(true);
//  console.log(!true);
//  console.log(!!true);
//  console.log(!!!true);

//  const age=21;
//  const nrc="n";
//  if(age>18 && nrc=="n"){
//         console.log("U can vote");
//  }else{
//         console.log("U cannot vote");
//  }

// const bus=65;
//  if(bus==20 || bus==65){
//         console.log("U will reach MMSIT");
//  }else{
//         console.log("U will not reach");
//  }

// const canIPassEntrance = function(mark,vipe){
//         if(mark >= 60 && vipe >=60){
//                 return "U pass Entrance"
//         }
//         return "U fail"
// }
// console.log(canIPassEntrance(80,50));

 
