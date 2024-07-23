const readline = require("readline")

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('년도를 숫자만 입력해주세요: ', (answer) => {
    if(checkFullYear(answer)){
        console.log("윤년입니다");
    }
    else{
        console.log("윤년이 아닙니다");
    }
  rl.close();
});

function checkFullYear(year) {
    if(year%4 == 0){
        if(year%400 == 0) return true
        else if(year%100 == 0) return false
        return true
    }
    return false
}