import { Link, NavLink, Outlet, } from 'react-router-dom'
import { Container, Card, Navbar, Nav, ListGroup, Row, Col, Form, FormControl } from 'react-bootstrap';
import '../App.css'

export default function Archive() {

    return (
        <ListGroup variant='flush'>
            <ListGroup.Item>
                <Row>
                    <Col xs="auto">
                       <Form.Select size="sm">
                       {
                        ['January', 'Feburary', '...', 'December'].map((month) => (
                            <option>{month}</option>
                        ))
                       }
                        </Form.Select> 
                    </Col>
                    <Col xs="auto">
                       <Form.Select size="sm">
                       {
                        [...Array(31)].map((day, index) => (
                            <option>{index+1}</option>
                        ))
                       }
                        </Form.Select> 
                    </Col>
                    <Col xs="auto">
                       <Form.Select size="sm">
                       {
                        [...Array(10)].map((day, index) => (
                            <option>{index+2015}</option>
                        ))
                       }
                        </Form.Select> 
                    </Col>
                </Row>
            </ListGroup.Item>

            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
    )
}