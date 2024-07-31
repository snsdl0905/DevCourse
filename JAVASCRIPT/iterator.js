// //iterator는 결과를 반환하는 next()메서드를 갖는 객체이며, 결과는 done과 value 속성을 갖는다.
// let arr = [1, 2, 3, 4, 5];
// let iterator = arr[Symbol.iterator]();

// console.log(iterator);
// let result = iterator.next();
// // console.log(result);
// // result = iterator.next();
// // console.log(result);

// while(!result.done){
//     console.log(result.value);
//     result = iterator.next();
// }

// let copy = [...iterator];
// console.log(copy);

class Sequence{
    constructor(from = 0, to=Infinity, interval = 1){
        this.from = from;
        this.to = to;
        this.interval = interval;
    }

    *[Symbol.iterator](){
        let next = this.from;
        return{
            next: () => {
                if(next <= this.to){
                    let res
                }
            }
        }
    }
}

// class Sequence{
//     constructor(from = 0, to=Infinity, interval = 1){
//         this.from = from;
//         this.to = to;
//         this.interval = interval;
//     }

//     *[Symbol.iterator](){
//         let num = this.from;
//         while (num <= this.to) {
//             yield num;
//             num += this.interval;
//         }
//     }
// }

// let evenNumbers = new Sequence(2, 10, 2); //2부터 10까지 간격2로
// // for(const num of evenNumbers){
// //     console.log(num);
// // }

// function* generateIterables(...iterables){
//     // for(let iterable of iterables){
//     //     for(let item of iterable){
//     //         yield item;
//     //     }
//     // }

//     //위의 이중 for문을 yield* 으로 대체할 수 있다.
//     for(let iterable of iterables){
//         yield* iterable;
//     }
// }

// let generator = generateIterables("abc", [1,2,3], evenNumbers);
// let arr = [...generator];
// console.log(arr);