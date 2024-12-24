import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*
eije ekhane jei koyta HTML likha hocche
egula kintu ashole HTML na
egula hocche JSX
but dekhte HTML'r moto 
and ebhabei thake egula muloto
jate amder coding korte subidha hoy
*/

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      {/*
      ekhane <Person></Person> ta hocche amar 
      nijer create kora component
      */}
    </>
  )
};

function Person() {
  const age = 25;
  return <h3>Im a person with age : {age} </h3>
  {/* 
  ekhane age variable ta ke dynamically use kora hoise, 
  dekhte kichu ta Template literal er moto mone hoileo ektu differetn eta
  */}
};

export default App
