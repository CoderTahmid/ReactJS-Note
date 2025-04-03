const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Form submitted");
        console.log(e.target.name.value); // output : field e jei value dewa hbeh
        console.log(e.target.email.value); // outpu : field e jei value dewa hbeh
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="text" name="phone" id="" />
                <br />
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default SimpleForm;