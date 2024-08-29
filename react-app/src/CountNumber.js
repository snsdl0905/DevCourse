import React, {useState} from 'react';


const CountNumber = () => {
    const [value, setValue] = useState(0);
    const changeValue = () => {
        setValue(value + 1);
    }

    return (
        <>
            <h2>{value}</h2>
            <button onClick={changeValue} onMouseOut={() => setValue(0)}>클릭</button>
        </>
    )
}
export default CountNumber;