/*UseEffect hook in react*/

/*
At first understand the necessity of useEffect() function
react e kono dhoroner side effect chalaite muloto ei useEffect() use kora hoy

let's understand effect before understanding side effect
react e effect bolte ja bujhay ta holo je 
react e rendering code name e ekta effect hoye thake
rendering code bolte bujhay je
like amra kono ekta state change korbo ba something
mane ja code'r bhitorei ghotbe
baire theke kono rokom touch ashbe na
emon type'r effect gula kei muloto effect bola hoy arki

ar side effect bolte ja bujhay ta holo
fetching API or dhora jak kono ekta notun user add korlam ami
tokhon amar oi data ta ke server e add korte hoite pareh
egula ke arki muloto
so bola jay sometimes my code will need to connect with outer world
like API fetch, server e changes ana tokhon egula ke side effect bola hbeh

ar ei side effect e handle korte muloto useEffect() use kora hoy
let's drive more
dhorlam ami kono ekta API ke call korsi, but for some reason oi API ta pacche na
kintu amar code e everything is ok
shob logics thik moto likha aseh
ekhn ei situation ke handle kortei muloto useEffect() use kora hoyh
not just in the case of API na pawa, but also API pawa khetreo used hbe ei useEffect hook
and one thing is side effects are unpredictable
*/

import { useEffect, useState } from 'react';
import './App.css'

function App() {
  return (
    <>
      <Friends></Friends>
    </>
  );
};

function Friends() {

  const [friends, setFriends] = useState([]);

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriends(data));
  }, []);
    /*
    useEffect() function tar 2 ta parameter thake
    1st ta hocche ekta function, sekhane define kora thakbe je ami kon side effect ta perform korte chai
    and 2nd ta hocche ekta dependency

    dependency te amra apadoto ekta ekta epmty array dicchi karon
    An empty array tells React that the effect doesn't depend on any state or 
    prop values that might change over time. Therefore, React will run the effect once right after the 
    component is mounted (first rendered) and not on future updates

    Always je dependency hishabe ekta empty array e hobe emon na
    amra jei data gulo ekhane load korar try kortasi sheta basically ekta array format e ase
    er jonnei empty array dewa hoise
    jodi object akare ashto tahole empty object dewa hoito
    string akare ashle empty string
    number akare ashle 0
    */

  return (
    <div>
      <h3>Friends : {friends.length} </h3>
      {
        friends.map(friend => <Friend friend={friend}></Friend>)
      }
    </div>
  );
};

function Friend({friend}) {
  const {name, email} = friend;
  return (
    <div>
      <h4>Name : {name} </h4>
      <p>Email : {email} </p>
    </div>
  );
};

export default App
