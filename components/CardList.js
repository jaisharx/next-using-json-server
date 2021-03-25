import getFormattedDate from 'utils/getFormattedDate';
import { Card } from 'react-bootstrap';

export default function CardList({ data }) {
    return (
        <div className="mt-4 card-grid">
            {data.map((item) => (
                <Card key={item.id}>
                    <Card.Body>
                        <Card.Title>{item.title.slice(0, 30)}</Card.Title>
                        <p>
                            <small>{getFormattedDate()}</small>
                        </p>
                        <Card.Text>{item.body.slice(0, 200)}...</Card.Text>
                        <a href={`/blog/${item.id}`}>Read more</a>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}
