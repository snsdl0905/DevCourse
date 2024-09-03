import React, {useState} from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>현재 카운터 값은 {counter}입니다.</div>
      <button onClick={() => setCounter((prev) => prev + 1)}>+1</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>-1</button>
    </>
  );

}

export default Counter;