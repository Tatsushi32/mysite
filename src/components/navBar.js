import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        {/* <Container> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/" className="link-no-style">
              <Nav.Link as="span" eventKey="home">
                Home
              </Nav.Link>
            </Link>
            <Link to="/career" className="link-no-style">
              <Nav.Link as="span" eventKey="career">
                Career
              </Nav.Link>
            </Link>
            <Link to="/works" className="link-no-style">
              <Nav.Link as="span" eventKey="works">
                Works
              </Nav.Link>
            </Link>
            <Link to="/contact" className="link-no-style">
              <Nav.Link as="span" eventKey="contact">
                Contact
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
