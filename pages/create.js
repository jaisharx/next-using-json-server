import { Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Create() {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const submitPost = async () => {
        const post = {
            title,
            body,
        };

        await fetch('https://json-server-api-backend.herokuapp.com/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: { 'Content-Type': 'application/json' },
        });

        router.push('/');
    };

    return (
        <Container className="pt-4 w-50">
            <h1>Create a New Blog</h1>

            <Form>
                <Form.Control
                    type="text"
                    required
                    placeholder="Blog title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Form.Control
                    as="textarea"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="mt-2 textarea-height"
                    placeholder="Body of the blog goes here..."
                ></Form.Control>
                <Button className="mt-2" onClick={submitPost}>
                    Create
                </Button>
            </Form>
        </Container>
    );
}
