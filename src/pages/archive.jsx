import { Link, NavLink, Outlet, } from 'react-router-dom'
import { Container, Card, Navbar, Nav, ListGroup, Row, Col, Form, FormControl } from 'react-bootstrap';
import '../App.css'
import { posts } from '../utils/placeholders';
import { PostTitleItem } from '../components/post';

export default function Archive() {

    return (
        <ListGroup variant='flush'>
            <ListGroup.Item>
                <Row>
                    <Col xs="auto">
                        <Form.Select size="sm">
                            <option>...</option>
                            {
                                ['January', 'Feburary', '...', 'December'].map((month) => (
                                    <option>{month}</option>
                                ))
                            }
                        </Form.Select>
                    </Col>
                    <Col xs="auto">
                        <Form.Select size="sm">
                            <option>...</option>
                            {
                                [...Array(31)].map((day, index) => (
                                    <option>{index + 1}</option>
                                ))
                            }
                        </Form.Select>
                    </Col>
                    <Col xs="auto">
                        <Form.Select size="sm">
                            <option>...</option>
                            {
                                [...Array(10)].map((day, index) => (
                                    <option>{index + 2015}</option>
                                ))
                            }
                        </Form.Select>
                    </Col>
                </Row>
            </ListGroup.Item>

            {posts.map((post, index) => {
                return (
                    <ListGroup.Item>
                        <PostTitleItem post={post} />
                    </ListGroup.Item>
                )
            })}


        </ListGroup>
    )
}