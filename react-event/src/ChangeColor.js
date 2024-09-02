import React, {useState} from 'react'

const ChangeColor = () => {
    const [message, setmessage] = useState({title: '제목', color: 'black'});
    console.log(document.querySelector(".titleH1"));
    // document.querySelector(".titleH1").style.fontColor = message.color;
    const changeMessage = (e) => {
        const newForm = {...message, [e.target.name]: e.target.value, color: 'red'};
        setmessage(newForm);
        //e.target.name은 [] 안에 넣어줘야 key로 만들어준다.
    }

    return(
        <>
            <h1 className="titleH1">{message.title}</h1>
            <input type="text" name="title" onChange={(e) => changeMessage(e)} placeholder='내용을 입력하세요'></input>
            <button onClick={() => alert(message)}>클릭</button>
        </>
    )

}
export default ChangeColor;