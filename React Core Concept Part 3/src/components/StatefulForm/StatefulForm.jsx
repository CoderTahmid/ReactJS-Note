import { useState } from "react";

const StatefulForm = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setName] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email, password, name); // output : oi submit field e jei email dewa hbe shetai
    };

    const handleEmailChange = e => {
        // console.log(e.target); // output : ekhane input full field ta ke output hishabe pawa jabe arki
        // console.log(e.target.value); // output : ekhane oi input field e every click e ja likha hocche ta pawa jabeh
        setEmail(e.target.value);
    };

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    };

    const handleNameChange = e => {
        setName(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" onChange={handleNameChange}/>
                <br />
                <input type="email" name="email" id="" onChange={handleEmailChange} />
                    {/*
                    onChange ja kore ta holo, oi input field e kisu ekta type korle oita trigger hbe,
                    and oitar moddhe dewa function ta run hbe
                    joto bar type kora hbeh toto bar oi function ta trigger hbe
                    */}
                <br />
                <input type="password" name="password" id="" onChange={handlePasswordChange}/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default StatefulForm;