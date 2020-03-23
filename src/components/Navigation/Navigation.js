//Core
import React from 'react';
import { Link } from 'react-router-dom';

//Components
import Nav from 'react-bootstrap/Nav';

//Routes
import { routes } from '../../engine/config/routes';

//Style 
import './Navigation.css'

function Navigation() {
  return (
    <Nav variant="pills" defaultActiveKey="/all">
      <Nav.Item >
        <Nav.Link
          href="/all"
          as={Link}
          to={routes.all}>
          All
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="link-2"
          as={Link}
          to={routes.inprogress}>
          Inprogress
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="link-3"
          as={Link}
          to={routes.done}>
          Done
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Navigation;