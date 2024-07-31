// //callback, promise, async, awiat => 비동기식 zhem
// // 다른 함수의 인자로 넘겨지고, 해당 함수가 처리된 후 호출되는

// function callback(){
//     console.log("콜백함수가 호출됨");
// }

// setTimeout(callback, 1000);
// console.log("작업을 수행함");

// function getUsers(){
//     let users = [];
//     setTimeout(() => {
//         users = [
//             {name: "Kim", email: "kim@gmail.com"},
//             {name: "Lee", email: "lee@gmail.com"},
//             {name: "Park", email: "park@gmail.com"},
//         ];
//     })
//     return users;
// }

// function findUser(name){
//     const users = getUsers();
//     //find는 가장 처음으로 조건에 맞는 것을 반환한다.
//     const user = users.find(user => user.name === name);
//     return user;
// }

// let user = findUser("Kim");
// console.log(user);

// function getUsers(callback){
//     setTimeout(() => {
//         callback ([
//             {name: "Kim", email: "kim@gmail.com"},
//             {name: "Lee", email: "lee@gmail.com"},
//             {name: "Park", email: "park@gmail.com"},
//         ]);
//     }, 1000)
// }

// function findUser(name, callback){
//     getUsers(users => {
//         const user = users.find(user => user.name === name);
//         callback(user);
//     });
// }

// let user = findUser("Kim", user => {
//     console.log(user);
// });

// let greeting = document.querySelector('#greeting');
// greeting.addEventListener('click', sayHello);
// function sayHello(){
//     alert("안녕하세요");
// }

// //==========================================================

// // promise : 비동기 연산의 결과를 표현하는 객체
// //=> 콜백 지옥 문제를 해결하고, 비동기 작업을 원하는 시점에 제어할 수 있다.
// // pending(작업중): 비동기 연산이 진행중
// // fullfiled(완료됨): 비동시 연산의 결과에 따라 나다나는 상태
// // rejected(거부됨): 비동시 연산의 결과에 따라 나다나는 상태

// // resolve : 정상적인 결과 값을 반환
// // reject: 정상적이지 않았던 값을 반환
// // then() => propmise 객체가 반환하는 값을 구하기 위해서 사용, 두개의 콜백함수를 인수로 받으며 두번째는 생략 가능한다.
// // catch() 메소드를 사용하여 거부됨 상태만 처리할 수 있다.

// let success
//  = true;
// function getUser() {
//   return new Promise((resolve, reject) => {
//     if(success){
//         setTimeout(() => {
//             resolve(
//                 [
//                     { name: "Kim", email: "kim@gmail.com" },
//                     { name: "Lee", email: "lee@gmail.com" },
//                     { name: "Park", email: "park@gmail.com" },
//                 ]
//             );    
//         }, 1000);
//     }else{
//         reject("실패");
//     }
//   })
// }

// let promise = getUser();
// // promise.then(users => console.log(users), error => console.log(error));

// promise
//     .then(users => users.find(user => user.name==="Kim"))
//     .then(user => console.log(user.email))
//     .catch(error => console.log(error))
//     .finally(() => console.log("작업완료"));

// const p1 = new Promise((resolve, reject) => setTimeout(() => resolve(10), 2000));
// const p2 = new Promise((resolve, reject) => setTimeout(() => resolve(20), 1000));
// const p3 = new Promise((resolve, reject) => setTimeout(() => reject("실패함"), 3000));
// let promises = [p1, p2, p3];

// Promise.all(promises) //결과를 하나로 모으는 작업. 하나가 실패하면 결과를 반환하지 않는다.
//     .then(results => {
//         const total = results.reduce((s, r) => s + r);
//         console.log(`결과 : ${results}`);
//         console.log( `합계: ${total}`);
//     })


// Promise.allSettled(promises) //일부가 실패하더라도 성공된 것을 반환한다.
// .then(results => {
//     const fullfiledResults = results.filter(result => result.status === "fulfilled")
//     .map(result => result.value);
//     //success인 값만 더한다.
//     const total = fullfiledResults.reduce((sum, value) => sum + value);
//     console.log(`결과 : ${fullfiledResults}`);
//     console.log( `합계: ${total}`);
//     })

// function getUser(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(
//                 [
//                     { name: "Kim", email: "kim@gmail.com" },
//                     { name: "Lee", email: "lee@gmail.com" },
//                     { name: "Park", email: "park@gmail.com" },
//                 ]
//             );    
//         }, 2000);
//     });
// }

// function findUser(users){
//     return new Promise((resolve, reject) => {
//         console.log(users);
//         setTimeout(()=>{
//             resolve(users.find(user => user.name === "Kim"))
//         }, 1000);
//     })
// }

// function getEmail(user){
//     return new Promise((resolve, reject) => {
//         console.log(user)
//         setTimeout(()=>{
//             resolve(user.email)
//         }, 3000)
//     })
// }

// getUser()
//     .then(findUser)
//     .then(getEmail)
//     .then(console.log())

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => { 
//         resolve("A")
//     }, 2000);
// })
// const p2 = new Promise((resolve, reject) => setTimeout(() => resolve("B"), 1000));
// let promises = [p1, p2];
// Promise.all(promises)
//     .then( result =>
//         console.log("완료!", result)
//     )

// let success = false;
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => { 
//         if(success){
//             resolve(5);
//         }
//         else{
//             reject("실패!");
//         }
//     }, 1000);
// })

// p1.then(
//     result => {
//         return new Promise((resolve, rejesct) => {
//             setTimeout(() => {
//                 resolve(result*10);
//             }, 1500);
//         })
//     })
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => console.log("에러!")
// )

// // ============================================================
// // async와 await: 비동기식 코드를 마치 동기식 코드인 것 처럼 읽기 쉽게 작성
// // async : 비동기 연산을 처리하는 함수를 정의하는데 사용

// async function sayHello(){
//     return "안녕"
// }
// sayHello()
//     .then(console.log);

// let sayHello = async function(){
//     return "안녕"
// }
// sayHello()
//     .then(console.log);

// let sayHello = async () =>  "안녕";
// sayHello()
//     .then(console.log);

// class Greeter{
//     async sayHello(){
//         return '안녕'
//     }
// }
// const greeter = new Greeter();
// greeter.sayHello()
// .then(console.log);

// async function sayHello() {
//     return Promise.resolve("안녕")
// }
// sayHello()
//     .then(console.log);


// async function sayHello(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>resolve("안녕"))
//     })
// }
// sayHello()
//     .then(console.log);

// // =======================================================
// // await: promise 객체가 완료된 상태가 되거나 거부된 상태가 될 때까지 기다릴 수 있다.
// //  항상 async 예약거가 지정된 함수 안에서만 사용해야 한다.

// async function sayHello(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve("성공"), 3000);
//         // setTimeout(() => reject("거부"), 3000);
//     })
// }

// async function display(){
//     try{
//         let result = await sayHello();
//         console.log(result);
//     }catch(e){
//         console.log(e);
//     }
// }

// display();

// function getUser(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(
//                 [
//                     { name: "Kim", email: "kim@gmail.com" },
//                     { name: "Lee", email: "lee@gmail.com" },
//                     { name: "Park", email: "park@gmail.com" },
//                 ]
//             );    
//         }, 2000);
//     });
// }

// function findUser(users, name){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve(users.find(user => user.name === name ))
//         }, 1000)
//     })
// }

// function getEmail(user){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve(user.email);
//         }, 3000)
//     })
// }

// async function getUserEmail(name){
//     let users = await getUser();
//     let user = await findUser(users, name);
//     let email = await getEmail(user);

//     return email;
// }

// async function displayUserEmail(){
//     let email = await getUserEmail("Kim");
//     console.log(email);
// }

// displayUserEmail();

// // 제너레이터와 프로미스를 함꼐 사용하면 동기 코드처럼 느껴지게 비동기 코드를 작성할 수 있다.
// const myPromise = () => new Promise((resolve) => {
//     resolve("value is");
// })

// function* gen(){
//     let result = "";
//     yield myPromise().then(data => {result = data});
//     yield result + '1';
// }

// const asyncFunc = gen();
// const val1 = asyncFunc.next();
// console.log(val1);

// val1.value.then(() => {
//     console.log(asyncFunc.next());
// })

// async function* asyncSequence(from = 0, to = Infinity, interval = 1, timeout=1000){
//     let next = from;
//     while(next <= to){
//         yield new Promise((resolve, reject) => {
//             setTimeout(()=>resolve(next), timeout);
//             next += interval;
//         })
//     }
// }

// //즉시 실행 함수
// (async() => {
//     let seq = asyncSequence(2, 10, 2);
//     for await (let value of seq)
//     console.log(value);
// })();

// //예제4
// function* taskGenerator(){
//     yield new Promise((resolve) => setTimeout(() => resolve("1완료"), 2000));    
//     yield new Promise((resolve) => setTimeout(() => resolve("2완료"), 2000));    
//     yield new Promise((resolve) => setTimeout(() => resolve("3완료"), 2000));    
// }

// const tasksDisplay = async () => {
//     const tasks = taskGenerator();
//     for(let task of tasks){
//         const result = await task;
//         console.log(result);
//     }
// }

// tasksDisplay();

// //예제1
// function findUser(userId){
//     return new Promise((resolve, reject) => {
//        setTimeout(()=>{
//         const users = {
//             1: {name: 'Kim', age: 25},
//             2: {name: 'Lee', age: 30},
//             3: {name: 'Jung', age: 35},
//         }
//         const user = users[userId];
//         if(user){
//             resolve(user);
//         }else{
//             reject("사용자를 찾을 수 없습니다.")
//         }
//        })
//     });
// }

// async function showUser(userId){
//     try{
//         const users = await findUser(userId)
//         console.log(`${users.name}.${users.age}`);
//     }catch(e){
//         console.error(error);
//     }
// }

// showUser(1);
