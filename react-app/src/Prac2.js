const Prac2 = () => {
    const fruits = [
        {name: "apple", amount: 2, price: 1000},
        {name: "banana", amount: 3, price: 2500},
        {name: "orange", amount: 5, price: 5000},
    ]

    let answer;

    const find = (name) => {
        for(let fruit of fruits){
            if(fruit.name === name) return fruit;
        }
    }


    return(
        <div>
            <div>이름 : {find('banana').name}</div>
            <div>수량 : {find('banana').amount}</div>
            <div>가격 : {find('banana').price}</div>
        </div>
    )

}
export default Prac2;