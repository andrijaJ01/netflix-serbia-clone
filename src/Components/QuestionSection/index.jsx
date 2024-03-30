import React from 'react';
import { Row, Col} from 'react-bootstrap';

const QuestionsSection = () => {
    return (
        <section className="faq">
            <h2>Frequently Asked Questions</h2>
            <Row>
                <Col xs={12}>
                    <span className="faqbox">
                        <h4>What is Netflix</h4>
                        
                    </span>
                </Col>
                <Col xs={12}>
                    <span className="faqbox">
                        <h4>What is Netflix 1</h4>
                        
                    </span>
                </Col>
                <Col xs={12}>
                    <span className="faqbox">
                        <h4>What is Netflix 2</h4>
                        
                    </span>
                </Col>
                <Col xs={12}>
                    <span className="faqbox">
                        <h4>What is Netflix 3</h4>
                        
                    </span>
                </Col>
                
            </Row>
            
        </section>
    );
};

export default QuestionsSection;
