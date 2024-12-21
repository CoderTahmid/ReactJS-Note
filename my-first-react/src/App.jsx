import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { use } from 'react';
import Posts from './Posts';

function App() {
  return (
    <>
      <h3>React core concepts recap</h3>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>State</li>
        <li>Load Data</li>
      </ol>
      <hr />
      <Posts></Posts>
    </>
  )
};

export default App

