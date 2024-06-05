import React from "react";
import { Col, Row } from "react-bootstrap";
import "./styles/sesion.css";

import SessionPanel from "../components/SessionPanel";
import { Outlet } from "react-router-dom";
import SessionHeader from "../components/SessionHeader";

export default function SessionUser (){
    return(
        <Row>
            <Col xs = { 12 }><SessionHeader /></Col>
            <Col xs = { 2 } id="panel"><SessionPanel/></Col>
            <Col xs = { 10 }><Outlet/></Col>
        </Row>
    )
}