import React, { Component } from 'react';
import { Col, Card, Button, Row, Container, Modal } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';





export class AboutUs extends Component {

    render() {

        return (
            <div>



                <h1 id="team">TEAM MEMBERS </h1>

                <Container>

                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={'https://avatars.githubusercontent.com/u/82367199?v=4'} />
                                <Card.Body>
                                    <Card.Title>Dunina Alkilany</Card.Title>
                                    <Card.Title>Team Leader</Card.Title>
                                    <Card.Text>
                                        Software Developer , Responsible for the main function of the wep app in addition to adding styling feathers
                                    </Card.Text>
                                    <SocialIcon className="social" url="https://www.linkedin.com/in/dunia-alkilany-991ba31a8/" />
                                    <SocialIcon className="social" url="https://github.com/Duniaalkilany" />
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={'https://avatars.githubusercontent.com/u/81819632?s=400&u=cd0741bacd32581d384f94486ae53dc9480ea83f&v=4'} />
                                <Card.Body>
                                    <Card.Title>Sultan Elayan</Card.Title>
                                    <Card.Title>Member</Card.Title>
                                    <Card.Text>
                                        Software Developer , Responsible for the main structure and debugging in addition to adding styling feathers
                                    </Card.Text>
                                    <SocialIcon className="social" url="https://www.linkedin.com/in/sultan-elayan-77702591/" />
                                    <SocialIcon className="social" url="https://github.com/sultan-elayan" />

                                </Card.Body>
                            </Card>
                        </Col> <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={'https://avatars.githubusercontent.com/u/82319080?v=4'} />
                                <Card.Body>
                                    <Card.Title>Ethar Abdalhaleem</Card.Title>
                                    <Card.Title>Member</Card.Title>
                                    <Card.Text>
                                        Software Developer ,  Responsible linked paged of the wep app in addition to adding styling feathers
                                    </Card.Text>
                                    <SocialIcon className="social" url="https://www.linkedin.com/in/ethar-abed-alhaleem-4a0b05206/" />
                                    <SocialIcon className="social" url="https://github.com/Eabdalhaleem" />

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>




            </div>
        )
    }
}

export default AboutUs
