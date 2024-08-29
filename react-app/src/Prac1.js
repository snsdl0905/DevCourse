const Prac1 = () => {
    const numbers = [5, 10, 15, 20, 25, 30];
    numbers.forEach((number, i) => {
        if(number % 2 === 0) numbers.splice(i, 1);
    })
    return(
        <div>
            배열의 남은 요소 : {numbers.join(', ')}
        </div>
    )
}

export default Prac1;