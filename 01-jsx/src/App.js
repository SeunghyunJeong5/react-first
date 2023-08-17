import {useState} from 'react';
import Header from './component/Header';
import Footer from './component/Footer';


function App() {

  //전역변수 선언 (return 에서 {}로 호출함) 
  //let name = "world";     문자열
  //let name = true;        boolean 타입
  //let name = 1;           number타입(정수)
  //let name = 10.11;       number타입(실수)
  //let name = {age:10, addr:'서울'}
  let name = ['서울', 10, true, 10.10 ];

  let onClickEvent = function () {
    console.log ( "버튼이 클릭되었습니다." );
  }
  return (
    //JSX의 문법규칙
      // 리턴문 내의 하나의 html(div)로 리턴되어야 한다.
      // 리턴에서 감싸는 태그를 출력하지 않을 경우 : <> </> 로 감싸도 된다.
      // html은 소문자 적용, 반드시 닫는 태그가 존재해야한다. <input>,<img>
      // html에서는 class 속성으로 클래스이름을 지정
      // jsx 에서는 class 이름이 예약어로 지정되어있음. className으로 해야함.
      // html 블락내에서 JavaScript 변수의 값을 불러올때 { }를 사용함.
      // 변수의 값을 출력시, boolean, number, string, null, undefine 은 직접 변수명으로 출력하면 됨.
      // 객체나 배열인 경우는 객체나 배열의 속성값을 출력해야한다.
      // HTML에서는 onclick, JSX에서는 onClick으로 처리, C가 대문자임.

    //<div className="App">

    <> 
      <Header/>

      <input />
      <img />
      
      {/* <h1> Hello, {name.addr} </h1> */}
      <h1> Hello, {name[1]} </h1>

      <p> this is a paragraph. </p>
      <button onClick={onClickEvent}> click me </button>
    

      <Footer/>
    </>


    //</div>
  );
}

export default App;
