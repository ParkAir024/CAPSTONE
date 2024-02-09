import Body from "../components/Body"
import Post from "../components/forms/Post"

export default function SocialPage({ children }) {
    return (
        <Body sidebar>
            {children}
            <Post />
        </Body>
    )
}
