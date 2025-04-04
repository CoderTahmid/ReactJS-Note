const ReuseableForm = ({ submitBtnText = "Submit", handleSubmit, children }) => {

    /*
    About this children prop
    ei children prop dile shei ei component ta jekhane declare hbeh
    shetar peter moddhe 
    orthat children hishabe ja e dewa hbeh ty e pawa jabe
    */

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        };

        handleSubmit(data);
    };

    return (
        <div>
            {children}
            {/*
            ekhane ja hbe ta holo je
            App.jsx'r moddhe declear kora hoise ei <ReuseableForm /> component
            ekhn etar bhitore mane child hishabe jei code gula dewa hoise shegula ekhane ashbe arki
            etai hocche usage of children prop
            */}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReuseableForm;