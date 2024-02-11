import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { Posts } from "./components/Posts";
import Header from "./components/Header";
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

  const [showModal, setShowModal] = useState(true);


  const handleCloseModal = () => setShowModal(false);

  return (
    <Container fluid data-bs-theme='dark' className={className}>
      <Modal show={showModal} onHide={handleCloseModal} dialogClassName="custom-modal modal-fullscreen">
        <Modal.Header closeButton className="d-flex justify-content-center align-items-center" style={{ fontSize: "5rem" }}>
          <Modal.Title className="text-center flex-grow-1" style={{ fontSize: "5rem" }} >Welcome to Anime List Share!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center" style={{ fontSize: "3.5rem" }}>
          A site to share and rate your anime lists! Could be your watch list, or your top anime lists! Let others rate and recommend there favorites!
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center"> 
          <Button variant="success" onClick={handleCloseModal} style={{ fontSize: "4rem" }}>
            Enter
          </Button>
        </Modal.Footer>
      </Modal>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage>
          <Anime />
        </LandingPage>} />
        <Route path='/login' element={<FormPage>
          <Login />
        </FormPage>} />
        <Route path='/trivia' element={<TriviaPage>

        </TriviaPage>} />
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