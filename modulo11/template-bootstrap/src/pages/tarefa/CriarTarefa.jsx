import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button, Navbar } from "react-bootstrap";

// Declaração do componente CriarTarefa
const CriarTarefa = ({ handleClose, tarefas, setTarefas }) => {
  const [idTarefa, setIdTarefa] = useState();
  const [tituloTarefa, setTituloTarefa] = useState("");
  const [descricaoTarefa, setDescricaoTarefa] = useState("");
  const [inicioTarefa, setInicioTarefa] = useState("");
  const [fimTarefa, setFimTarefa] = useState("");
  const [recursoTarefa, setRecursoTarefa] = useState("");
  const [statusTarefa, setStatusTarefa] = useState("");

  useEffect(() => {
    let proximoId = Math.max(...tarefas.map((tarefa) => tarefa.idTarefa)) + 1;
    setIdTarefa(proximoId);
  }, [tarefas]);

  const handleRecurso = (event) => {
    setRecursoTarefa(event.target.value);
  };

  const handleStatus = (event) => {
    setStatusTarefa(event.target.value);
  };

  const handleSalvar = () => {
    console.log(
      `id: ${idTarefa} \n titulo: ${tituloTarefa} \n descrição: ${descricaoTarefa} \n inicio: ${inicioTarefa} \n fim: ${fimTarefa} \n recurso: ${recursoTarefa} \n status: ${statusTarefa}`
    );

    setTarefas([
      ...tarefas,
      {
        idTarefa,
        tituloTarefa,
        descricaoTarefa,
        inicioTarefa,
        fimTarefa,
        recursoTarefa,
        statusTarefa,
      },
    ]);
    handleClose();
  };

  return (
    <Container fluid>
      {/* Menu de Navegação */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Cronograma de Estudos</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {/* Removido o link "Home" */}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Card style={{ marginTop: '20px' }}>
        <Card.Body>
          <Card.Title>Criar Tarefa</Card.Title>
          <Card.Text>
            <Form>
              <Row md={12}>
                <Form.Group className="mb-3" controlId="tituloTarefa">
                  <Form.Control
                    type="text"
                    value={tituloTarefa}
                    onChange={(e) => setTituloTarefa(e.target.value)}
                    placeholder="Título do Estudo"
                    style={{ borderColor: '#007bff' }}
                  />
                </Form.Group>
              </Row>
              <Row md={12}>
                <Form.Group className="mb-3" controlId="descricaoTarefa">
                  <Form.Control
                    type="text"
                    value={descricaoTarefa}
                    onChange={(e) => setDescricaoTarefa(e.target.value)}
                    placeholder="Descrição do Estudo"
                    style={{ borderColor: '#007bff' }}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Col md={3}>
                  <Form.Group className="mb-3" controlId="inicioTarefa">
                    <Form.Control
                      type="date"
                      value={inicioTarefa}
                      onChange={(e) => setInicioTarefa(e.target.value)}
                    />
                    <Form.Text className="text-muted">Início do Estudo.</Form.Text>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-3" controlId="fimTarefa">
                    <Form.Control
                      type="date"
                      value={fimTarefa}
                      onChange={(e) => setFimTarefa(e.target.value)}
                    />
                    <Form.Text className="text-muted">Conclusão do Estudo.</Form.Text>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-3" controlId="recursoTarefa">
                    <Form.Select
                      aria-label="Recurso"
                      onChange={handleRecurso}
                    >
                      <option>Selecione o Recurso</option>
                      <option value={"Livros"}>Livros</option>
                      <option value={"Sites"}>Sites</option>
                      <option value={"Vídeos"}>Vídeos</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-3" controlId="statusTarefa">
                    <Form.Select
                      aria-label="Status"
                      onChange={handleStatus}
                    >
                      <option>Selecione o Status</option>
                      <option value={"Pendente"}>Pendente</option>
                      <option value={"Em Andamento"}>Em Andamento</option>
                      <option value={"Concluída"}>Concluída</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Card.Text>
          <Row>
            <Col md="auto">
              <Button variant="primary" onClick={handleSalvar}>
                Salvar
              </Button>
            </Col>
            <Col md={1}>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CriarTarefa;
