console.log("hello world");
function greet(person, date) {
    console.log("my name is ".concat(person, ", today is ").concat(date.toDateString()));
}
greet("wisdom", new Date());
var object = { x: 0 };
object.foo();
object();
object.bar = 100;
object = "hello";
var myName = "wisdom";
// function greet2(name:string){
//     console.log("hello" + name.toUpperCase() + "!")
// }
// greet2(42)
function getFvoriteNumber() {
    return 26;
}
var names = ["tobi", "pilo", "excel"];
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
function printcord(pt) {
    console.log("the coordinante x value is" + pt.x);
    console.log("the coordinate y vlue is " + pt.y);
}
printcord({ x: 3, y: 7 });
function logName(obj) {
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
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log("hello," + x.join(" and "));
    }
    else {
        console.log("welcome lone traveler" + x);
    }
}
function printCord(pt) {
    console.log("the cordinate x value is" + pt.x);
    console.log("the cordinate y value is" + pt.y);
}
printCord({ x: 3, y: 7 });
// interface point2 = {
//     x: number;
//     y: number;
// }
function printCord(pt) {
    console.log("the cordinate x value is " + pt.x);
}
var bear = getBear();
bear.name;
bear.honey;
var bear2 = getBear2();
bear2.name;
bear2.honey;
var myCanvas = document.getElementById("main_canvas");
var x = "hello";
x = "hello";
x = "howdy";
function printText(s, alignment) {
    console.log(s, alignment);
}
printText("hello", "left");
printText("g'day,mate", "center");
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
console.log(compare("a", "b"));
function configure(x) {
    console.log(x);
}
configure({ width: width });
