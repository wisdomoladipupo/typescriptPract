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

function printId(id: number | string){
    if (typeOf id === "string"){
        console.log( id.toUpperCase())
    } else {
        console.log("your id id " + id)
    }
 
}

printId(101)
printId("abc")
