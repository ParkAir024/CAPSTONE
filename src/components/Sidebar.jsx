import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'


export default function Sidebar() {

  const { user } = useContext(UserContext)

  return (
    <Navbar sticky='top' className='flex-column sidebar'style ={{zIndex: 1}} >
      <>
        <Nav.Item>
            <Nav.Link as={ NavLink } to='/'>Home</Nav.Link>
        </Nav.Item>
        <br />
        <Nav.Item>
            <Nav.Link as={ NavLink } to={'/user/'.concat(user.username)}>My Page</Nav.Link>
        </Nav.Item>
        <br />
        <Nav.Item>
            <Nav.Link as={ NavLink } to='/posts'>Feed</Nav.Link>
        </Nav.Item>
        <br />
        <Nav.Item>
            <Nav.Link as={ NavLink } to='/trivia'>Trivia</Nav.Link>
        </Nav.Item>
        <br />
        <Nav.Item>
            <Nav.Link as={ NavLink } to='/lists'>Lists</Nav.Link>
        </Nav.Item>
        </>
    </Navbar>
  )
}
