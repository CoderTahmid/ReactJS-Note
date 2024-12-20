/*useState hook in React*/
/*
state change bolte muloto ja bujhay ta holo
just etar Bangla ortho jeta sheta kei bujhay LOL
mane dosha poribonton
like age ekta chilo pore ekta
dhorlam kono ekta post e like chilo 50 ta
1hr por like pailam 70 ta
ekhane state change hoise arki 
*/

import { useState } from "react";
import './App.css'

function App() {

  return (
    <>
      <Counter></Counter>
    </>
  )
};

function Counter() {
  const [count, setCount] = useState(0);
  /*
  useState hocche ekta react'r hook
  ei useState() er moddhe only ekta parameter thakbe
  and ei parameter e initial value ta dite hbe
  ekhane amra initial value hishabe 0 dilam

  const abc = useState(0);
  console.log(abc);
  output : (2) [0, ƒ]
  orthat amra bolte pari je
  ei useState() ta amder ekta normal value(jeta kina initial value ta)
  and ekta function return korbe

  to ei 2nd parameter e newa function ta use kore amra initual
  value ta ke change korbo amader mon moto
  */

  const handleAdd = () => {
      const newCount = count + 1;
      setCount(newCount);
  };

  const handleReduce = () => {
      const newCount = count - 1;
      setCount(newCount);
  };
  return (
      <div>
          <h3>Counter : {count} </h3>
          <button onClick={handleAdd}>Add</button>
              {/*
              ei button e click kora hoile
              handleClick function ta run hobeh
              and jeta kina initial value ta ke 1 kore barabe
              */}
          <button onClick={handleReduce}>Reduce</button>
      </div>
  );
};

export default App
