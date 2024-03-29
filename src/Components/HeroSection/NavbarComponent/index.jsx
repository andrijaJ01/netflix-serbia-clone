import React from 'react';
import { Navbar, Button, Image, Col } from 'react-bootstrap';

const NavbarComponent = () => {
    return (
        <Navbar>
            <Navbar.Brand>
                <Image
                    width="53"
                    src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
                    alt=""
                />
            </Navbar.Brand>
            <Col xs={4} md={2}>
                <Button className='w-100 px-3' variant="danger">Sign In</Button>
            </Col>
        </Navbar>
    );
}

export default NavbarComponent;
