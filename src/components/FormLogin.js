import React, { useState } from "react";
import user from "../assets/images/logouser.png"
import { Button, Col, Form, Image, Row } from "react-bootstrap";
//import axios from "axios";

const FormLogin = () => {

    const [User, setUser] = useState({
        username: "",
        password: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        console.log("User", User)
        /*console.log('username', username)
        /*try{
            const response = await axios.post('http://127.0.0.1:8000/api/usuarios', {
            username,
            password,
      });
        }catch(error){
            console.error("Login Error: ", error);
        } */
    }

    return(
        <div>
            <Row>
                <Col className = "py-3">
                    <Image src = { user } roundedCircle style={{ width: '80px', height: '80px' }}/>
                </Col>
            </Row>
            <Row>
                <Form onSubmit={handleLogin}>
                    <Row className="label">
                        <Col md = {{ span: 2, offset: 3 }}><label htmlFor="username">Usuario:</label></Col>
                        <Col md = {{ span: 4 }}><input
                        type="text"
                        id="username"
                        name="username"
                        value={User.username}
                        onChange={handleChange}
                        /></Col>
                    </Row>
                    <Row className="label">
                        <Col md = {{ span: 2, offset: 3 }}><label htmlFor="password">Contraseña:</label></Col>
                        <Col md = {{ span: 4 }}><input
                        type="password"
                        id="password"
                        name="password"
                        value={User.password}
                        onChange={handleChange}
                        /></Col>
                    </Row>
                    <Row className="label"><Col xs = {{ span: 2, offset: 5 }}><Button variant="primary" type="submit">Ingresar</Button></Col></Row>
                </Form>
            </Row>
        </div>
    )
}

export default FormLogin