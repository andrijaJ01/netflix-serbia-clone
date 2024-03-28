import React from 'react';
import { Row, Col, Navbar, Button, InputGroup, FormControl, Image } from 'react-bootstrap';

const HeroSection = () => {
    return (
        <Row className="main mx-0">
            <span className='box'></span>
            <Col>
                <Navbar>
                    <Navbar.Brand>
                        <Image
                            width="53"
                            src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
                            alt=""
                        />
                    </Navbar.Brand>
                    <Button variant="danger">Sign In</Button>
                </Navbar>
            </Col>
            <Col>
                <Row className="text-center d-flex flex-column align-items-center justify-content-center text-white position-relative gap-3 p-3">
                    <Col className='hero'>
                        <h1>Unlimited movies, TV shows, and more</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                        <Col md={{ span: 6, offset: 3 }} className='my-3 '>
                            <InputGroup className="mb-3 p-4">
                                <FormControl className='p-3' type="email" placeholder="Email Address" />
                                <Button variant="danger">Get Started {'>'}</Button>
                            </InputGroup>
                        </Col>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
export default HeroSection;