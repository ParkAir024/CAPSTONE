import { useState } from "react";
import Container from "react-bootstrap/esm/Container";

import { Posts } from "./components/Posts";
import Header from "./components/Header";
// import Post from './components/forms/Post'
import Anime from "./components/Anime";
import Register from "./components/forms/Register";
import Users from "./components/Users";
import FormPage from "./pages/FormPage";
import SocialPage from "./pages/SocialPage";
import LandingPage from "./pages/LandingPage";
import Login from "./components/forms/Login";
import { Route, Routes, useLocation } from "react-router-dom";
import UserPage from "./pages/UserPage";
import { ToastContainer } from "react-toastify";
import Logout from "./components/Logout";
import TriviaPage from "./pages/TriviaPage";
import './styles/index.css';

// import useUserContext from "./useUserContext";


export default function App() {
  const location = useLocation();
  const currentPath = location.pathname;
  let className = "app";


  if (currentPath === "/trivia") {
    className += " trivia-page ";
  }

  return (
    <Container fluid data-bs-theme='dark' className={className}>
      <Header />
      {/* {<Post />} */}
      <Routes>
        <Route path='/' element={<LandingPage>
          <Anime />
        </LandingPage>} />
        <Route path='/login' element={<FormPage>
          <Login />
        </FormPage>} />
        <Route path='/trivia' element={<TriviaPage>

        </TriviaPage>}/>
        <Route path='/register' element={<FormPage>
          <Register />
        </FormPage>} />
        <Route path='/users' element={<SocialPage>
          <Users />
        </SocialPage>} />
        <Route path='/posts' element={<SocialPage>
          <Posts />
        </SocialPage>} />
        <Route path='/user/:username' element={<UserPage />} />
        <Route path='logout' element={<Logout />} />
      </Routes>
      <ToastContainer />
    </Container>
  )
}