export default function Card({post, smallScreen}) {
    return (
        <div className={`card ${smallScreen && 'small-screen'}`}>
            <div className="title">{post.title}</div>
            <p className="content">{post.body}</p>
        </div>
    )
}