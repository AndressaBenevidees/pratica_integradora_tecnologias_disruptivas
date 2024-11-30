import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import CriarTarefa from './CriarTarefa';

// Função para criar dados iniciais
function createData(idTarefa, tituloTarefa, descricaoTarefa, inicioTarefa, fimTarefa, statusTarefa, recursoTarefa) {
  return { idTarefa, tituloTarefa, descricaoTarefa, inicioTarefa, fimTarefa, statusTarefa, recursoTarefa };
}

// Dados iniciais
const initialRows = [
  createData(1, 'Título 1', 'Descrição do Estudo 1', '2024-11-21', '2024-11-22', 'Concluído', 'Livros'),
  createData(2, 'Título 2', 'Descrição do Estudo 2', '2024-11-22', '2024-11-23', 'Em Andamento', 'Sites'),
  createData(3, 'Título 3', 'Descrição do Estudo 3', '2024-11-23', '2024-11-24', 'Em Andamento', 'Vídeos'),
  createData(4, 'Título 4', 'Descrição do Estudo 4', '2024-11-24', '2024-11-25', 'Em Andamento', 'Livros'),
  createData(5, 'Título 5', 'Descrição do Estudo 5', '2024-11-25', '2024-11-26', 'Em Andamento', 'Sites'),
  createData(6, 'Título 6', 'Descrição do Estudo 6', '2024-11-26', '2024-11-27', 'Pendente', 'Vídeos'),
];

// Componente ListarTarefa
const ListarTarefa = () => {
  const [open, setOpen] = useState(false);
  const [tarefas, setTarefas] = useState([]);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setTarefas(initialRows);
  }, []);

  const handleDeletar = (id) => {
    setTarefas(current => current.filter(tarefa => tarefa.idTarefa !== id));
  };

  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title>Estudos</Card.Title>
          <Card.Subtitle>Lista de Tarefas</Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Título do Estudo</th>
                  <th>Descrição</th>
                  <th>Data de Início</th>
                  <th>Data de Conclusão</th>
                  <th>Status</th>
                  <th>Recursos</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {tarefas.map((row) => (
                  <tr key={row.idTarefa}>
                    <td>{row.idTarefa}</td>
                    <td>{row.tituloTarefa}</td>
                    <td>{row.descricaoTarefa}</td>
                    <td>{row.inicioTarefa}</td>
                    <td>{row.fimTarefa}</td>
                    <td>{row.statusTarefa}</td>
                    <td>{row.recursoTarefa}</td>
                    <td>
                      <Button variant="info" onClick={() => console.log('Editar', row.idTarefa)}>
                        <AiFillEdit />
                      </Button>
                      <Button variant="danger" onClick={() => handleDeletar(row.idTarefa)}>
                        <AiFillDelete />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Text>
          <Row>
            <Col md="auto">
              <Button variant="primary" onClick={handleOpen}>Criar Tarefa</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Modal para Criar Tarefa */}
      <Modal size="lg" show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Criar Tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CriarTarefa handleClose={handleClose} tarefas={tarefas} setTarefas={setTarefas} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ListarTarefa;
