import { useContext, useEffect } from "react"
import { Spinner } from "react-bootstrap"
import { UserContext } from "../contexts/UserContext"
import { useNavigate } from "react-router-dom"

export default function Logout() {

    const { logoutUser, updateLocalStorage } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(()=> {
        logoutUser()
        updateLocalStorage()
        navigate('/login')
    }, [logoutUser])

    return <Spinner />
}
