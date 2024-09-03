import React, {useState, useEffect} from 'react'

const Prac1 = () => {
   

  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
  }, [])

  useEffect(() => {
    console.log("count값이 변경되었습니다")
  }, [counter])

  useEffect(() => {
    console.log("text값이 변경되었습니다")
  }, [text])
  
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>+1</button>
      <hr />
      <input onChange={(e) => setText(() => e.target.value)}></input>
      <h2>{text}</h2>
    </>
  );

}

export default Prac1;