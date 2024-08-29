const CheckLogin = (props) => {
    const {id, pw} = props;
    const realId = 'user';
    const realPw = '1234';
    const check = () => {
        if(id === realId && pw === realPw){
            alert("로그인 성공");
        } else {
            alert("로그인 실패");
        }
    }
    return(
        <button onclick={check()}>Login</button>
    )

}

export default CheckLogin;