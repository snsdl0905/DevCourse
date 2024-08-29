import './App.css';
import MovieComponent from './MovieComponent';
import TodoTask from './TodoTask';
import MenuComopnent from './MenuComponent';
import NameComponent from './NameComponent';
import SayHi from './SayHi';
import React, {useState} from 'react';
import CountNumber from './CountNumber';
import LoginComponent from './LoginComponent';
import ObjectState from './ObjectState';
import Spread from './Spread';
import Array from './Array';
import UserID from './UserID';
import UserPW from './UserPW';
import CheckLogin from './CheckLogin';
import Prac1 from './Prac1';
import Prac2 from './Prac2';
import Prac3 from './Prac3';
import Prac4 from './Prac4';

function App() {
  const [인사, 인사변경] = useState(['안녕하세요', '재미있는', '리액트']);
  const [font, setFont] = useState("50px");
  const todoList = [
    {taskName: '빨래하기', finished: false},
    {taskName: '공부하기', finished: false},
  ]


  // const prices = ['1000', '2000', '3000', '4000'];

  // const names = ['HTML', 'CSS', 'Javascript', 'React'];

  const fontStyle = {
    fontSize: font,
  }

  const [ID, setID] = useState('');
  const [PW, setPW] = useState('');

  const realId = 'user';
  const realPw = '1234';

  const check = () => {
    console.log(ID);
      if(ID === realId && PW === realPw){
          alert("로그인 성공");
      } else {
          alert("로그인 실패");
      }
  }

  const array = ["javascript", 'css', 'react', 'html'];
  const answer = [];

  const find = () => {
    for(let word of array){
        if(word.length >= 5) 
            answer.push({name: word, len: word.length});
    }
    return answer;
  }

  find();

  return (
    <>
   {/* <div> */}
   {/* <h1>가격 목록</h1>
    {
      // todoList.map(todo => <TodoTask taskName={todo.taskName} />)
      prices.map(price => <MenuComopnent price={price} />)
    } */}
    {/* <div>
      <ul>
        {
          names.map((name) => <NameComponent name={name} />)
        }
      </ul>
    </div> */}
      {/* <div style={fontStyle}>{인사[0]}</div>
      <div style={fontStyle}>{인사[1]}</div>
      <div style={fontStyle}>{인사[2]}</div>
      <div style={fontStyle}>{인사[3]}</div> */}
      {/* <SayHi /> */}
      {/* <CountNumber /> */}
      {/* <LoginComponent /> */}
      {/* <ObjectState /> */}
      {/* <Spread /> */}
      {/* <Array /> */}
      {/* <UserID setID={setID}/>
      <UserPW setPW={setPW}/>
      <button onClick={check}>Login</button> */}
      <Prac1 />
      <Prac2 />
      {
        answer.map((item) => <Prac3 item={item} />)
      }
      <Prac4 />
    </>
  );
}

export default App;
