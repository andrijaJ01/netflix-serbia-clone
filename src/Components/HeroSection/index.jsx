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
                    <Button className='mx-2' variant="danger">Sign In</Button>
                </Navbar>
            </Col>
            <Col>
                <Row className="text-center d-flex flex-column align-items-center justify-content-center text-white position-relative gap-3 p-3">
                    <Col className='hero'>
                        <h1>Unlimited movies, TV shows, and more</h1>
                        <p>Watch anywhere. Cancel anytime.</p>
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>

                        <Col md={{ span: 6, offset: 3 }} className='my-3 '>
                            <InputGroup className="mb-3 p-3">
                                <FormControl className='p-2' type="email" placeholder="Email Address" />
                                <Button variant="danger">Get Started {'>'}</Button>
                            </InputGroup>
                        </Col>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
export default HeroSection