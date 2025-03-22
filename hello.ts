console.log("hello world");

function greet(person: string, date: Date) {
  console.log(`my name is ${person}, today is ${date.toDateString()}`);
}

greet("wisdom", new Date());

let object: any = { x: 0 };

object.foo();
object();
object.bar = 100;
object = "hello";

let myName: string = "wisdom";

// function greet2(name:string){
//     console.log("hello" + name.toUpperCase() + "!")
// }
// greet2(42)

function getFvoriteNumber(): number {
  return 26;
}

let names = ["tobi", "pilo", "excel"];

names.forEach(function (s) {
  console.log(s.toUpperCase());
});

names.forEach((s) => {
  console.log(s.toUpperCase());
});

function printcord(pt: { x: number; y: number }) {
  console.log("the coordinante x value is" + pt.x);
  console.log("the coordinate y vlue is " + pt.y);
}

printcord({ x: 3, y: 7 });

function logName(obj: { first: string; last?: string }) {
  console.log(obj.first);
  if (obj.last !== undefined) {
    console.log(obj.last);
  }
}

// function printId(id: number | string){
//     if (typeOf id === "string"){
//         console.log( id.toUpperCase())
//     } else {
//         console.log("your id id " + id)
//     }
// }
// printId(101)
// printId("abc")

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log("hello," + x.join(" and "));
  } else {
    console.log("welcome lone traveler" + x);
  }
}

type point = {
  x: number;
  y: number;
};

function printCord(pt: point) {
  console.log("the cordinate x value is" + pt.x);
  console.log("the cordinate y value is" + pt.y);
}

printCord({ x: 3, y: 7 });

type Id = number | string;

// interface point2 = {
//     x: number;
//     y: number;
// }

function printCord(pt: point2) {
  console.log("the cordinate x value is " + pt.x);
}

interface Animal {
  name: string;
}

interface bear extends Animal {
  honey: boolean;
}

const bear: bear = getBear();
bear.name;
bear.honey;

type Animal2 = {
  name: string;
};

type bear2 = Animal & {
  honey: boolean;
};

const bear2 = getBear2();
bear2.name;
bear2.honey;

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

let x: "hello" = "hello";
x = "hello";

x = "howdy";

function printText(s: string, alignment: "left" | "right" | "center") {
  console.log(s, alignment);
}

printText("hello", "left");
printText(`g'day,mate`, "center");

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

console.log(compare("a", "b"));

interface option {
  width: number;
}

function configure(x: option | "auto") {
  console.log(x);
}

configure({ width });

function doSomething(x: string | null) {
  if (x === null) {
    console.log("this is an error");
  } else {
    console.log("hello", +x.toUpperCase());
  }
}

function liveDangerously(x: string | null) {
  console.log(x!.toFixed());
}

const oneHundred: bigInt = BigInt(100);

const anotherHundred: bigInt = 100n;

// const firstName = symbol("name")
// const secondName = symbol("name")

// if(firstName === secondName) {

// }

// function padLeft(padding: number  | string, input: string): string{
// if(padding === "number"){
//    return "".repeat(padding) + input;
// }
// return padding + input;
// }

// function printAll(strs: string | string[] | null){

// if(typeof strs === "object"){
//     for(const s of strs){
//         console.log(s)
//     }
// } else if (typeof strs === "string"){
//     console.log(strs)
// } else{
//     return
// }

// }

function getusersOnlineMessage(numUsersOnine: number) {
  if (numUsersOnine === 0) {
    return `we have ${numUsersOnine} users onine now`;
  } else {
    ("nobody's here :(");
  }
}

function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}

function multiplyAll(
  values: number[] | undefined,
  factors: number
): number[] | undefined {
  if (!value) {
    return values;
  } else {
    return values.map((x) => x * factors);
  }
}

function example(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toUpperCase();
    y.toUpperCase();
  } else {
    console.log(x);
    console.log(y);
  }
}

function PrintAll(strs: string | string[] | null) {
  if (strs === null) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}

interface container {
  value: number | null | undefined;
}

function multiplyValue(container: container, factor: number) {
  if (container.value !== null) {
    console.log(container.value);

    container.value *= factor;
  }
}

type fish = { swim: () => void };
type bird = { fly: () => void };
type human = { swim: () => void; fly: () => void };

function move(animal: fish | bird | human) {
  if ("swim" in animal) {
    return animal.swim();
  } else {
    return animal.fly();
  }
}


function logValue(x: Date | string) {
if(x instanceof Date){
  console.log(x.toUTCString())
}
}


let x = Math.random() < 0.5 ? 10 : "hello world";

x = 1

console.log(x)

x = "hello world"

console.log(x)



function padLeft(padding: number | string, input: string) {
  if(typeof padding === "number"){
    return new Array(padding + 1).join("") + input;
  }
  return padding + input;
}


function example() {
  let x: string | number | boolean

  x = Math.random() < 0.5;
  if( Math.random() < 0.5) {
    x = "hello";
    console.log(x)
  } else {
    x = 100;
    console.log(x)
  }
return x;
}

// function isFish(pet: fish | bird): pet is fish {
// return (pet as fish).swim !== undefined;
// }

// function getSmallPet() {

// }

// let pet = getSmallPet()

// if(isFish(pet)) {
//   pet.swim()
// } else {
//   pet.fly()
// }

// const zoo: (fish | bird)[] = [getSmallPet(), getSmallPet, getSmallPet()]

// const underwater1: fish[] = zoo.filter(isFish)

// const underwater2: fish[] = zoo.filter(isFish) as fish[]


// const underwater3: fish[] = zoo.filter((pet): pet as fish => {
//   if(pet.name === sharky) return false;
//   return isFish(pet)
// } )


// interface shape {
//   kind: "circle" | "square";
//   radius: "number" ;
//   sideLength: "number";
// }

// function handleShape(shape: shape) {
// if (shape.kind === "rect"){
//   console.log('thisis not right')
// }
// }


// function getArea(shape: shape) {
// return Math.PI * shape.radius ** 2
// }

// function getArea2(shape: shape){
//   if(shape.kind === "circle"){
//     return Math.PI * shape.radius! ** 2
//   }
// }


interface Circle {
  kind: "circle"
  radius: number
}

interface Square {
  kind: "square"
  sideLength: number
}

interface Triangle {
  kind: "triangle"
  sideLength: number

}

type Shape = Circle | Square | Triangle





function getArea(shape: Shape){
  if(shape.kind === "circle"){
    return Math.PI * shape.radius ** 2
  }
}


function getArea2(shape : Shape) {
switch (shape.kind) {
  case "circle":
  return Math.PI * shape.radius ** 2;

  case "square":
  return shape.sideLength ** 2;

  default: 
  const _exhaustiveCheck: never = shape;
  return _exhaustievCheck;
}
}



function greeter(fn: (a: string) => void) {
fn("hello, world")
}

function printToConsole(s: string) {
console.log(s)
}

greeter(printToConsole)


type grettFunction() {
  function greeter(fn: greetFunction)
}


type describableFunction() {
  description: string;
  (someArg: number): boolean;


}

function doSomething(fn: describableFunction){
  console.log(fn.description + " returned " + fn(6));
}

function myFunction(someArg: number) {
  return someArg > 3;
 }

 myFunction.desription = "takes a number and returns a boolean";

 doSomething(myFunction)



type someConstructor = {
  new: (s: string) => someObject;
}

function fn(ctor: someConstructor){
  return new ctor("hello")
}


interface callorConstructor {
  (n? : number): string;
  new(s: string); Date;

}


function fn(ctor: callorConstructor){
  console.log(ctor(10));

  console.log(new ctor("hello"));
}

fn(Date)


function firstElement(arr: any[]){
return arr[]
}

function firstElement<Type>(arr: Type[]): Type | undefined {
return arr[0]
}

const s = firstElement([1,2,3])

const n = firstElement(["a", "b", "c"])

const u = firstElement([])


function map<input,output>(arr: input[], func: (arg: input) => output ) {
  turn arr.map(func)
}

const parsed = map(["1","2","3"], (n) => parseInt(n))



function longest<Type extends{ length: number}>(a:Type, b: Type) {
  if(a.length >= b.length){
    return a;
  } else{
    return b;
  }

}



const longerArray = longest([1,2], [1,2,3]);

const longerString = longest("alice", "bob");

const notOk = longest(10,100)


function minimumLength<Type extends { length: number}>(obj: Type,minimum:number): Type {
if(obj.length >= minimum){
  return obj;
} else {
  return obj;
}
}

const array = minimumLegth([1,2,3],6)

console.log(array.slice(0))

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

const arr = combine([1,2,3], [5,6,7]);


const arr2 = combine([1,2,3], ["hello"])



function firstElement<Type>(arr: Type[]) {
  return arr[0];
}


function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}

const a = firstElement([1,2,3]);

const b = firstElement2([1,2,3]);

const s = firstElement(["a","b","c"])


function filter1<Type>(arr:Type[], func: (arg:Type) => Boolean):  Type[] {
  return arr.filter(func);


}



function filter2<Type ,func extends (arg: Type) => boolean>(arr: Type[], func: func): Type[] {
  return arr.filter(func);
}

function  greet<str extends string>(s: str) {
  console.log("hello, " + s)
}

greet("world")


function greet2(s: string){
  console.log("hello" + s)
}

greet2("world")


function f(n: number) {
  console.log(n.toFixed());
  console.log(n.toFixed(3));
}


function myForEach(arr: any[], callback: (arg: any, index: number) => void) {
  for (let i =0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

myForEach([1,2,3], (a) => console.log(a))
myForEach([1,2,3], (a,i) => console.log(a,i))


function myForEach2(arr: any[], callback:(arg: any, index?: number) => void) {
  for(let i = 0; i < arr.length; i++) {
    callback(arr[i])
  }
}

myForEach2([1,2,3],(a,i) => {
  console.log(i?.toFixed())
})

function makeDate(timestamp: number); Date;
function makeDate(m: number, d: number, y: number); Date;
function makeDate(mOrTimeStamp:number, d?: number, y?: number): Date {
  if(d ! == undefined && y !== undefined) {
    return new Date(y, mOrTimeStamp, d)
  } else {
    return new Date(mOrTimeStamp)
  }
} 

const d1 = makeDate(12345678)
const d2 =  makeDate(5,5)
const d3 = makeDate(1,3)



function fn(x: boolean): void; 

function fn(x: string); void;


function  fn (x: boolean) {}



function fn(x: string): string;

function fn(x: number): boolean;


function fn(x: string | number) {
  return "oops";
}

function len(s: string): number;
function len(arr: any[]): number:
function len(x: any) {
  return  x.length;
}


len("")
len([0])
len(Math.random() > 0.5 ? "hello" : [0])


function len(x: any[] | string) {
  return x.length;
}

const user = {
  id: 123,

  Admin: false;
  becomeAdmin: function () {
    this.Admin = true
  }
}

interface DB {
  filterUsers(Filter: (this: user) )
}

const DB = getDB()
const admins = DB.filterUsers(function(this: user) {
  return this.admin
})


interface DB {
  filterUsers(filter: (this: user) => boolean): usser[]
}

const DB = getDB()

const admin = DB.filterUsers(function(this: users))

function noop() {
  return;
}

function f1(a: any){
  a.b();
}

function f2(a:unknown){
  a.b();
}

function safeParse(s: unknown){
return JSON.parse(s)
}


function fail(msg: string
): never {
  throw new Error(msg)
}


function fn(x: string | number){
  if( typeof x === "string"){
    x.toUpperCase()
  } else {
    x.toFixed()
  }
  }

  function doSomething(f: function) {
    return f(1,2,3)
  }

  doSomething((a,b,c) => a + b + c)


  function multiply(n: number, ...m: number[]) {
return m.map((x) => n * x)
  }

  const a = multiply(10,1,2,3)

  