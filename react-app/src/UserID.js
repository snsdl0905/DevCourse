const UserID = (props) => {
    const setID = props.setID;
    return(
        <div>
            <label>ID: </label>
            <input type="text" onChange={(e) => setID(e.target.value)}/>
        </div>
    )

}
export default UserID;