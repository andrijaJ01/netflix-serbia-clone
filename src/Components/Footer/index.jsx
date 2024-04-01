import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default function Footer() {
    return (
        <Row className='bg-black text-light mx-0 px-0 text-center'>
            <Col md={4}>
                <p>Questions? Contact Us</p>
                <p>MSR</p>
                <p>Andrija Jovanovic</p>
                <p>Privacy</p>
                <p>Speed Test</p>
            </Col>
            <Col md={4}>
                <p>Help Centre</p>
                <p>Jobs</p>
                <p>Cookie Preferences</p>
                <p>Legal Notices</p>
            </Col>
            <Col md={4}>
                <p>Account</p>
                <p>Ways to Watch</p>
                <p>Corporate Information</p>
                <p>Only on Netflix</p>
            </Col>
            
        </Row>
    );
}
