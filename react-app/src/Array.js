import React, {useState} from 'react';

const Array = () => {
    const [arr, setArr] = useState(['안녕', '하이']);

    const changeArr = () => {
        let newArr = [...arr];
        newArr[1] = newArr[1] === "하이" ? "Hello" : "하이";
        setArr(newArr);
    }

    return(
        <div>
            <div>{arr[0]}</div>
            <div>{arr[1]}</div>
            <button onClick={changeArr}>배열 값 변경</button>
        </div>

    )


}

export default Array;