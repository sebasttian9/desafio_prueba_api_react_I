import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbarh = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Biblioteca</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#inicio" >Inicio</Nav.Link>
        <Nav.Link href="#buscar" active>Buscar</Nav.Link>
        <Nav.Link href="#mislibros">Mis  libros</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Navbarh