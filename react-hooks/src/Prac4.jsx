import React, {useState, useRef, useEffect} from 'react'

const Prac4 = () => {
    // let greeting = useRef("");
    let [greet, setGreet] = useState();
    const inputRef = useRef();

    const sendBtn = (e) => {
        setGreet(inputRef.current.value);
    }


    return(
        <>
            <input ref={inputRef} />
            <button onClick={sendBtn}>전송</button>
            <span>전송된 단어 : {greet}</span>
        </>
    )

}

export default Prac4;