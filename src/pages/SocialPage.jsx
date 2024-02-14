import React from "react";
import { useLocation } from "react-router-dom";
import Body from "../components/Body";
import Post from "../components/forms/Post";

export default function SocialPage({ children }) {
    const location = useLocation();

    // Check if the current pathname matches "/posts"
    const isPostsPage = location.pathname === "/posts";

    return (
        <Body sidebar>
            {isPostsPage && <Post />}
            {children}
        </Body>
    );
}
