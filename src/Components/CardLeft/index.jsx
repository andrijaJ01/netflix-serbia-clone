import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import "./style.scss";

const CardLeft = () => {
    return (
        <Card className="h-100 mx-0 p-0 bg-black custom-card text-light">
            <Row className="mx-0 bg-black px-0 align-items-center">
                <Col md={6} className="p-0 bg-dark text-light">
                    <Card.Img variant="left" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" className="w-100" />
                </Col>
                <Col md={6} className='p-0 mx-0 bg-black'>
                    <Card.Body>
                        <Card.Title>Download your shows to watch offline</Card.Title>
                        <Card.Text>
                            Save your favorites easily and always have something to watch.
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
}

export default CardLeft;
