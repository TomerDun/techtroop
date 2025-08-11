import { useEffect, useState } from "react";
import Card from "./Card";
import './Ex2.css'

export default function Ex2() {
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const data = await (await fetch(url)).json();

        setPosts(data);
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <div className="cards-container">
            {posts.map((post, i) => <Card post={post} key={i}/>)}
        </div>
    )
}