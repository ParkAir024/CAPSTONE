import { useContext, useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import '../styles/users.css';
import { UserContext } from "../contexts/UserContext";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Users() {
    const { user: loggedUser } = useContext(UserContext);
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true); // State for loading spinner

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('https://weekend-portal.onrender.com/user');
                if (res.ok) {
                    const data = await res.json();
                    setUsers(data);
                } else {
                    console.log('error');
                }
            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    async function followUser(followerId) {
        try {
            const res = await fetch(`https://weekend-portal.onrender.com/user/follow/${followerId}`, {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: 'Bearer '.concat(loggedUser.token)
                }
            });
            if (res.ok) {
                const updatedUsers = users.map(user => {
                    if (user.id === followerId) {
                        return { ...user, followed: true };
                    }
                    return user;
                });
                setUsers(updatedUsers);
                console.log("User followed successfully");
            }
        } catch (error) {
            console.error('Error following user:', error);
        }
    }

    async function unfollowUser(followerId) {
        try {
            const res = await fetch(`https://weekend-portal.onrender.com/user/unfollow/${followerId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: 'Bearer '.concat(loggedUser.token)
                }
            });
            if (res.ok) {
                const updatedUsers = users.map(user => {
                    if (user.id === followerId) {
                        return { ...user, followed: false };
                    }
                    return user;
                });
                setUsers(updatedUsers);
                console.log("User unfollowed successfully");
            } else {
                console.error("Error unfollowing user:", res.statusText);
            }
        } catch (error) {
            console.error('Error unfollowing user:', error);
        }
    }

    return (
        <div className="users-container">
            <div className="flair2"/>
            <input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={handleSearchInputChange}
            />
            {loading ? ( 
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            ) : (
                users.filter(user => user.username.toLowerCase().includes(searchQuery.toLowerCase()))
                     .map(user => (
                        user.username !== loggedUser.username && (
                            <div key={user.id}>
                                <Link to={`/user/${user.username}`}>
                                    <p>{user.username}</p>
                                </Link>
                                {loggedUser.followed.hasOwnProperty(user.id) ? (
                                    <button onClick={() => unfollowUser(user.id)}>Unfollow</button>
                                ) : (
                                    <button onClick={() => followUser(user.id)}>Follow</button>
                                )}
                            </div>
                        )
                    ))
            )}
        </div>
    );
}
