import Container from "react-bootstrap/esm/Container";
import Stack from "react-bootstrap/Stack";
import '../styles/index.css'
import Sidebar from "./Sidebar";
// import { Posts } from "./posts";


export default function Body({ sidebar, children }) {

    return (
        <Container className="text">
            <Stack direction='horizontal'>
                {sidebar && <Sidebar />}
                <Container className='center-content'>
                    {children}
                </Container>
            </Stack>
        </Container>
    )
}
