import React from 'react';
import { Button, Card, Container, Row, Col, Image } from 'react-bootstrap';
import './Homepage.css';
import welcomeImage from "../assets/welcome-image.jpg"

const HomePage = () => {
    return (
      <><div className="homepage">
            <nav className="navbar">
                <ul>
                    <li><a href="#/">Home</a></li>
                    <li><a href="#NotFound">Not Found</a></li>
                </ul>
            </nav>
            <div className="cta-button">
                <Button variant="primary" className='shop-now-button'>Shop Now</Button>
            </div>
        </div><Container className="home">
            <Image src={welcomeImage} alt="welcome image" fluid className="mb-4 mt-3" />
                <Row>
                    <Col md={6}>
                        <Card className='feature-card'>
                            <Card.Body>
                                <Card.Title>Feature Products</Card.Title>
                                <Card.Text>Check out feature product here!</Card.Text>
                                <Button variant="secondary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className='feature-card'>
                            <Card.Body>
                                <Card.Title>Feature Products</Card.Title>
                                <Card.Text>Check out feature product here!</Card.Text>
                                <Button variant="secondary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container></>
    );
  };
  
  export default HomePage;