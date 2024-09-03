import React, {useState, useRef, useEffect} from 'react'

const Prac5 = () => {
    // let greeting = useRef("");
    // let [greet, setGreet] = useState();
    const [name, setName] = useState();
    const [age, setAge] = useState();

    return(
        <>
            <h1>input 태그 value 값 지정</h1>
            이름 : <input type="text" value={name} onChange={(e) => setName(() => e.target.value)} />
            나이 : <input type='number'value={age} onChange={(e) => setAge(() => e.target.value)}/>
        </>
    )

}

export default Prac5;