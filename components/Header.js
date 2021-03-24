import { Container, Row, Button } from 'react-bootstrap';

export default function Header() {
    return (
        <Container>
            <Row className="align-items-center">
                <h1 className="mr-auto">Your Blogs</h1>
                <Button href="/create">Add a new blog</Button>
            </Row>
        </Container>
    );
}
