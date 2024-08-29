const Prac4 = () => {
    const numbers = [5, 19, 42, 36, 70];
    const newNumbers = numbers.map((number) => 
        (number%3 === 0) ? number*4 : number*2);

    return(
        <div>
            결과 : {newNumbers.join(', ')}
        </div>
    )
}

export default Prac4;