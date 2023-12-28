//classes

//  class Test {
//     x(){
//         return "x";
//     }
//     a ="aaa";
//  }

//  class to Object
//  const test= new Test();
 
//  console.log(test);

// class Student {
//     name;
//     age;
//     gender;
//     major;
// }

//instantiation

// const st=new Student();
// st.name="Mg Mg";
// st.age=18;
// st.gender="male";
// st.major="English";

// console.log(st);

// const st2=new Student();
// st2.name="Su Su";
// st2.age=17;
// st2.gender="female";
// st2.major="English";

// console.log(st2);

//initialization

// class Test {
//     a="aaa";
//     #b="bbb";//Private 
//     static d="ddd";
//     x(){
//         console.log("x");
//     }
//     static y(){
//         return "method y"
//         }
//     constructor(a,b){
//         console.log("constructor",a,b);
//     }
// }

// const test=new Test();
// console.log(test);
// //access modifier(public,private)
// console.log(test.a);//access 
// console.log(test.b);

// console.log(Test.d); //instant build sayr m lo
// console.log(Test.y());

// class Student{
//     constructor(inputName,inputAge,inputGender){
//         this.name=inputName;
//         this.age=inputAge;
//         this.gender=inputGender;
//     }
// }
// const st=new Student("Mg Mg","15","male");
// console.log(st);


class Person{
        constructor(inputName,inputAge,inputGender){
            this.name=inputName;
            this.age=inputAge;
            this.gender=inputGender;
        }
    }
    
class Student extends Person{
    constructor(name,age,gender,major){
        super(name,age,gender);
        this.major=major;
    }
}

console.log(Student("kyaw",15,"male","Swd"));