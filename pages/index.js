import Head from 'next/head';

import { Container, Form } from 'react-bootstrap';
import CardList from 'components/CardList';
import Header from 'components/Header';

export default function Home({ posts }) {
    return (
        <>
            <Head>
                <title>Next using json-server</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container className="pt-4 pb-4">
                <Header/>

                <Form className="search mt-2 w-25">
                    <Form.Control
                        type="text"
                        placeholder="Type here to search"
                    />
                </Form>

                <CardList data={posts} />
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
