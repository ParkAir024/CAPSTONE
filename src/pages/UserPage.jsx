import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import Body from '../components/Body'

import Spinner from 'react-bootstrap/Spinner'
import { Container } from 'react-bootstrap'
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
            <div className="grid-container">
                <Container className="goku-page-container text">
                    <div className="goku-content">
                        <h1><p class="card-text text-start">Welcome back Goku! </p></h1>
                        <div className="info">
                            <br />
                            <div className="profile-pic" />
                            <br />
                            <div>
                                <p className="card-text text-start">Goku<span className="membership-year">Age:43</span></p>
                            </div>
                            <br />
                            <div>
                                <p className="card-text text-start">Member since: <span className="membership-year">1984</span></p></div>
                            <br />
                            <div>
                                <p className="card-text text-start">Interests:</p>
                                <p className="membership-year">Fighting, Training, Eating</p>
                            </div>
                            <br />

                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />

                        </div>
                    </div>
                </Container>
                <Container className='misc-content text'>
                    <div>
                        <h2><p className="card-text text-center">Recent Activity</p></h2>
                    </div>
                    <div>
                        <div className='new-photo'>
                        <p>Uploaded new photo</p>
                        </div>
                    </div>
                </Container >
            </div>
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
