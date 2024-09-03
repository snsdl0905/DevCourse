import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
// import Counter from './Counter';
// import AddName from './AddName';
// import AddFood from './AddFood';
// import UseStateExample from './AddFood';
// import AddFood from './AddFood';
import Prac1 from './Prac1';
import UseRefComponent from './UseRefComponent';
import Prac3 from './Prac3';

function App() {

  return (
    <>
      {/* <Counter /> */}
      {/* <AddName /> */}
      {/* <AddFood /> */}
      {/* <Prac1 /> */}
      {/* <UseRefComponent /> */}
      {/* <Prac3 /> */}
      <div>
        <h1>input 태그 value 값 지정</h1>
        이름: <input type='text' value="" />
        나이: <input type='number' value="" />
      </div>
    </>
  );
}

export default App;
