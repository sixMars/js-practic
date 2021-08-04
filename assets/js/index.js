/*const num1=[1,2,3];
const num2=[4,5,6];
const num_all=num1.concat(num2);
alert(num_all);
const num1r=num1.reverse();
alert(num1r);
const num1p=num1.push(4,5,6);
num1.unshift(4,5,6);
alert(num1);
const array1=['js','css','iq'];
alert(array1.shift());
alert(array1.pop());
alert(array1);
const array2=[1,2,3,4,5];
const array2_f=array2.slice(0,3);
alert(array2_f);
const array2_e=array2.slice(3);
alert(array2_e);
const array2_s1=array2.splice(1,2);
alert(array2);
const array3=[1,2,3,4,5];
const array2_s2=array3.splice(0,4);
alert(array3);*/

/*function Phone(model, manufacturer, price, color, inStock) {
  this.model = model;
  this.manufacturer = manufacturer;
  this.price = price;
  this.color = color;
  this.comments = [];
  this.inStock = inStock;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function getPhones(amount) {
  const newPhones = [];

  for (let i = 0; i < amount; i++) {
    newPhones.push(
      new Phone(
        `Model ${i}`,
        "Panasonic",
        getRandomInt(5000, 50000),
        "black",
        Math.random() >= 0.5
      )
    );
  }

  return newPhones;
}

const phones = getPhones(50);

console.table(phones);

let avabilty = 0;
let sale = 0;

for (i = 0; i <= 50; i++) {
  if ( phones[i].inStock = true) {
    avabilty += 1;
  }
  if (phones[i].price <= 30000) {
    sale += 1;
  }
}
console.log(avabilty, sale);
*/
/*const titles=this.title*/ /*const arr = [1, 2, 3, 4];
const evenArr = arr.filter((number) => number % 2 === 0);
function sum() {
  let result = 0;
  for (let i = 0; i <= arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
const arrowSum = (...rest) => {
  const aS = rest.reduce((accumlarot, valueS) => {
    return accumlarot + valueS,arr;
  });
  return aS;
};

*/
/*class People {
  constructor(name, surname, age) {
    this.name = name;
    this.latName = surname;
    if (isNaN(age) || age !== "number") {
      throw new Error("its not number");
    }
    if (age <= 0) {
      throw new Error("your nopt human");
    }
    this._age = age;
   
  }
get age(){
  return this._age
}
set age(newAge){
  if (isNaN(newAge) || newAge !== "number") {
    throw new TypeError("its not number");
  }
  if (newAge < 0) {
    throw new RangeError("your nopt human");
  }
  this._age=newAge;


}
  Adult() {
    return this(age) >= 18;
  }
}
const human1 = new People("Arcadia", "arcadievna", 15);
const human2 = new People("Bot", "bot", 135);
*/
/*class Machine {
  constructor(name, v, speed) {
    if (name === "") {
      throw new TypeError("error1");
    }
    this._name = name;
    if (v < 0) {
      throw new RangeError("error2");
    }
    this._v = v;
    if (speed < 0) {
      throw new RangeError("error2");
    }
    this._speed = speed;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    if (newName === "") {
      throw new TypeError("error1");
    }
    this.name = newName;
  }
  get v() {
    return this._v;
  }
  set v(newV) {
    if (newV < 0) {
      throw new RangeError("error2");
    }
    this.v = newV;
  }
  get speed() {
    return this._speed;
  }
  set speed(newSpeed) {
    if (newSpeed < 0) {
      throw new RangeError("error2");
    }
    this.speed = newSpeed;
  }
}
class Fuel {
  constructor(volume, density) {
    if (volume === "" && volume < 0) {
      throw new TypeError("error1");
    }
    this._volume = volume;
    if (density === "" && density < 0) {
      throw new TypeError("error1");
    }
    this._denisity = denisity;
  }

  
  get volume() {
    return this._volume;
  }
  set volume(newVolume) {
    if (newVolume === "" && newVolume < 0) {
      throw new TypeError("error1");
    }
    this.volume = newVolume;
  }
  get density() {
    return this._denisity;
  }
  set density(newDensity) {
    if (newDenisity === "" && newDensity < 0) {
      throw new TypeError("error1");
    }
    this.density = newDensity;
  }
  getWeight() {
    return this.density * this.volume;
  }
}
*/
/*class User{
  constructor(name,lastName,age){
    this._name=name;
    this._lastName=lastName;
    this._age=age;
  }
  get name(){
return this._name;
  }
  set name(newName){
    if(newName===""){
      throw new RangeError('error1');
    }
  this.name=newName;
  }
  get lastName(){
      return this._lastName
  }
  set lastName(newLastName){
    if(newLastName===""){
      throw new RangeError("errror");
    }
 this.lastName=newLastName;
  }
get age(){
  return this._age;
}
set age(newAge){
  if(newAge===""&&newAge<0)
  {
    throw new Error("error2");
  }
  this.age=newAge;
}
}
class Moderatir extends User{
  constructor(name,lastName,age,permission){
    super(name,lastName,age);  
  this.permission=permission;
  }
  deleteMassege(messegeId){
    theard.pop();
  }
}
class Admin extends User{
  constructor(name,lastName,age,permission,email){
    super(name,lastName,permission,age,email);
  }
}*/
class Figure {
  constructor(a, h) {
    this.a = a;
    this.h = h;
  }
  getArea() {
    return "площадь";
  }
}
class Sqare extends Figure {
  constructor(a) {
    super("квадрат");
    this.a=a;
  }
  getArea() {
    return this.a * this.a;
  }
}
function getFigureArea(figure) {
  if (figure instanceof Figure) {
    return figure.getArea();
  }
  throw new TypeError("это не фигура");
}
const sqare = new Sqare(5);
const test=new Sqare('blablabla');



function isAdult(isAdult){
  if (isAdult>=18){
    console.log("true");
  }
  else{
    throw new TypeError("your dont adult");
  }
}



function checkMltiplicy(a,b){
if((a%b)===0){
  console.log("true");
}
else{
  console.log("false");
}
}


function checkTriagle (a,b,c){
  if ((a+b)>c||(b+c)>a||(a+c)>b){
    throw new TypeError("its not triagle");
  }
  else{
    console.log("true");
  }
}


function Sqare(a,arria){
arria=(a*a);
}






