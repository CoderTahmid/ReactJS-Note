import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {

    const post = useLoaderData();
    const {id, title, body} = post;
    const navigate = useNavigate();
    const params = useParams(); // we are using useParams hook

    console.log(params); 
        /*
        output : {postId: '2'}
        mane muloto ei hook use kore amra oi id ta ke get korte parbo arki
        */

    const handleGoBack = () => {
        navigate(-1);
    };


    return (
        <div>
            <h3>Post details about id {id}</h3>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;