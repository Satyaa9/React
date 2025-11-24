import Profile from "./Profile";
// function Demo(){
//   let data = "shubham";

//   return (
//     <div style={{border : "2px solid red" , padding : "50px"}}>
//       <h1>Demo compo...{data}</h1>
//       <Profile name={data}/>
//     </div>
//   )
// }

// function Demo(){
//   let data = ["sanket" , "shubham" , "ramchandra" , "rajat"];

//   return(
//     <div style={{border:"2px solid black"}}>
//       {
//         data.map((val) =>(
//           <h1>{val}</h1>
//         )
//       )
//       }
      
//     </div>
//   )
// }

// import User from "./User";

function Demo(){
  // let data = [
  //   {"name" : "satish" , "Company" : "capg"},
  //   {"name" : "shubham" , "Company" : "codex"},
  //   {"name" : "sanket" , "Company" : "tata"},

  // ];

  // return (
  //   <div>
  //   {
  //     data.map((val) =>
  //       <User User = {val}/>
  //   )
  //   }
  //   </div>
  // )

  return (
    <div style={{border:"2px solid blue" , padding:"50px", alignItems:"center" , textAlign:"center"}}>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

const handleClick = () =>{
  console.log("pressed");
}

export default Demo;