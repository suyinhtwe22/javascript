// console.dir(Date);
// console.log(Date.now());
// console.log(Date.parse("2021-02-3"));

// const d=new Date("2002-8-27");
// const d=new Date("2002,8");

// const d = new Date();
// let days=0;
// const date=function(){
//     days=d.getDay() - d.setDate(2022-10-8)
//     return days;
// }
// console.log(date());
// console.log(d);
// console.dir(d);
// console.log(typeof d);
// console.dir(d.toDateString());
// console.dir(d.toTimeString());
// console.dir(d.toLocaleDateString());
// console.dir(d.toLocaleTimeString());

// console.log(d.getMonth());
// console.log(d.getDay());
// console.log(d.getFullYear());
// console.log(d.getDate());

// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());
// console.log(d.getTime());


// const d = new Date();
// console.log(d);
// d.setHours(d.getHours() + 300);
// console.log(d);


//next blood donation date
//from current date to next 4 months
// d.setMonth(d.getMonth() + 4);
// console.log(d.toLocaleDateString());

//th 50hr/2hr/25days
// d.setDate(d.getDate()+25);
// console.log(d.toLocaleDateString());

//  const st = new String("San Kyi Tar Par");

//  console.log(st.split(" "));

//  console.log(st);
//  console.log(st.length);
//  console.log(st[0]);
//  console.log(st.charAt());
// console.log(st.substr(0,7));
// console.log(st.substring(4,8));
// console.log(st.slice(0,7));
// console.log(st.slice(7)); 

// console.log(st.search("Tar"));
// console.log(st.search("tar"));

// console.log(st.replace("Par", "Lay Har"));
// console.log(st.replaceAll("ar", "er"));

// const newSt = st.trim();
// console.log(newSt.length);
// const newSt = st.trimStart();
// const newSt = st.trimEnd();

// console.log(newSt);
// console.log(newSt.length);

// const coupon="A4"; //000A4
// console.log(coupon.padStart(5,"X"));

// console.dir(Number);
// console.log(undefined / 2);
// console.log(Number.isNaN(undefined / 2));
// console.log(Number.isFinite(5/0));
// console.log(Number.isFinite(5/2));
// console.log(Number.isInteger(4/2));
// console.log(Number.isInteger(777.7));
// console.log(Number.parseFloat(666.888));
// console.log(Number.parseInt(666.888));
// console.log(Number.parseFloat("12Kyats")); 
// console.log(Number.parseFloat("$50"));
 
// const num = new Number(425489.763532);
// console.log(num);
// console.log(num.toFixed(2));
// console.log(num.toExponential(3));

// console.log(Math);



// const person={
//     firstName:"John",
//     lastName:"Eric",
//     age:17
// }

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.dir(Object);

// console.dir(Array);

// const fruits= new Array("apple","banana","orange","mango")
// console.log(fruits );

const fruits = ["apple", "banana", "orange", "grape", "kiwi", "strawberry", "watermelon", "mango", "pineapple", "pear"]
// const char=["aaa","bbb","ccc"];
const mm=[1,2,3,4];

// spread syntax 
// const result=[...char, "ddd","eee", ...fruits, ...mm]; //can use for object too
// console.log(result);
//can use for object too
// const obj={x:5,y:6};

// const sumAll=function(...all){
//     console.log(all);
//     let total=0;
//     for(x of all){
//         total +=x;
//     }
//     return total;
// };
// console.log(sumAll(4,6,7,5,3,2));
// console.log(sumAll(...mm));

// // const modifyArray=function(arr,logic){
// // const result=[];
// // for(el of arr){
// //     result.push(logic(el));
// //     return result;
// // }

// };
// console.log(...mm);
// const logic=function(el){
//     return el+10;
// }
// console.log(modifyArray(mm,logic));


// fruits.forEach(function(el){  //for each method
//     console.log(el);
// });


// const r=mm.map(function(el){ //map use for profit reality
//     console.log(el);
//     return el*2;
// });
// console.log(r);
// console.log(fruits);


// products = [
//     {"id": 101, "name": "Laptop", "price": 999.99, "rating": 4.8},
//     {"id": 102, "name": "Smartphone", "price": 499.99, "rating": 4.5},
//     {"id": 103, "name": "Headphones", "price": 79.99, "rating": 4.2},
//     {"id": 104, "name": "Camera", "price": 599.99, "rating": 4.6},
//     {"id": 105, "name": "Fitness Tracker", "price": 89.99, "rating": 4.0},

// ]
// console.table(products);

// const saleProducts=products.filter(function(el){ //filter 
//     return el.price < 500;
// });
// console.table(saleProducts);

//map
//find
//findIndex
//reduce
//some
//every

// console.log(fruits.pop());
// console.log(fruits.shift());
// console.log(fruits.pop());
// fruits.push("aaa");
// fruits.unshift("bbb");

// console.log(fruits);
// fruits.reverse();
// console.log(fruits);

// fruits.sort();
// console.log(fruits);

// console.log(fruits.slice(1,3));
// console.log(fruits);
// // console.log(fruits.splice(1,4));
// console.log(fruits.splice(1,4,"aaa","bbb","ccc"));
// console.log(fruits);




// function calculateDaysBetweenDates(startDateStr, endDateStr) {
//     // Parse the date strings into Date objects
//     const startDate = new Date(startDateStr);
//     const endDate = new Date(endDateStr);

//     // Calculate the time difference in milliseconds
//     const timeDifference = endDate - startDate;

//     // Convert the time difference from milliseconds to days
//     const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

//     return daysDifference;
// }

// // Example usage:
// const startDateString = "2022-10-08"; // Replace with your custom start date
// const endDateString = "2024-01-01";   // Replace with your custom end date

// const daysBetween = calculateDaysBetweenDates(startDateString, endDateString);
// console.log(`You and I have been together for ${daysBetween} days.`);


// const md = new Date("2022-10-08");
// console.log(md);
// md.setDate(md.getDate() + 450);
// console.log(md);


  