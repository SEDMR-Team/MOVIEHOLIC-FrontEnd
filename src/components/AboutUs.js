import React, { Component } from 'react';
import { Card , Button} from 'react-bootstrap';

export class AboutUs extends Component {
    render() {
        return (
            <div>

                <h1>hello this about us page </h1>


                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                {/* <Container>
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
                </Container> */}
            </div>
        )
    }
}

export default AboutUs
