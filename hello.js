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
function doSomething(x) {
    if (x === null) {
        console.log("this is an error");
    }
    else {
        console.log("hello", +x.toUpperCase());
    }
}
function liveDangerously(x) {
    console.log(x.toFixed());
}
var oneHundred = BigInt(100);
var anotherHundred = 100n;
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
function getusersOnlineMessage(numUsersOnine) {
    if (numUsersOnine === 0) {
        return "we have ".concat(numUsersOnine, " users onine now");
    }
    else {
        ("nobody's here :(");
    }
}
function printAll(strs) {
    if (strs && typeof strs === "object") {
        for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
            var s_1 = strs_1[_i];
            console.log(s_1);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
}
function multiplyAll(values, factors) {
    if (!value) {
        return values;
    }
    else {
        return values.map(function (x) { return x * factors; });
    }
}
function example(x, y) {
    if (x === y) {
        x.toUpperCase();
        y.toUpperCase();
    }
    else {
        console.log(x);
        console.log(y);
    }
}
function PrintAll(strs) {
    if (strs === null) {
        if (typeof strs === "object") {
            for (var _i = 0, strs_2 = strs; _i < strs_2.length; _i++) {
                var s_2 = strs_2[_i];
                console.log(s_2);
            }
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
}
function multiplyValue(container, factor) {
    if (container.value !== null) {
        console.log(container.value);
        container.value *= factor;
    }
}
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    else {
        return animal.fly();
    }
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
}
var x = Math.random() < 0.5 ? 10 : "hello world";
x = 1;
console.log(x);
x = "hello world";
console.log(x);
function padLeft(padding, input) {
    if (typeof padding === "number") {
        return new Array(padding + 1).join("") + input;
    }
    return padding + input;
}
function example() {
    var x;
    x = Math.random() < 0.5;
    if (Math.random() < 0.5) {
        x = "hello";
        console.log(x);
    }
    else {
        x = 100;
        console.log(x);
    }
    return x;
}
function getArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
}
function getArea2(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.sideLength, 2);
        default:
            var _exhaustiveCheck = shape;
            return _exhaustievCheck;
    }
}
function greeter(fn) {
    fn("hello, world");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
function myFunction(someArg) {
    return someArg > 3;
}
myFunction.desription = "takes a number and returns a boolean";
doSomething(myFunction);
function fn(ctor) {
    return new ctor("hello");
}
function fn(ctor) {
    console.log(ctor(10));
    console.log(new ctor("hello"));
}
fn(Date);
function firstElement(arr) {
    return arr[];
}
function firstElement(arr) {
    return arr[0];
}
var s = firstElement([1, 2, 3]);
var n = firstElement(["a", "b", "c"]);
var u = firstElement([]);
function map(arr, func) {
    turn;
    arr.map(func);
}
var parsed = map(["1", "2", "3"], function (n) { return parseInt(n); });
function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
var longerArray = longest([1, 2], [1, 2, 3]);
var longerString = longest("alice", "bob");
var notOk = longest(10, 100);
function minimumLength(obj, minimum) {
    if (obj.length >= minimum) {
        return obj;
    }
    else {
        return obj;
    }
}
var array = minimumLegth([1, 2, 3], 6);
console.log(array.slice(0));
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
var arr = combine([1, 2, 3], [5, 6, 7]);
var arr2 = combine([1, 2, 3], ["hello"]);
function firstElement(arr) {
    return arr[0];
}
function firstElement2(arr) {
    return arr[0];
}
var a = firstElement([1, 2, 3]);
var b = firstElement2([1, 2, 3]);
var s = firstElement(["a", "b", "c"]);
function filter1(arr, func) {
    return arr.filter(func);
}
function filter2(arr, func) {
    return arr.filter(func);
}
function greet(s) {
    console.log("hello, " + s);
}
greet("world");
function greet2(s) {
    console.log("hello" + s);
}
greet2("world");
function f(n) {
    console.log(n.toFixed());
    console.log(n.toFixed(3));
}
function myForEach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}
myForEach([1, 2, 3], function (a) { return console.log(a); });
myForEach([1, 2, 3], function (a, i) { return console.log(a, i); });
function myForEach2(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
myForEach2([1, 2, 3], function (a, i) {
    console.log(i === null || i === void 0 ? void 0 : i.toFixed());
});
Date;
Date;
function makeDate(mOrTimeStamp, d, y) {
    if (d == undefined && y !== undefined) {
        return new Date(y, mOrTimeStamp, d);
    }
    else {
        return new Date(mOrTimeStamp);
    }
}
var d1 = makeDate(12345678);
var d2 = makeDate(5, 5);
var d3 = makeDate(1, 3);
void ;
function fn(x) { }
function fn(x) {
    return "oops";
}
