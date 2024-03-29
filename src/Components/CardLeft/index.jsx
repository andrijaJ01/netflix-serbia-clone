import React from 'react';
import { Card, Row, Col, Image, Container } from 'react-bootstrap';
import "./style.scss"

const CardRight = () => {
    return (
        <Row className="mx-0 bg-black px-0 align-items-center">
        
        <Col md={6} className='p-0 mx-0 bg-black '>
            <Card className="h-100 mx-0 p-0 bg-black custom-card text-light"> 
                <Card.Body>
                    <Card.Title>Download your shows to watch offline</Card.Title>
                    <Card.Text>
                        Save your favorites easily and always have something to watch.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col md={6} className="bg-dark text-light px-0">
            <Image fluid src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
        </Col>
    </Row>
    );
}

export default CardRight;
