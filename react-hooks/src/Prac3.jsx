import React, { useState, useRef, useEffect } from "react";

const Prac3 = () => {
  const [count, setCount] = useState(0);
  const [renderCount, setRenderCount] = useState(-1);

  useEffect(() => {
    setRenderCount(renderCount + 1);
    console.log("랜더링 완료");
  }, [count]) ;
  return (
    <div>
      <h1>Count : {count}</h1>
      <h1>렌더링 횟수: {renderCount}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>클뤽</button>
    </div>
  );
};

export default Prac3;