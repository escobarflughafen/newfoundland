import { Link, NavLink, Outlet } from 'react-router-dom'
import AppNavbar from './components/navbar'
import { Container, Card, Navbar, Nav } from 'react-bootstrap';
import Brand from './components/brand';
import './App.css'

function App() {

  return (
    <div>
      <Navbar className="mb-3" bg="black" expand="md">
        <Container fluid>
          <Link to="/" className="brand text-white" style={{ fontSize: "1.5rem" }}>
            newfoundland
          </Link>
        </Container>

      </Navbar>
      <Container className="mb-3">
        <Card>
          <Card.Header>
            <AppNavbar variant="tabs" />
          </Card.Header>
          <Outlet />
        </Card>
      </Container>
    </div>
  );

}

export default App;
