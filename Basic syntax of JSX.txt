/*Basic syntax of JSX*/

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <DynamicallyAdding></DynamicallyAdding>
      <DynamicallyAdding></DynamicallyAdding>
      <UsingObj></UsingObj>
      <Developer></Developer>
      <Developer2></Developer2>
    </>
  )
};

function Person() {
  const age = 25;
  return <h3>Im a person with age : {age} </h3>
  {/* 
  ekhane "age" variable ta ke dynamically use kora hoise, 
  dekhte kichu ta Template literal er moto mone hoileo ektu different eta
  */}
};

/***Dynamically adding inside a component***/
function DynamicallyAdding() {
  const age = 25;
  const money = 20;
  return <h3>Sum of money and age is {age + money} </h3>
  {/*ekhane dynamically jog kora hoise*/ }
};

/***Dynamically using object inside a component***/
function UsingObj() {
  const person = {
    name: 'Tahmid',
    age: 20
  };
  return <h3>My name is {person.name} im currently {person.age} years old </h3>
};

/***Dynamically adding styles inside a component***/
function Developer() {
  const developerStyles = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  };
  return (
    <div style={developerStyles}>
      <h5>Devo Devo</h5>
      <p>Coding : </p>
    </div>
  )
}

function Developer2() {
  return (
    <div style={{
      margin: '20px',
      padding: '20px',
      border: '2px solid purple',
      borderRadius: '20px'
    }}>
      <h5>Another example of adding styles through JSX</h5>
      <h5>Devo devo</h5>
      <p>Coding : </p>
      {/*
      we can also add styles like this 
      if we want to
      */}
    </div>
  )
}
export default App
