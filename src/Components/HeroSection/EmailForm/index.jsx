import React from 'react';
import {  Col, Button, InputGroup, FormControl } from 'react-bootstrap';



const EmailForm = () => {
    return (
        <Col md={{ span: 6, offset: 3 }} className='my-3 '>
            <InputGroup className="mb-3 p-3">
                <FormControl className='p-2' type="email" placeholder="Email Address" />
                <Button variant="danger">Get Started {'>'}</Button>
            </InputGroup>
        </Col>
    );
}
export default EmailForm