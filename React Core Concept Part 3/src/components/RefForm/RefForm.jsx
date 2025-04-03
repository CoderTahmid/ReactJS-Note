import { useEffect, useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef (null);
    const passwordRef = useRef(null);

    useEffect( () => {
        nameRef.current.focus();
            /*
            page reload dile ba first time dhukle cursor ta oi field e thakbe arki default bhabe
            */
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef); // output : {current: input}
        console.log(nameRef.current); // output : ebar total ei input field ta kei pawa jacche
        console.log(nameRef.current.value); // output : ebar ager motoi oi input field e thaka value ta pawa jabeh
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" ref={nameRef}/>
                <br />
                <input type="email" name="email" id="" ref={emailRef}/>
                <br />
                <input type="password" name="password" id="" ref={passwordRef}/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default RefForm;