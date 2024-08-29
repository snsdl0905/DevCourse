const UserPW = (props) => {
    return(
        <div>
            <label>PW: </label>
            <input type="passworrd" onChange={(e) => props.setPW(e.target.value)}/>
        </div>
    )

}
export default UserPW;