import { Card, Container } from 'react-bootstrap';

export default function Blog({ post }) {
    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card>
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.body}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export async function getStaticPaths() {
    const res = await fetch(
        'https://json-server-api-backend.herokuapp.com/posts'
    );
    const posts = await res.json();

    const paths = posts.map((post) => {
        const stringId = post.id.toString();
        {
            return {
                params: { id: stringId },
            };
        }
    });

    console.log(paths);

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const res = await fetch(
        `https://json-server-api-backend.herokuapp.com/posts/${params.id}`
    );
    const post = await res.json();

    return {
        props: {
            post,
        },
    };
}
