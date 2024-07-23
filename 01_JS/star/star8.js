let j=1;
for(let i=4; i>=0; i--){
    let result="";
    result += " ".repeat(i) + "*".repeat(j) + " ".repeat(i);
    j += 2;
    console.log(result);
}