const readline = require("readline");
const { stdin: input, stdout: output } = require("process");
const rl = readline.createInterface({input, output});
console.log("야구 게임을 시작합니다.");

let strike = 0;
let ball = 0;
let out = 0;
let count = 2;
const answer = createAnswer();

rl.question('0-9까지의 서로 다른 숫자 5개를 공백으로 나누어 입력해주세요: ', (answer) => {
    play(answer);
});


function play(input){
    let numbers = input.split(' ').map(Number);

    checkAnswer(numbers, answer);

    if(strike < 5){

        strike = 0;
        ball = 0;
        out = 0;
        
        rl.question(`${count++} 번째 시도: `, (retry) => {
            play(retry);
        });
    }
    else{
        console.log('정답입니다 !');
        rl.close();
    }
}

function createAnswer(){
    let answer = [];
    for(let i=0; i<5; i++){
        let randomNumber = Math.floor(Math.random() * 9) 
        if (answer.includes(randomNumber)) i--;
        else answer.push(randomNumber); 
    }
    return answer;
}

function checkAnswer(user, answer){
    answer.forEach((num, index) => {

        if(user.includes(num)){
            if (user.indexOf(num) === index){

                strike++;
            }
            else{
                ball++;
            }
        }
        else{
            out++;
        }
    })
    console.log(`strike: ${strike}, ball: ${ball}, out: ${out}`);
}