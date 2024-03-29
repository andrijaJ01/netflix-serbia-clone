import React from 'react';
import { Row, Col} from 'react-bootstrap';

const HeroContent = () => {
    return (
        <Row className="text-center d-flex flex-column align-items-center justify-content-center text-white position-relative gap-3 p-3">
            <Col className='hero'>
                <h1>Unlimited movies, TV shows, and more</h1>
                <p>Watch anywhere. Cancel anytime.</p>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
            </Col>
        </Row>
    );
}

export default HeroContent;