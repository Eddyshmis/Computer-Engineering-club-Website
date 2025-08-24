import NavigationBar from '../../components/NavigationBar'
import { Navbar, Nav } from 'react-bootstrap';
const GameDev = () => {
  return (<> 
  <NavigationBar/>
  <div style={{ display: 'flex', height: '100vh' }}>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className="flex-column"
        style={{ width: '250px', position: 'fixed' }}
      >
        <Navbar.Brand href="#">My Website</Navbar.Brand>
        <Nav className="flex-column">
          <Nav.Link href="#getting-started">Getting Started</Nav.Link>
          <Nav.Link href="#layout">Layout</Nav.Link>
          <Nav.Link href="#forms">Forms</Nav.Link>
          <Nav.Link href="#components">Components</Nav.Link>
        </Nav>
      </Navbar>
      <div style={{ marginLeft: '250px', width: '100%', padding: '20px' }}>
        {/* Main content goes here */}
        <h1>Welcome to My Website</h1>
        <p>This is the main content area.</p>
      </div>
    </div>

    <div>
      <p id='#componentss'>
        testing this out
      </p>
    </div>
  </>
  );
}

export default GameDev