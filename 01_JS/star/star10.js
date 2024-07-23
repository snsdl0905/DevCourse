let j=1;
for(let i=4; i>=0; i--){
    let result="";
    result += " ".repeat(i) + "*".repeat(j) + " ".repeat(i);
    j += 2;
    console.log(result);
}
let k=9;
for(let i=0; i<5; i++){
    let result="";
    result += " ".repeat(i) + "*".repeat(k) + " ".repeat(i);
    k -= 2;
    console.log(result);
}