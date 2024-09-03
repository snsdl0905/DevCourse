import React, {useState, useRef} from 'react'

const UseRefComponent = () => {

    const [state, setState] = useState(0);
    const ref = useRef(0);
    

    return(
        <>
            <span>State값: {state}</span>
            <span>Ref 값: {ref.current}</span>
            <button onClick={() => setState((prev) => prev+1)}>state</button>
            <button onClick={() => ref.current = ref.current + 1}>Ref</button>
        </>
    )

}

export default UseRefComponent;