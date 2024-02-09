export default function SinglePost({ post }) {

    return (
        <p>
            <b>{post.user.username}</b> <br />
            {post.title}<br/>
            <br/>
            {post.plot}<br/>
            <br/>
            {post.genre}<br/>
            <br/>
            {post.rating}
        </p>
    )
}