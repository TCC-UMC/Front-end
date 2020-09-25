import React from 'react';
import { Container } from '../../Styles/Container';
import Header from '../../components/HeaderCoord';
import {Title} from '../../Styles/EventsList';
import {Table} from '../../Styles/Table';
import {Row} from '../../Styles/NewEvent';
import {Button} from '../../Styles/Logon';
import {Link} from 'react-router-dom';

export default function Panelist() {
  return (
  <>
    <Header/>
    <Container>
      <Title>Lista de palestrantes</Title>
      <Table>
        <tr>
          <th>Nome</th>
          <th>Email</th> 
          <th>Telefone</th>
        </tr>
        <tr>
          <td>Palestrante</td>
          <td>Palestrante@email.com</td>
          <td>11 12345-6789</td>
        </tr>
      </Table>
      <br/>
      <br/>
      <Row>
      <Link to="/cadastrar-palestrante" className="decoration-none ">
        <Button buttonColor="#195088">Cadastrar Novo Palestrante</Button>
      </Link>
        
      </Row>
    </Container>
    </>
  );
}