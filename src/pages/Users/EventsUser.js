import React from 'react';
import HeaderUser from '../../components/HeaderUser';
import {Container} from '../../Styles/Container'
import {Table} from '../../Styles/Table';
import {Title, DivForm, Button } from '../../Styles/EventsList';
import Star from '../../img/star-rating.png';

export default function EventsUser() {
  return (
    <>
    <HeaderUser/>
    <Container>
      <Title>Todos seus eventos com presença</Title>
      <Table>
        <tr>
          <th>Tema</th>
          <th>Data</th> 
          <th>Local</th>
          <th>Sua Avaliação</th>
        </tr>
        <tr>
          <td>Palestra da tecnologia</td>
          <td>25/08</td>
          <td>Teatro UMC</td>
          <td><img width="100px" src={Star} alt=""/></td>
        </tr>
      </Table>
      <br/>
      <br/> 
      <Title>Selecione um evento e dê sua avaliação.</Title>
      <DivForm>
        <form>
          <select>
            <option>Selecione o evento</option>
          </select>
          <p>Nota do evento </p>
          <img width="200px" src={Star} alt=""/>
          <br/>
          <Button>Enviar</Button>
        </form>
      </DivForm>
    </Container>
</>
  );
}