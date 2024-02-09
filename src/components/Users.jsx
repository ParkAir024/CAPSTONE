import { useContext, useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import '../styles/users.css';
import { UserContext } from "../contexts/UserContext";

export default function Users() {

    const { user: loggedUser } = useContext(UserContext)
    
    const [users, setUser] = useState([])

    useEffect(() => {
        (async () => {
            const res = await fetch('https://weekend-portal.onrender.com/user')
            if (res.ok) {
                const data = await res.json()
                setUser(data)
            } else console.log('error');
        })()
    }, [])

    if (users.length === 0) {
        return <Spinner />
    }

    async function followUser(followerId) {

        console.log(followerId, '======')
        const res = await fetch(`https://weekend-portal.onrender.com/user/follow/${followerId}`, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                Authorization: 'Bearer '.concat(loggedUser.token)
            }
        })
        if (res.ok) {
            const data = await res.json()
            console.log(data);
        }
    }

    function unfollowUser(){}

    return (
        <div className="users-container">
            {users.map(user => {
                if (user.username !== loggedUser.username) {
                    return <div key={user.id}>
                        <p>{user.username}</p>

                        { loggedUser.followed.hasOwnProperty(user.id) ? 
                        <button onClick={() => unfollowUser(user.id)}>Unfollow</button> :
                        <button onClick={() => { followUser(user.id) }}>Follow</button>
                     }
                    </div>
                }
            })}
        </div>
    )
}


