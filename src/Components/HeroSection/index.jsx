import React from 'react';
import { Row, Col } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent';
import HeroContent from './HeroContent';
import EmailForm from './EmailForm';
const HeroSection = () => {
    return (
        <Row className="main mx-0">
        <Col>
            <NavbarComponent />
        </Col>
        <span className='box'></span>
        <Col>
            <HeroContent />
            <EmailForm />
        </Col>
    </Row>
    );
}
export default HeroSection