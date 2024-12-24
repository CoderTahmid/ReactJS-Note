import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { use } from 'react';
import Posts from './Posts';

function App() {

  const [count, setCount] = useState(0);

  function handleClick() {
    let newCount = count + 1;
    setCount(newCount);
  };

  return (
    <>
      <MyButton count={count} onClick={handleClick}></MyButton>
      <MyButton count={count} onClick={handleClick}></MyButton>
    </>
  )
};

function MyButton({ count, onClick }) {
  return (
    <>
      <button onClick={onClick}>Button clicked {count} </button>
    </>
  );
};

export default App

