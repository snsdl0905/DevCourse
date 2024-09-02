import React, {useState} from 'react';
// import image from './images/logo192.png'

const ImageComponent = () => {
    const selectList = ['apple', 'mango', 'banana', 'strawberry'];
    const [select, setSelect] = useState("");

    function updateValue(e){
        setSelect(e.target.value);
    }

    return( 
        <div>
            <h1>선택한 과일 : {select} </h1>
            <select value={select} onChange={updateValue}>
                {
                    selectList.map((item) => (
                        <option key={item} value={`images/${item}.png`}>{item}</option>
                    ))
                }
            </select>
            <img src={select} width="150px" alt='과일' />
        </div>
    )
}

export default ImageComponent;