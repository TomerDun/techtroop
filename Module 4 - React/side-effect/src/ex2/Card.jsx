export default function Card({post}) {
    return (
        <div className="card">
            <div className="title">{post.title}</div>
            <p className="content">{post.body}</p>
        </div>
    )
}