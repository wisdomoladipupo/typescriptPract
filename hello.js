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
function printId(id) {
    if (typeOf)
        id === "string";
    {
        console.log("your id id " + id.toUpperCase());
    }
    {
        console.log("your id id " + id);
    }
}
printId(101);
printId("abc");
printId({ myId: 22342 });
