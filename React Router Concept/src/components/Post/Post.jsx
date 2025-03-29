import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {

    const {id, title} = post;

    const navigate = useNavigate();

    const postStyle = {
        border: "2px solid pink",
        padding: "5px",
        borderRadius: "20px"
    }

    const handleShowDetail = () => {
        navigate(`/posts/${id}`);
    }; 

    return (
        <div style={postStyle}>
            <h4>Post of id : {id}</h4>
            <p>{title}</p>
            <Link to={`/posts/${id}`}>Post Detail</Link>
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;