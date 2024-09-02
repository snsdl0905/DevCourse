import React, {useState} from 'react'

const PrintChanges = () => {
    // const [msg, setMsg] = useState('');
    // const [name, setName] = useState('');
    // const [content, setContent] = useState('');
    const [form, setForm] = useState({username: '', message: ''});
    const onChangeHandler = (e) => {
        const newForm = {...form, [e.target.name]: e.target.value };
        setForm(newForm);
        //e.target.name은 [] 안에 넣어줘야 key로 만들어준다.

    }


    return(
        <>
            <h1 className="window">사용자 이름 : {form.username}</h1>
            <h1 className="window">내용 : {form.message}</h1>
            <input type="text" name="username" onChange={onChangeHandler} placeholder='사용자 이름'></input>
            <input type="text" name="message" onChange={onChangeHandler} placeholder='내용을 입력하세요'></input>
        </>
    )

}
export default PrintChanges;