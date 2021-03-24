import { Container, Row, Button, Form, Card } from 'react-bootstrap';
import Head from 'next/head';

export default function Home({ posts }) {
    return (
        <>
            <Head>
                <title>Next using json-server</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container className="pt-4 pb-4">
                <Container>
                    <Row className="align-items-center">
                        <h1 className="mr-auto">Your Blogs</h1>
                        <Button href="/create">Add a new blog</Button>
                    </Row>
                </Container>

                <Form className="search mt-2 w-25">
                    <Form.Control
                        type="text"
                        placeholder="Type here to search"
                    />
                </Form>

                <div className="mt-4 card-grid">
                    {posts.map((post) => (
                        <Card className="mt-2 mb-2">
                            <Card.Body>
                                <Card.Title>
                                    {post.title.slice(0, 40)}
                                </Card.Title>
                                <p>
                                    <small>Id: {post.id}</small>
                                </p>
                                <Card.Text>
                                    {post.body.slice(0, 200)}...
                                </Card.Text>
                                <a href={`/blog/${post.id}`}>Read more</a>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Container>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch(
        'https://json-server-api-backend.herokuapp.com/posts'
    );
    const posts = await res.json();

    return {
        props: { posts },
    };
}
