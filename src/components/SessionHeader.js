import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SessionHeader = () => {
    return(
        <Row className="header">
            <Col xs = { 4 } md = { 2 }>
                Nombre del usuario
            </Col>
            <Col xs = {{ span: 4, offset: 4 }} md = {{ span: 2, offset: 8 }}>
                <Link to = "/" className="text-decoration-none">Cerrar Sesión</Link>
            </Col>
        </Row>
    )
}

export default SessionHeader