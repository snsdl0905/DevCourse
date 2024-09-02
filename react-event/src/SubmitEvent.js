// import React, {useState} from 'react';

// const SubmitEvent = (props) => {
//     const {region} = props
//     const [name, setName] = useState('');
//     const [select, setSelect] = useState("");
    
//     const submitHandler = (e) => {
//         e.preventDefault();
//         // let inputName = document.querySelector('input').value;
//         // setName(inputName);
//         // let radios = document.querySelectorAll('radio')
//         // document.querySelector('input').value = "";
//         alert(name);
//     }

//     const updateValue = (e) => {
//         e.preventDefault();
//         setName(e.target.value);

//     }
//     return(
//         <div>
//             {/* <form onSubmit={submitHandler}> 
//                 <h1>이름: {name}</h1>
//                 <input type='text'></input>
//                 <input type='submit' value='전송 '/>
//             </form> */}
//             {/* <h1>라디오 버튼의 value를 출력</h1> */}
//             {/* <form onSubmit={submitHandler}> 
//             {
//                 //radio만들 때 같은 name값 똑같이 주기
//                 region.map((item) => {
//                     <label>
//                         <input type='radio' name='radio' value={item.region} onChange={updateValue} />
//                         {item.value}
//                     </label>
//                 })
//             }
//             </form> */}
//             {/* <div>내용: </div>
//             <form onSubmit={submitHandler}> 
//                 <input type='textarea' name='content'/>
//                 <input type='submit' />
//             </form> */}
//             {/* <select> */}
//                 {/* <option value={}
//             </select>


//         </div> }
        
//     )
// }

// export default SubmitEvent;