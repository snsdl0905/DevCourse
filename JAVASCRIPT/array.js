// let sum  = carSales.reduce((t1, t2) => t1 + t2, 0);
// console.log(sum);
// let average = sum / carSales.length;
// console.log(average)

// let highest = carSales.reduce((t1, t2) => (t1 > t2 ? t1 : t2))

// let flat = [1, [2, 3]].flat();

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
// console.log(array3);

// let original = [1, 2, 3];
// let newArray;
// newArray = original.concat(4,5);
// newArray = original.concat([4,5],[6,7]);
// console.log(newArray);

// let stack = [];
// stack.push(1);
// stack.push(2, 3);
// stack.pop();
// stack.push(4);
// console.log(stack);
// stack.unshift(1);
// stack.unshift(2,3);

// stack.shift();
// console.log(stack);

// let numbers = [20, 37, -21, 32, -2];
// document.write(numbers[1] + "," + numbers[3]);

// let a = [1,2,3,4,5];
// // a.splice(0, 2);
// // a.splice(2);
// // a,splice(0, 2, 10, 20);
// // console.log(a);
// let b = a.slice(0, 2);
// let c = a.slice(1, -1);
// console.log(b);
// console.log(a);
// console.log(c)

// let a = new Array(5);
// a.fill(0);
// a.fill(1,1);
// a.fill(1, 1, -1);
// console.log(a);

// let a = [0, 1, 2, 3, 2, 1, 0, NaN];
// let b = a.indexOf(2);
// let c = a.lastIndexOf(2);
// let d = a.indexOf(5);
// console.log(d);

// let a = [0, true, 2, false, NaN];
// let b = a.includes(NaN);
// console.log(b);

// let a = ["apple", "cherry", "banana"];
// let b = a.sort();
// consolg.log(b);
// let c = [22, 333, 121];
// let d = c.sort();
// console.log(d);
// let e = c.sort((a, b) => a - b);
// console.log(e);

// let a = [1, 2, 3];

// const scores = [67, 82, 92, 100, 92];
// for(let i=0; i<scores.length; i++){
//     console.log(scores[i]);
// }

// for (score of scores){
//     console.log(score);
// }

// const tel = ['010', '1234', '5678'];
// let answer = tel.join("-");
// console.log(answer);

const colors = ['빨강', "노랑", "파랑", "주황"];
let a = colors.slice(1, 4);
let answer = a.join(',');
answer += "/" + colors[0];

console.log(answer);

