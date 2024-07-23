let j=9;
for(let i=0; i<5; i++){
    let result="";
    result += " ".repeat(i) + "*".repeat(j) + " ".repeat(i);
    j -= 2;
    console.log(result);
}