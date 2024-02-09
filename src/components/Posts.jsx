import Post from "./SinglePost"
import Container from "react-bootstrap/Container"
import '../styles/posts.css'
import { useState } from "react";
export const Posts = () => {


  const [posts, setPosts] = useState([])

  useState(() => {
    (async () => {
      const res = await fetch('https://weekend-portal.onrender.com/anime/')
      if (res.ok) {
        const data = await res.json()
        setPosts(data);
        console.log(data)
        return
      }
      console.error('failed to get posts')
    })()
  }, [])

  return (

    <Container className="posts-container">
      {posts.length > 0 ? posts.map((post) => {
        return <Post key={post.id} post={post} />;
      }) : <p>No Animes to display</p>}
    </Container>
  
  );
};