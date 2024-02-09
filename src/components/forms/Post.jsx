import { useContext, useRef } from "react"
import '../../styles/post.css'
import { UserContext } from "../../contexts/UserContext"

export default function Post() {

    const { user } = useContext(UserContext)
    const postInputRef = useRef(null)

    async function sendPost( postData ){
        const res = await fetch('https://weekend-portal.onrender.com/anime/',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`
            },
            body: JSON.stringify({body: postData})
        })
        if(res.ok){
            const data = await res.json()
            console.log(data);
            return
        }
        console.error('Post failed')
    }

    function handleSubmit(e){
        e.preventDefault()
        const postData = postInputRef.current.value
        sendPost(postData)
    }

    return (
        // Optional way to style 
        // <div style={{
        //     display: 'flex',
        //     justifyContent: 'center',
        //     marginBottom: '1rem'
        // }}
    <div className="post-container">
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="post">Post</label>
                <textarea type="text" name='post' ref={postInputRef} className="input-area" />
                <input type="submit" value='post' className="post-button"/>
            </form>
        </div>
    )
}
