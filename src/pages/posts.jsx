import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { Container, Card, Navbar, Nav, ListGroup, Row, Col, CardGroup, Accordion } from 'react-bootstrap';
import { PostTitleItem } from '../components/post';
import '../App.css'
import { posts } from '../utils/placeholders';


export default function Posts() {

    const navigate = useNavigate();

    return (
        <div>
            <Row>
                <Col xs={12} lg={4}>
                    <Card.Body className='d-none'>
                        <Card.Text >
                            <strong>pinned posts</strong>
                        </Card.Text>
                        <CardGroup className='d-flex flex-row'>
                            {[
                                'Primary',
                                'Success',
                                'Light',
                            ].map((variant) => (
                                <Card
                                    bg={variant.toLowerCase()}
                                    key={variant}
                                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                    style={{ width: '18rem' }}
                                    className="mb-2"
                                >
                                    <Card.Header>Header</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{variant} Card Title </Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}
                        </CardGroup>
                    </Card.Body>

                    <Accordion defaultActiveKey="-1" flush>
                        {
                            posts.map((post, index) => {
                                return (
                                    <Accordion.Item eventKey={`${index}`}>
                                        <Accordion.Header onClick={() => {navigate(`preview/${post.id}`)}}>
                                            <PostTitleItem post={post} />
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            {post.brief}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                            })
                        }
                    </Accordion>
                </Col>
                <Col className='d-none d-lg-block'>
                    <Card.Body>
                        <Outlet />
                    </Card.Body>
                </Col>
            </Row>
        </div>
    )
}