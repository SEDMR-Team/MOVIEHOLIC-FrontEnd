import React, { Component } from 'react';
import { Container,Row,Col,Image} from 'react-bootstrap';

export class AboutUs extends Component {
    render() {
        return (
            <div>

                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src="holder.js/171x180" rounded />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src="holder.js/171x180" roundedCircle />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src="holder.js/171x180" thumbnail />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AboutUs
