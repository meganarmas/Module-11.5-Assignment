import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { NavLink } from "react-bootstrap";


const NotFound = () => {
    return (
        <Container className="notFound">
            <Row classname="align-items-center">
                <Col md={6}>
                <h1 className="text-danger">404 Not Found</h1>
                <Img src="/asset/notfound.webp" fluid />
                <button variant="primary" as={NavLink} to="/">Back to Home</button>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound ;