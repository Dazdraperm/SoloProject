"user strict";

let digits = [1,2,3,4,5,6]
console.log(...digits)

let arr = [1,2,3,4];
arr.forEach( (item,index) => {
    console.log(item + `index = ${index}`);

});

let dig = [1,2,3,4,5,6];
let s = dig.reduce((pr, current) => current*pr, 1);
console.log(s)

setTimeout(function (){
  console.log("hello");
}, 1000);

/*Стрелочная с 1 или 0 операторов
let anon = (a, b) => a + b;
console.log(anon(5,12));*/



let anon = a => a + 5;
console.log(anon(5));

//Object
let folder = {
    title: 'name',
    count_link: '5'

};

folder.isSelled = false;
delete folder.isSelled
console.log("isSelled" in folder)

let newKey = "color";

let car = {
    model:"okey",
    [newKey]:"okey"
}
console.log(car[newKey])


let car1 = {model: "t"};
let car2 = {model: "a"};
car1.getModel = getModel;

console.log(car1.getModel())

function getModel(){
    return this.model
}



//Стрелочная с 1 < оператором
let an = () => {return  "this an"};
console.log(an());

let obj = document.getElementById('a');
console.log(obj);

let str = "sss";
str += "ss";
console.log(str);
