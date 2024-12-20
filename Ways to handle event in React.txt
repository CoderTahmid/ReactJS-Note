/*Ways to handle event in React*/

import './App.css'

function App() {

  function handleClick() {
    alert('Button 1 Clicked');
  };

  const handleClick2 = () => {
    alert('Button 2 Clicked');
  };

  /*
  ei event handle korar khetre jhemela hoy jokhon kono function'r parameter dewa hoy
  parameter shoho kono function ke call korar khetre jhamela hoy,
  nihe ekta example dewa hoilo
  */
  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h3>Vite + React</h3>

      <button onClick={handleClick}>Button 1</button>

      <button onClick={handleClick2}>Button 2</button>

      <button onClick={() => {alert('Button 3 Clicked')}}>Button 3</button>

      {/***Way to handle an event that takes a function as an event which fucntion have a parameter***/}
      {/*
      oneke bhabte pare je
      amra jodi ei case e niche dekhano way te event handle kori tahole kaj hbeh
      <button onClick={addToFive(2)}>Button 4</button>
      but ebhabe korle kaj hobe nah

      ekhane jeta hbe 
      code ke jokhon ekdom upre theke read korte korte ashbe
      tokhon ei onClick{} er moddhe Vanilla JS ba raw JS peye jabe
      and sheta run hoye jabe
      and oikhane kintu function ta ke parameter diye call kora hoiseh
      er jonne button e click korar agei sheta run hoye jabe
      */}
      <button onClick={() => addToFive(3)}>Button 4</button>
        {/*
        ebhabe arrow function diye call korte hbeh
        like ekhane bola hocche je 
        ei buttone click kora hoile ei ekta arrow function kaj korbe
        and now oi arrow function'r bhitore arekta function (amader main function jeita)
        sheta pass kore dilam with parameter
        */}
    </>
  )
};

export default App


