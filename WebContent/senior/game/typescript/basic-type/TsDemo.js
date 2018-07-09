var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 基本类型
 * **/
//基本数据类型
//Boolean
var isDone = false;
//Number
var width = 100;
//String
var name1 = "hello";
//Array
var list = [1, 2, 3];
var list = [1, 2, 3];
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Red;
//alert(c);//默认下标从0开始，alert(0);
//可以手动指定下标
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
var c1 = Color1.Green;
//alert(c1);//alert(2)
//根据下标查找名称
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = Color2[4];
//alert(c2);//alert(Blue)
//不确定类型，退出编译检查
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
//不确定数组元素类型
var anylist = [1, true, "free"];
anylist[1] = 100;
//空白
function warnUser() {
    alert(123);
}
/**
 * 类
 **/
var Animal = (function () {
    function Animal(name) {
        this.animalName = name;
    }
    Object.defineProperty(Animal.prototype, "animalName", {
        get: function () {
            return this._animalName;
        },
        set: function (name) {
            this._animalName = name;
        },
        enumerable: true,
        configurable: true
    });
    Animal.prototype.sayHello = function () {
        alert(this.animalName + ": Hello");
    };
    return Animal;
}());
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //重写sayHello方法
    Cat.prototype.sayHello = function () {
        alert(this.animalName + "(Cat)：" + "Hello");
    };
    return Cat;
}(Animal));
var Mouse = (function (_super) {
    __extends(Mouse, _super);
    function Mouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mouse.prototype.sayHello = function () {
        alert(this.animalName + "(Mouse)：" + "Hello");
    };
    return Mouse;
}(Animal));
var tom = new Cat("Tom");
tom.sayHello(); //alert(Tom(Cat):Hello)
var jerry = new Mouse("Jerry");
jerry.sayHello(); //alert(Jerry(Mouse):Hello)
//静态属性
var Table = (function () {
    function Table() {
    }
    return Table;
}());
Table.width = 100;
Table.height = 200;
var width = Table.width;
alert(width); //alert(100)
//可选属性
var Phone = (function () {
    function Phone() {
    }
    Phone.prototype.photograph = function () {
        if (this.camera) {
            alert("start Photograph");
        }
    };
    return Phone;
}());
var nokia = new Phone();
nokia.photograph();
var Bus = (function () {
    function Bus() {
        this.color = "Blue";
    }
    return Bus;
}());
var bus = new Bus();
alert(bus.color);
function MoveCar(car) {
    if (car.safetyDevice) {
        alert("The car is safe");
    }
    else {
        alert("The car is not safe");
    }
}
/**
 * 模块
 **/
var MyDemo;
(function (MyDemo) {
    var Demo = (function () {
        function Demo() {
        }
        return Demo;
    }());
    MyDemo.Demo = Demo;
})(MyDemo || (MyDemo = {}));
var Shapes;
(function (Shapes) {
    var Polygons;
    (function (Polygons) {
        var Triangle = (function () {
            function Triangle() {
            }
            return Triangle;
        }());
        Polygons.Triangle = Triangle;
        var Square = (function () {
            function Square() {
            }
            return Square;
        }());
        Polygons.Square = Square;
    })(Polygons = Shapes.Polygons || (Shapes.Polygons = {}));
})(Shapes || (Shapes = {}));
var polygons = Shapes.Polygons;
var sq = new polygons.Square(); // 类似于 'new Shapes.Polygons.Square()'
/**
 * 函数
 **/
function add(x, y) {
    return x + y;
}
// or
//var myAdd = function (x:number, y:number):number {
//    return x + y;
//};
var myAdd = function (x, y) {
    return x + y;
};
//增强可读性
var myAdd = function (x, y) {
    return x + y;
};
//可选参数
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName("Bob");
//默认参数
function buildNameDefaultValue(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
var result1 = buildNameDefaultValue("Bob");
//可变参数
function buildNameRest(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildNameRest("Joseph", "Samuel", "Lucas", "MacKinzie");
//Lambads 和this关键字
var people = {
    name: ["张三", "李四", "王五", "赵六"],
    getName: function () {
        var _this = this;
        return function () {
            var i = Math.floor(Math.random() * 4);
            return {
                n: _this.name[i]
            };
        };
    }
};
var pname = people.getName();
alert("名字：" + pname().n);
function student(numberorage) {
    if (numberorage && typeof (numberorage) == "string")
        alert("姓名");
    else
        alert("年龄");
}
student("Tom"); //alert("姓名")
student(15); //alert("年龄")
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
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
//loggingIdentity(3);//error
loggingIdentity({ length: 10, value: 3 }); //只要类型包含length属性即可
//泛型类约束
var Findable = (function () {
    function Findable() {
    }
    return Findable;
}());
function find(n, s) {
    // ...
}
var box = { height: 5, width: 6, scale: 10 };
//合并模块和类
var Album = (function () {
    function Album() {
    }
    return Album;
}());
(function (Album) {
    var AlbumLabel = (function () {
        function AlbumLabel() {
        }
        return AlbumLabel;
    }());
    Album.AlbumLabel = AlbumLabel;
})(Album || (Album = {}));
var test = new Album.AlbumLabel();
//合并模块和函数
function buildLabel(name) {
    return buildLabel.prefix + name + buildLabel.suffix;
}
(function (buildLabel) {
    buildLabel.suffix = "";
    buildLabel.prefix = "Hello, ";
})(buildLabel || (buildLabel = {}));
alert(buildLabel("Sam Smith"));
//合并模块与枚举
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["blue"] = 4] = "blue";
})(Color || (Color = {}));
(function (Color) {
    function mixColor(colorName) {
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
    Color.mixColor = mixColor;
})(Color || (Color = {}));
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
//# sourceMappingURL=TsDemo.js.map