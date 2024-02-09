import Container from "react-bootstrap/esm/Container";
import Stack from "react-bootstrap/Stack";

import Sidebar from "./Sidebar";
// import { Posts } from "./posts";


export default function Body({ sidebar, children }) {

    return (
        <Container>
            <Stack direction='horizontal'>
                {sidebar && <Sidebar />}
                <Container className='center-content'>
                    {children}
                </Container>
            </Stack>
        </Container>
    )
}
