import React, {useState} from 'react';

function AddFood() {
    const [names, setNames] = useState(["초콜렛", "사탕"]);
    const [input, setInput] = useState("")

    function inputChange(e){
        setInput(e.target.value);
    }

    function uploadInput(){
        // setName([input]); //배열(괄호)로 만들기
        setNames((prev) => [input, ...prev]);
    } 

    return(
        <>
            <input type='text' onChange={inputChange}></input>
            <button onClick={uploadInput}>추가</button>
            <ul>
                {names.map((name, idx) => (<li key={idx}>{name}</li>))}
            </ul>
        </>
    )
}

export default AddFood;