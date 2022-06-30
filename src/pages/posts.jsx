import { Link, NavLink, Outlet, } from 'react-router-dom'
import { Container, Card, Navbar, Nav, ListGroup, Row, Col} from 'react-bootstrap';
import '../App.css'

export default function Posts() {

    return (
        <ListGroup variant='flush'>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
    )
}