export default function Post({post}) {
    const {title, body, id, userId} = post;
    return (
        <div style={{
            border: "2px solid green",
            margin: "15px",
            padding: "15px",
            borderRadius: "15px"
        }}>
            <h5>Post Title : {title} </h5>
            <p><small>User ID : {userId} </small></p>
            <p><small>Post ID : {id} </small></p>
            <p>{body}</p>
        </div>
    );
};