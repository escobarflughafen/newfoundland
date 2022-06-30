import { Link, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav } from 'react-bootstrap'
import '../App.css'

function Navbar(props) {

    return (
        <Nav variant={props.variant}>
            <Nav.Item>
                <NavLink className="nav-link" to="/posts">posts</NavLink> 
            </Nav.Item>
            <Nav.Item>
                <NavLink className="nav-link" to="/archive">archive</NavLink> 
            </Nav.Item>
            <Nav.Item>
                <NavLink className="nav-link" to="/tools">tools</NavLink> 
            </Nav.Item>
            <Nav.Item>
                <NavLink className="nav-link" to="/about">about</NavLink> 
            </Nav.Item>
        </Nav>
    )
}

export default Navbar;