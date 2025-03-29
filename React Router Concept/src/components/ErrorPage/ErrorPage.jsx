import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error); // eta console korbe je ki error ashche arki

    return (
        <div>
            <h2>Opps!! Error occured</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 &&
                <div>
                    <h3>Page not found, please</h3>
                    <p>Go back where you from</p>
                    <Link to="/"><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;