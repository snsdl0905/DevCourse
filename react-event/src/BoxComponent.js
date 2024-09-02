const BoxComponent = (props) => {
    let {value, setValue} = props;
    return(
        <div style={{backgroundColor: 'skyblue', textAlign: 'center', width: '100%', margin: '20px', padding: '70px'}}>
            <div style={{padding: '10px'}}>{value}</div>
            <button style={{backgroundColor: 'pink', padding: '20px'}}  onClick={() => setValue(prev => prev + 1)}>클릭</button>
        </div>
    )
}

export default BoxComponent;