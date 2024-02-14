import Post from "./SinglePost";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import '../styles/posts.css';

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('https://weekend-portal.onrender.com/anime/');
        if (res.ok) {
          const data = await res.json();
          setPosts(data);
        } else {
          console.error('Failed to get posts');
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Container className="posts-container">
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        posts.length > 0 ? posts.map((post) => {
          return <Post key={post.id} post={post} />;
        }) : <p>No Animes to display</p>
      )}
    </Container>
  );
};
