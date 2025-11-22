import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// function App() {
//   return (
//     <Student name="Satish" age={21} stream="CS"/>
//   );
// }

// function Student(props){
//     return (
//       <h1>
//         My name is {props.name} and i am {props.age} year old and am studying in {props.stream} department.
//       </h1>
//     );
// }

// export default App;

// Props using button.

// function Button(props){
//   return <button>{props.label}</button>
// }

// function App(){
//   return(
//     <>
//     <Button label="Login"/>
//     <Button label="Signup"/>
//     </>
//   );
// }

// export default App;

function App(){
  return(
    <UserInfo name="satish" age={22} country="india"/>
  );
}

function UserInfo(props){
  return(
    <p>
      {props.name} is {props.age} years old and lives in the {props.country}. 
    </p>
  );
}

export default App;

