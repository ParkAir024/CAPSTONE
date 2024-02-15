import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import Body from '../components/Body'

import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/goku-page.css'
import '../styles/index.css'

export default function UserPage() {

    const [user, setUser] = useState(null)

    const { username } = useParams()
    console.log(username, 'params');

    useEffect(() => {
        (async () => {
            const res = await fetch('https://weekend-portal.onrender.com/user/'.concat(username))
            if (res.ok) {
                const data = await res.json()
                console.log(data);
                const { username, posts } = data
                setUser({ username, posts })
            }
        })()
    }, [])

    if (!user) return <Spinner animation="border" variant="primary" />

    if (username === 'goku') {
        return (
            <>
                <h1 className="card-text text-center text">Welcome back Goku!</h1>
                <Container className='text goku-page-container'>
                    <Row className='info'>
                        <Col className='profile-pic' />
                        <Col>
                            <p className="card-text text-start">Goku<span className="membership-year">Age:43</span></p>
                            <p className="card-text text-start">Member since: <span className="membership-year">1984</span></p>
                            <p className="card-text text-start">Interests:</p>
                            <p className="membership-year">Fighting, Training, Eating</p>
                            <br />
                            <p className="card-text text-start">Rival/Best Buddy:</p>
                            <p className="membership-year">Vegeta</p>

                        </Col>
                    </Row>
                    <h2 className="card-text text-center">Recent Activity</h2>
                    <Row className='misc-content text'>
                        <Col className='new-photo'>
                        </Col>
                        <Col className='friend-pic'></Col>
                        <Col className='friend-pic'></Col>
                    </Row>
                    <Row className='misc-content text'>
                        <Col>Uploaded new photo</Col>
                        <Col>Became friends with AllMightJR</Col>
                        <Col>Became friends with Vegeta</Col>
                    </Row>
                    <Row className='misc-content text'>
                        <Col className='like-pic'></Col>
                        <Col className='new-photo2'>
                        </Col>
                        <Col className='friend-pic'></Col>
                    </Row>
                    <Row className='misc-content text'>
                        <Col>Vegeta Liked your post</Col>
                        <Col>Uploaded new photo</Col>
                        <Col>Became friends with TanjiroK</Col>
                    </Row>
                </Container></>
        );
    }

    return (
        <>
            <h2>{user.username}</h2>
            {user.posts && user.posts.map((post) => {
                return <p key={post.id}>{post.body} <small>{post.timestamp}</small> </p>
            })}
        </>
    )
}
