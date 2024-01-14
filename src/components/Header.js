import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

function Header(props) {

    function handleClick(value){
        props.handleCategory(value);
    }

  return (
    <Navbar expand="lg" className="bg-secondary">
      <Container>
        <Navbar.Brand  onClick={() => handleClick('tesla')}>News App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleClick('tesla')} >Home</Nav.Link>
            <Nav.Link onClick={() => handleClick('technology')}>Technology</Nav.Link>
            <Nav.Link onClick={() => handleClick('business')}>Business</Nav.Link>
            <Nav.Link onClick={() => handleClick('sports')}>Sports</Nav.Link>
            <Nav.Link onClick={() => handleClick('entertainment')}>Entertainment</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;