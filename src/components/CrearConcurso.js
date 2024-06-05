import React from "react";
import { Col, Row } from "react-bootstrap";
import ConcursoForm from "./ConcursoForm";

const CrearConcurso = () => {
    return(
        <Row>
            <Col md = {{ span: 4, offset: 4 }} className="highlight-title">
                ¡Bienvenido! crea tu propio concurso 
            </Col>
            <Col xs = { 12 }><ConcursoForm/></Col>
        </Row>
    )
}

export default CrearConcurso