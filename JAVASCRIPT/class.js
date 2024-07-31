// function Point(x, y){
//     this.x = x;
//     this.y = y;
// }

// Point.prototype = {
//     toString: function(){
//         return `(${this.x}, ${this.y})`;
//     }
// }

// let pt1 = new Point(10, 20);
// let pt2 = new Point(100, 200);
// console.log(pt1.toString());
// console.log(pt2.toString());
// consolg.log(pt1 instanceof Point); //pt1은 Point의 인스턴스가 맞는지 확인

// function Circle(radius){
//     this.radius = radius;
    
// }

// Circle.prototype.getArea = function(){
//     return Math.PI * this.radius **2;
// }

// const circle1 = new Circle(1);
// const circle2 = new Circle(2);
// console.log(circle1.getArea === circle2.getArea);

// class Person{
//     constructor(name){
//         this.name = name;
//     }

//     sayHi(){
//         console.log(`Hi ${this.name}`);
//     }

//     //정적메소드는 호출할 때 클래스 이름을 적어줘야한다.
//     static sayHello(){
//         console.log('Hello');
//     }
// }

// const me = new Person('Lee');
// me.sayHi();
// Person.sayHello();

// const Person = (function(){
//     function Person(name){
//         this.name = name;
//     }

//     Person.prototype.sayHi = function(){
//         console.log('Hi' + this.name);
//     }

//     Person.sayHello = function(){
//         console.log('Hello!');
//     }
//     return Person;
// }());

// class Square {
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }
//     area(){
//         return this.width * this.height;
//     }
//     static areas(width, height){
//         return width * height;
//     }
// }

// const square = new Square(10, 10);
// console.log(square.area());
// console.log(Square.areas(20, 10));

// const Person = {
//     firstName: 'Minji',
//     lastName: 'Choi',

//     get FullNmae(){
//         return `${this.firstName} ${this.lastName}`;
//     },

//     set fullName(name){
//         [this.firstName, this.lastName] = name.split('');
//     }
// }

// console.log(Person.FullNmae);

// class Person{
//     #name = '';
//     constructor(name){
//         this.#name = name;
//     }

//     get name(){
//         return this.#name.trim();
//     }
// }
// const me = new Person('Lee');
// // console.log(me.#name); //옳지 않은 접근
// console.log(me.name); //클래스 외부에서는 접근자 프로퍼티를 이용해서 참조해야한다.
// console.log(Person.name);

// class Vehicle{
//     constructor(name, wheel){
//         this.name = name;
//         this.wheel = wheel;
//     }
// }

// const myVehicle = new Vehicle('자전거', 2);
// console.log(myVehicle);

// class Bicycle extends Vehicle{
//     constructor(name, wheel){
//         super(name, wheel);
//     }
// }

// const myBicycle = new Bicycle('따릉이', 2);
// console.log(myBicycle);

// class Car extends Vehicle{
//     constructor(name, wheel, license){
//         super(name, wheel)
//         this.license = license;
//     }
// }

// const myCar = new Car('벤츠', 4, true);
// console.log(myCar);

// class Base{
//     constructor(name){
//         this.name = name;
//     }
//     sayHi(){ //프로토타입메소드
//         return `Hi ${this.name}. 잘 지냈니?`;
//     }
// }

// class Derived extends Base{
//     sayHi(){
//         return`${super.sayHi()}`
//     }
// }

// const derived = new Derived('Lee');
// console.log(derived.sayHi());

//예제1
// class Book{
//     constructor(title, author, price){
//         this.title = title;
//         this.author = author;
//         this.price = price;
//     }
// }

// Book.prototype.date = new Date("2024-07-31");
// Book.prototype.pages = 472;

// const myBook = new Book('BookA', 'PersonA', 23000);
// console.log(myBook);

// function Book(title, author, price){
//     this.title = title;
//     this.author = author;
//     this.price = price;
// }
// Book.prototype.date = new Date("2024-07-31");
// Book.prototype.pages = 472;

// const myBook = new Book('BookA', 'PersonA', 23000);
// console.log(myBook);