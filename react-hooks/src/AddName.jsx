// import React, {useEffect, useState} from 'react';

// function AddName() {
//     // const [names, setName] = useState(["정수아", "리액트"]);
//     const [names, setName] = useState(() => heavyWork());
//     const [input, setInput] = useState("");

//     function inputChange(e){
//         setInput(e.target.value);
//     }

//     useEffect(() => {
//         console.log("렌더링이 완료되었습니다.");
//         console.lof({names});
//     }, )

//     function uploadInput(){
//         // setName([input]); //배열(괄호)로 만들기
//         setNames((prev) => [input, ...prev]);
//     } 

//     return(
//         <>
//             <input type='text' onChange={inputChange}></input>
//             <button onClick={uploadInput}>추가</button>
//             <div>
//                 {names.map((name, idx) => (<p key={idx}>{name}</p>))}
//             </div>
//         </>
//     )
// }

// export default AddName;