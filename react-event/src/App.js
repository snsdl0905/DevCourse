import React, {useState} from 'react';
import FontColor from './FontColor';
import PrintChanges from './PrintChanges';
import ChangeColor from './ChangeColor';
import ShoppingList from './ShoppingList';

// import SubmitEvent from './SubmitEvent';
import ImageComponent from './ImageComponent';
import BoxComponent from './BoxComponent';

function App() {
  // let[size, setSize] = useState(20);
  // const changeSize = () => {
  //   document.querySelector(".hi").style.fontSize = size+"px";
  //   setSize(size+10);
  // }

  const cart = [{item: "모자", price: '1'},
                {item: "신발", price: '3'},
                {item: "가방", price: '8'}];

    const list = [
      {region: '서울', eng: 'Seoul'},
      {region: '부산', eng: 'Busan'},
      {region: '제주', eng: 'Jeju'},
    ]

    const[value1, setValue1] = useState(0);
    const[value2, setValue2] = useState(0);

   
  return (
    // <div>
    //   <div className="hi">안녕하세요</div>
    //   <button onClick={changeSize}>글자크기변경</button>
    // </div>
    // <FontColor />
    // <PrintChanges />
    // <ChangeColor />
    <div style={{padding: '30px', textAlign: 'center'}}>
      {/* <ShoppingList cart={cart} /> */}
      {/* <SubmitEvent list={list} /> */}
      <ImageComponent />
      {/* <h1>Total Count: {value1 + value2}</h1>
      <div style={{display: 'flex', padding: '10px'}}> 
        <BoxComponent value={value1} setValue={setValue1} />
        <BoxComponent value={value2} setValue={setValue2} />
      </div> */}

    </div>
    // <ShoppingList cart={cart} />



  );
}

export default App;
