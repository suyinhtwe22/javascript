console.log("Loop Practicals");

const points = [34, 15, 2, 52, 19, 56, 30, 57];
// const product = [];
// for(el of products){
//     for (x in el){
//             console.log(x,",",el[x]);
//     }
//     }
// const oddEven=function(array){
//     const odd=[];
// let oddIndex=0;
// const even=[];
// let evenIndex=0;

// for (let el of array)
// {
//     if(el%2===1){
//         odd[oddIndex++]=el;
//     }else if (el%2===0){
//         even[evenIndex++]=el;
//     }
    
//     }
//     return{
//         odd,even
//     };

// }

const arraySlice=function(points,startIndex=0,length=5 ){
    const result=[];
    let resultIndex=0;
    const endIndex=startIndex + length;
for(let i in points){
    if (i>=startIndex && i<endIndex){
        result[resultIndex]=points[i];

    }else{
        continue;
    }
}
return result;
};
console.log(arraySlice(points,1,4));
console.log(points);

const arrayCopy=function(points){
    const copy=[];
let copyIndex=0;
for(let el of points){
    copy[copyIndex++]=el;
}
return copy;
}

const rectangle=function(row,col){
    let result="";
for(let i=1;i<=row;i++){
    let colStar="";
    for(let x=1;x<=col;x++){
        colStar +="* - ";
    }

    result +=colStar + "\n";
}
return result;
}
 
console.log(rectangle(4,4));

const student1Mark = [
    {
        subject: "Myanmar",
        short: "mm",
        mark: 45
    },
    {
        subject: "English",
        short: "en",
        mark: 72
    },
    {
        subject: "Mathematic",
        short: "math",
        mark: 96
    },
    {
        subject: "Chemistry",
        short: "chem",
        mark: 87
    },
    {
        subject: "Physics",
        short: "phy",
        mark: 85
    },
    {
        subject: "Biology",
        short: "bio",
        mark: 54
    }
]

let total=0;
for(let el of student1Mark){
    total+=el.mark;
}
console.log(total,"marks");


