import React, {useState} from 'react'

const FontColor = () => {
    const changeColor = (clickedColor) => {
        document.querySelector('.coloredP').style.color = clickedColor;
    }
   
    return(
        <div>
            <p className='coloredP'>글자색 바꾸기</p>
            <button onClick={() => changeColor('red')}>빨간색</button>
            <button onClick={() => changeColor('green')}>초록색</button>
            <button onClick={() => changeColor('blue')}>파란색</button>
        </div>
    )
}

export default FontColor;