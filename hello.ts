console.log("hello world")

function greet(person : string,date: Date){
    console.log(`my name is ${person}, today is ${date.toDateString()}`)
}

greet("wisdom", new Date())

let object: any = { x : 0}

object.foo()
object()
object.bar = 100
object  = "hello"


let myName: string = "wisdom"


// function greet2(name:string){
//     console.log("hello" + name.toUpperCase() + "!")
// }

// greet2(42)

function getFvoriteNumber(): number{
    return 26
}

let names = ["tobi","pilo","excel"]

names.forEach(function(s) {
    console.log(s.toUpperCase())
})

names.forEach((s) => {
    console.log(s.toUpperCase())
})


function printcord(pt: {x:number,y:number}){
    console.log("the coordinante x value is" + pt.x)
    console.log("the coordinate y vlue is " + pt.y)
}

printcord({x:3,y:7})


function logName(obj: {first: string, last?: string}){
    console.log(obj.first)
    if(obj.last !== undefined){
        console.log(obj.last)
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


function welcomePeople(x: string[] | string){
    if(Array.isArray(x)){
        console.log("hello," + x.join(" and "))
    } else {
        console.log("welcome lone traveler" + x)
    }
}


type point = {
    x: number
    y: number
}

function printCord(pt: point){
    console.log("the cordinate x value is"+ pt.x)
    console.log("the cordinate y value is" + pt.y)
}

printCord({x:3,y:7})


type Id = number | string


// interface point2 = {
//     x: number;
//     y: number;
// }

function printCord(pt: point2){
    console.log("the cordinate x value is " + pt.x)
}


interface Animal {
    name: string
}

interface bear extends Animal {
    honey: boolean
}

const bear: bear = getBear()
bear.name
bear.honey


type  Animal2 = {
    name: string
} 

type bear2  = Animal & {
    honey : boolean
}


const bear2 = getBear2()
bear2.name
bear2.honey


const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement



let x: "hello" = "hello"
x = "hello"

x  = "howdy"

function printText(s: string, alignment: "left" | "right" | "center") {
    console.log(s,alignment)
}

printText("hello","left")
printText(`g'day,mate`,"center")


function compare(a: string, b: string): -1|0|1{
    return a === b ? 0 : a > b ? 1 : -1
}

console.log(compare("a","b"))


interface option {
    width: number
}

function configure(x: option | "auto"){
    console.log(x)
}

configure({width})