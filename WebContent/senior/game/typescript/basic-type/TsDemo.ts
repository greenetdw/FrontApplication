/**
 * 基本类型
 * **/
//基本数据类型
//Boolean
var isDone:boolean = false;
//Number
var width:number = 100;
//String
var name1:string = "hello";
//Array
var list:number[] = [1, 2, 3];
var list:Array<number> = [1, 2, 3];

//Enum
enum Color {Red, Green, Blue}
;
var c:Color = Color.Red;
//alert(c);//默认下标从0开始，alert(0);
//可以手动指定下标
enum Color1 {Red = 1, Green, Blue}
var c1:Color1 = Color1.Green;
//alert(c1);//alert(2)
//根据下标查找名称
enum Color2 {Red = 1, Green = 2, Blue = 4}
var c2:string = Color2[4];
//alert(c2);//alert(Blue)

//不确定类型，退出编译检查
var notSure:any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

//不确定数组元素类型
var anylist:any[] = [1, true, "free"];
anylist[1] = 100;

//空白
function warnUser():void {
    alert(123);
}


/**
 * 类
 **/
class Animal {
    private _animalName:string;//默认是public

    get animalName():string {
        return this._animalName;
    }

    set animalName(name:string) {
        this._animalName = name;
    }

    constructor(name:string) {
        this.animalName = name;
    }

    sayHello() {
        alert(this.animalName + ": Hello");
    }
}

class Cat extends Animal {
    //重写sayHello方法
    sayHello() {
        alert(this.animalName + "(Cat)：" + "Hello");
    }
}
class Mouse extends Animal {
    sayHello() {
        alert(this.animalName + "(Mouse)：" + "Hello");
    }
}

var tom:Animal = new Cat("Tom");
tom.sayHello();//alert(Tom(Cat):Hello)
var jerry:Animal = new Mouse("Jerry");
jerry.sayHello();//alert(Jerry(Mouse):Hello)

//静态属性
class Table {
    static width = 100;
    static height = 200;
}

var width = Table.width;
alert(width);//alert(100)

//可选属性
class Phone {
    camera:string;

    photograph() {
        if (this.camera) {
            alert("start Photograph");
        }
    }
}

var nokia = new Phone();
nokia.photograph();


/**
 *接口
 **/
interface ICar {
    color:string;
    safetyDevice?:any;
}

class Bus implements ICar {
    color:string;

    constructor() {
        this.color = "Blue";
    }
}
var bus = new Bus();
alert(bus.color);

function MoveCar(car:ICar) {
    if (car.safetyDevice) {
        alert("The car is safe");
    }
    else {
        alert("The car is not safe");
    }
}

//继承接口
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}


/**
 * 模块
 **/
module MyDemo {
    export interface IDemo {

    }

    export class Demo implements IDemo {

    }
}

module Shapes {
    export module Polygons {
        export class Triangle {
        }
        export class Square {
        }
    }
}

import polygons = Shapes.Polygons;
var sq = new polygons.Square(); // 类似于 'new Shapes.Polygons.Square()'


/**
 * 函数
 **/

function add(x:number, y:number):number {
    return x + y;
}
// or
//var myAdd = function (x:number, y:number):number {
//    return x + y;
//};

var myAdd:(x:number, y:number)=>number =
    function (x:number, y:number):number {
        return x + y;
    };
//增强可读性
var myAdd:(baseValue:number, increment:number)=>number =
    function (x, y) {
        return x + y;
    };

//可选参数
function buildName(firstName:string, lastName?:string) {
    if (lastName)
        return firstName + " " + lastName;
    else return firstName;
}
var result1 = buildName("Bob");
//默认参数
function buildNameDefaultValue(firstName:string, lastName = "Smith") {
    return firstName + " " + lastName;
}
var result1 = buildNameDefaultValue("Bob");

//可变参数
function buildNameRest(firstName:string, ...restOfName:string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildNameRest("Joseph", "Samuel", "Lucas", "MacKinzie")

//Lambads 和this关键字
let people = {
    name: ["张三", "李四", "王五", "赵六"],
    getName: function () {
        return ()=> {
            var i = Math.floor(Math.random() * 4);
            return {
                n: this.name[i]
            }
        }
    }
}

var pname = people.getName();
alert("名字：" + pname().n);


//重载
function student(name:string):string;
function student(age:number):number;
function student(numberorage:any):any {
    if (numberorage && typeof (numberorage) == "string")
        alert("姓名");
    else
        alert("年龄");
}
student("Tom");//alert("姓名")
student(15);//alert("年龄")


/**
 * 泛型
 * **/

////数组泛型
//function identity<T>(arg: T[]): T[] {
//    console.log(arg.length);
//}

//泛型类型
//function identity<T>(arg:T):T {
//    return arg;
//}
//var myIdentity:<T>(arg:T)=>T = identity;
//var myIdentity:{<T>(arg:T): T} = identity;

//接口泛型
//interface GenericIdentityFn {
//    <T>(arg:T): T;
//}
//
//function identity<T>(arg:T):T {
//    return arg;
//}
//
//var myIdentity:GenericIdentityFn = identity;

// 泛型类
class GenericNumber<T> {
    zeroValue:T;
    add:(x:T, y:T) => T;
}

var myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};

//泛型约束
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg:T):T {
    console.log(arg.length);
    return arg;
}

//loggingIdentity(3);//error
loggingIdentity({length: 10, value: 3});  //只要类型包含length属性即可

//泛型类约束
class Findable<T> {
    //...
}
function find<T>(n:T, s:Findable<T>) {
    // ...
}


/**
 *合并
 **/
//合并接口
interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}

var box:Box = {height: 5, width: 6, scale: 10};

//合并模块和类
class Album {
    label:Album.AlbumLabel;
}
module Album {
    export class AlbumLabel {
    }
}
var test = new Album.AlbumLabel();

//合并模块和函数
function buildLabel(name:string):string {
    return buildLabel.prefix + name + buildLabel.suffix;
}

module buildLabel {
    export var suffix = "";
    export var prefix = "Hello, ";
}

alert(buildLabel("Sam Smith"));

//合并模块与枚举
enum Color {
    red = 1,
    green = 2,
    blue = 4
}

module Color {
    export function mixColor(colorName:string) {
        if (colorName == "yellow") {
            return Color.red + Color.green;
        }
        else if (colorName == "white") {
            return Color.red + Color.green + Color.blue;
        }
        else if (colorName == "magenta") {
            return Color.red + Color.blue;
        }
        else if (colorName == "cyan") {
            return Color.green + Color.blue;
        }
    }
}

//不能合并
//类与类不能合并
//class A{
//
//}
//
//class A{
//
//}
//接口不能与类合并
//interface A{}
//
//class A{}
//变量和类不能合并
//var test=false;
//class test{
//
//}