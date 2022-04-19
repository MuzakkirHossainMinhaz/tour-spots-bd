import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import './About.css'

const About = () => {
    return (
        <div className='container'>
            <div className="about-us">
                <h1 className='fw-bold text-info text-center'>About Us</h1>
                <div className="person">
                    <Card style={{ width: '25rem' }} className=" d-block mx-auto border-0 shadow my-5 pt-2 pb-3">
                        <Card.Img className='d-block mx-auto' variant="top" src="https://i.ibb.co/PQQshp4/pic-1.png" />
                        <Card.Body>
                            <Card.Title className='fs-4'>Muzakkir Hossain Minhaz</Card.Title>
                            <small>CEO and Founder</small>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                        {/* <ListGroup className="list-group-flush">
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup> */}
                        <Card.Body>
                            <Card.Link href="#">Facebook</Card.Link>
                            <Card.Link href="#">LinkedIn</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="persons">
                    <Card style={{ width: '25rem' }} className="person d-block mx-auto border-0 shadow my-5 pt-2 pb-3">
                        <Card.Img className='d-block mx-auto' variant="top" src="https://i.ibb.co/Ln9LRwc/pic-2.png" />
                        <Card.Body>
                            <Card.Title className='fs-4'>Md. Faisal Khan</Card.Title>
                            <small>Team member</small>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                        {/* <ListGroup className="list-group-flush">
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup> */}
                        <Card.Body>
                            <Card.Link href="#">Facebook</Card.Link>
                            <Card.Link href="#">LinkedIn</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem' }} className="person d-block mx-auto border-0 shadow my-5 pt-2 pb-3">
                        <Card.Img className='d-block mx-auto' variant="top" src="https://i.ibb.co/SXdzyK1/pic-3.png" />
                        <Card.Body>
                            <Card.Title className='fs-4'>Yasir Arafat Prince</Card.Title>
                            <small>Team member</small>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                        {/* <ListGroup className="list-group-flush">
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup> */}
                        <Card.Body>
                            <Card.Link href="#">Facebook</Card.Link>
                            <Card.Link href="#">LinkedIn</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;