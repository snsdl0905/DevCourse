import React, {useState} from 'react';


const SayHi = () => {
    const [value, setValue] = useState('안녕하세요');
    const changeValue = () => {
        setValue((value === "안녕하세요") ? "반가워요" : "안녕하세요");
    }


    return (
        <>
            <h1>{value}</h1>
            <button onClick={changeValue}>클릭</button>
        </>
    )
}
export default SayHi;