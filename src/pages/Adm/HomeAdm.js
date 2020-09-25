import React from 'react';
import {Container} from '../../Styles/Container';
import Header from '../../components/HeaderAdm';
import {Title} from '../../Styles/EventsList';
import {Table} from '../../Styles/Table';

export default function HomeAdm() {
  return (
  <>
    <Header/>
    <Container>
      <Title>Lista de Coordenadores</Title>
      <Table>
        <tr>
          <th>Nome</th>
          <th>Email</th> 
        </tr>
        <tr>
          <td>Coordenador</td>
          <td>Coordenador@email.com</td>
        </tr>
      </Table>
      <br/>
    </Container>
    </>
  );
}