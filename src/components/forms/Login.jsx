import { useState, useContext, useEffect } from "react"
import '../../styles/login.css'
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { UserContext } from "../../contexts/UserContext"


export default function Login() {
    
    const [ isLogging, setIsLogging ] = useState(false)
    const [ user, setUser ] = useState({username:'',password:'',token:''})

    const { updateUser, user: userState, updateLocalStorage } = useContext(UserContext)
    const navigate = useNavigate()

    if( isLogging ){
        console.log(user, 'user info');
        loginUser()
    }
    
    useEffect(()=>{
        if(userState.username){
            navigate('/')
            return
        } 
        const localUser = JSON.parse(localStorage.getItem('user'))
        console.log(localUser, 'local user');
        if (localUser && localUser.username && !userState.username) {
            console.log('in if =========');
            updateUser(localUser)
            navigate('/')
            return
        }
    },[])

    async function getUser(username){
            const res = await fetch('https://weekend-portal.onrender.com/user/'.concat(username))
            if (res.ok) {
                const data = await res.json()
                console.log(data);
                return data
            }
    }

    async function loginUser() {
        console.log(user, 'from req==========');
        const res = await fetch('https://weekend-portal.onrender.com/login', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        if (res.ok) {
            const data = await res.json()

            if (data.token) {
                toast.success(user.username.concat(' logged in!'))
                const userData = await getUser(user.username)

                updateUser({ token: data.token, username: user.username, followed: userData.followed })
                updateLocalStorage()
                navigate('/')
                return
            }
        }
        toast.error('Invalid User Info/ Try Again')
        console.error("Login failed")
        setIsLogging(false)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const loginElement = e.currentTarget
        const loginForm = new FormData(loginElement)
        console.log(loginForm.get('username'));
        console.log(loginForm.get('password'));
        setUser(
            Object.fromEntries(loginForm)
        )
        setIsLogging(true)
    }

    return (
        <div className="login-container">
            <h3>Login</h3>
            <form action="" id='login-form' onSubmit={handleSubmit}>
                <label htmlFor="username"></label><br />
                <input type="text" name='username' /><br />
                <label htmlFor="password"></label><br />
                <input type="password" name={'password'} /><br />
                <input type="submit" value={'Login'} className="Button" />
            </form>
        </div>
    )
}