/*Props in JSX*/

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <Device name="Laptop" price="55"></Device>
      <Device name="Mobile" price="17"></Device>
      <Device name="watch" price="3"></Device>
      {/*
      ekhane ei <Device></Device>
      er moddhe thaka 'name' and 'price' ke property bola hocche 
      and ei property gula 
      Device() function'r parameter e pawa jacche
      er jonnei parameter ta ke console  e log korle
      ei property gula pawa jay
      and jegula sekhane object akare thakeh
      */}

      <Student grade='7' score='99'></Student>
      <Student grade='9' score='78'></Student>
      <Student grade='5' score='55'></Student>
    </>
  )
};

/*Simple way of using props*/
function Device(props) {
  console.log(props);
    /*
    output : 
    {name: 'Laptop', price: '55'}
    {name: 'Laptop', price: '55'}
    {name: 'Mobile'}
    {name: 'Mobile'}

    output e every line double dekhabe
    eta amar chinta korar karon na
    eta ekta special reason e ashtase emon
    ta pore bujha jabe
    */
  console.log(props.name);
    /*
    output : 
    Laptop
    Mobile
    watch
    */
  return <h2>Device name {props.name}, Price : {props.price}K </h2>
}; 

/*Through Object Destructuring*/
// const {grade, score} = {grade: 7, score: 99};
function Student({grade, score}) {
  /*
  so ekhane function'r moddhe ebhabe parameter pass kora niye ektu bujhar bishoy aseh

  ekhane object destructuring kore parameter dewa hoiseh
  App() function e jokhon ei student component ta ke call kora hobeh
  and every time e to eta ke different different grade and score value dewa hoiseh
  so ekhane jemon ta hbe ta holo
  {grade, score} = {grade: 7, score: 99} , first time component ta call korar jonno
  {grade, score} = {grade: 9, score: 78} , second time component ta call korar jonno
  {grade, score} = {grade: 5, score: 55} , third time component ta call korar jonno
  */
  return (
    <div className="student">
      <h3>this is student</h3>
      <p>Class : {grade} </p>
      <p>Score : {score} </p>
    </div>
  )
};
export default App
