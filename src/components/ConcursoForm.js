import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ConcursoForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [winners, setWinners] = useState(1);
  const [repeatWinners, setRepeatWinners] = useState(false);
  const [conditions, setConditions] = useState({
    followAccount: false,
    interactWithPost: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const concursoData = {
      startDate,
      endDate,
      winners,
      repeatWinners,
      conditions,
    };
    console.log('Concurso creado:', concursoData);
    // Aquí puedes manejar el envío del formulario, como hacer una petición a una API
  };

  const handleConditionChange = (event) => {
    const { name, checked } = event.target;
    setConditions((prevConditions) => ({
      ...prevConditions,
      [name]: checked,
    }));
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center">Crear Concurso</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formStartDate">
              <Form.Label>Fecha de Inicio:</Form.Label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="form-control"
              />
            </Form.Group>

            <Form.Group controlId="formEndDate">
              <Form.Label>Fecha de Fin:</Form.Label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                className="form-control"
              />
            </Form.Group>

            <Form.Group controlId="formWinners">
              <Form.Label>Cantidad de Ganadores:</Form.Label>
              <Form.Control
                type="number"
                value={winners}
                onChange={(e) => setWinners(e.target.value)}
                min="1"
              />
            </Form.Group>

            <Form.Group controlId="formRepeatWinners">
              <Form.Check
                type="checkbox"
                label="¿Se pueden repetir los ganadores?"
                checked={repeatWinners}
                onChange={() => setRepeatWinners(!repeatWinners)}
              />
            </Form.Group>

            <Form.Group controlId="formFollowAccount">
              <Form.Check
                type="checkbox"
                label="Seguir la cuenta del organizador del concurso"
                name="followAccount"
                checked={conditions.followAccount}
                onChange={handleConditionChange}
              />
            </Form.Group>

            <Form.Group controlId="formInteractWithPost">
              <Form.Check
                type="checkbox"
                label="Interactuar con una publicación"
                name="interactWithPost"
                checked={conditions.interactWithPost}
                onChange={handleConditionChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" block>
              Crear Concurso
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ConcursoForm;

