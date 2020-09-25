import React from 'react';
import { Container } from '../../Styles/Container';
import Header from '../../components/HeaderCoord';
import {Title, Button } from '../../Styles/EventsList';
import {Table} from '../../Styles/Table'

export default function HomeCoord() {
  return (
  <>
    <Header/>
    <Container>
      <Title>Clique em gerar e os relatórios serão baixados</Title>
      <Table>
        <tr>
          <th>Tema</th>
          <th>Data</th> 
          <th>Local</th>
          <th>Relatórios</th>
        </tr>
        <tr>
          <td>Palestra da tecnologia</td>
          <td>25/08</td>
          <td>Teatro UMC</td>
          <td><Button>Gerar</Button></td>
        </tr>
      </Table>
    </Container>
    </>
  );
}