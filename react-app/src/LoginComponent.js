import React, {useState} from 'react';


const LoginComponent = () => {
    const [value, setValue] = useState("안녕하세요");

    const setLogin = () => {
        setValue("로그인 되었습니다")
    }

    const setLogout = () => {
        setValue("로그아웃 되었습니다")
    }
    return (
        <>
            <h2>{value}</h2>
            <button onClick={setLogin}>로그인</button>
            <button onClick={setLogout}>로그아웃</button>
        </>
    )
}
export default LoginComponent;