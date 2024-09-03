import {useMemo, useState} from 'react';

const UseMemoPrac = () => {
    const [hardNumber, setHardNumber] = useState(1);

    // const result = useMemo(() => {
    //     compute(a,b)
    // }, [a, b]);
    const hardSum = useMemo(() => {
        hardCalculator(a);
    }, [a]);

    function hardCalculator(a){
        //어렵고 복잡하고 시간이 오래걸리는 작업
        for(let i=0; i<1000; i++){
            console.log(i)
        }
        return a+10000;
    }
    return(
        <>
            <h3>어려운 계산기</h3>
            <input type='number' value={hardNumber} onChange={(e) => setHardNumber(parseInt(e.target.value))}/>
            <span> + 10000 = {hardSum}</span>
        </>
    )
    
}

export default UseMemoPrac;