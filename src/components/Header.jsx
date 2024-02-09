import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import '../styles/index.css'

export default function Header() {

    const { user } = useContext(UserContext)

    return (
        <Navbar className="bg-body-tertiary mb-3" sticky='top'>
            <Container className='header'>
                <Navbar.Brand as={NavLink} to="/" style={{color: 'black'}}>Anime List!!</Navbar.Brand>
                <Nav.Link as={NavLink} to='/users'>Users</Nav.Link>
                <Nav.Link as={NavLink} to='/posts'>Anime</Nav.Link>
                <Nav.Link as={NavLink} to='/trivia'>Trivia!</Nav.Link>
                {user.username ?
                    <Link to='/logout'>Logout</Link> :
                    <>
                        <Nav.Link href='/register'>Register</Nav.Link>
                        <Link to='/login'>Login</Link>

                    </>
                }
            </Container>


            {/* <Nav.Link href="#link">Link</Nav.Link> */}
        </Navbar>
    )
}
