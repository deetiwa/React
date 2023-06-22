import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

// JSX and Expression

// ReactDOM.render(<h1> Hello World!! </h1>, document.getElementById('root'));

// ReactDOM.render(React.createElement ("h1", null, "Hello User"), document.getElementById('root'));

// ReactDOM.render(
// <div>
// <h2> Hello React</h2>
// <p>Some Changes</p>
// </div>,
//  document.getElementById("root"))


// ReactDOM.render(
//   [
//   <h2> Hello React</h2>,
//   <p>How to use another type</p>],
  
//    document.getElementById("root"))

 const fname = "Deepak";
const lname = "Tiwari";
const curDate = new Date().toLocaleDateString();
const curTime = new Date().toLocaleTimeString();
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const links = "https://www.google.co.in/";

// ReactDOM.render(
//    <>
//    <h5>My Name is {fname + "  " + lname}</h5>
//    <p>The Sum of Number is {6+6}</p>
//    <p>The Rendom Number is {Math.random()}</p>
//    </>,
//    document.getElementById("root")
// );

ReactDOM.render(
     <>
     <h5 className='heading'> My Name is {fname + "  " + lname}</h5>
     <div className='img-div'>
     <img src={img1} alt="rendomImage"/>
     <img src={img2} alt="rendomImage"/>
     <a href={links} target='google'> 
      <img src={img3} alt="rendomImage"/>
     </a>
     </div>
     <p className='date'>Current Date is = {curDate}</p>
     <p className='time'>Current Time is = {curTime}</p>

     </>,
     document.getElementById("root")
  );



