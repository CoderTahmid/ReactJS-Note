import useInputState from "../../hooks/useInputState";

const HookForm = () => {

    const emailState = useInputState("Rojoni@shjoni.go");
    /*
    ekhane emailState ta kintu 2 ta jinish return kortase right?
    useInputState hook e gele dekhte pabo amra sheta
    one is value and another one is onChange() function 
    */
    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" />
                <br />
                <input type="email" name="email" id="" {...emailState} />
                    {/*
                    {...emailState}
                    ekhane er dara just shotcut kora hoise
                    ekhane just value boshano hoise
                    amra usually jei value boshai arki
                    ar onChange funcion ta boshano hoise
                    basically dekhano hocche how we use a custom hook
                    */}
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;