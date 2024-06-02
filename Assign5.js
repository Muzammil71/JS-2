let arr4=[0,1,2,-3,-4,5];
let findPositiveNum = arr4.filter(value=> value>0);
document.getElementById("result1").innerHTML = `The new Array find positive number [ ${findPositiveNum}] `;
let sumOfPositiveNum = findPositiveNum.map((a,b)=>{
    return a+b;
});
document.getElementById("result2").innerHTML= `The sum of new Array is : ${sumOfPositiveNum}`;