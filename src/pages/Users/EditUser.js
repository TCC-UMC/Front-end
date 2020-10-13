import React from 'react';
import HeaderUser from '../../components/HeaderUser';
import {Container} from '../../Styles/Container'
import {Title, Button } from '../../Styles/EventsList';
import { Row, Col25, Col75, ContainerC } from '../../Styles/NewEvent';

export default function EditUser() {
  return (
    <>
    <HeaderUser/>
    <Container>
      <Title>Dados que você pode alterar</Title>
      <ContainerC>
        <form>
         <Row>
            <Col25>
              <label>Email</label>
            </Col25>
            <Col75>
              <input type="email" placeholder="Email"/>
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Telefone</label>
            </Col25>
            <Col75>
            <input type="tel" placeholder="Telefone"/>
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Curso</label>
            </Col25>
            <Col75>
             <input type="text" placeholder="Curso"/>
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Profissão</label>
            </Col25>
            <Col75>
             <input type="text" placeholder="Profissao"/>
            </Col75>
          </Row>
          <Row>
            <Button buttonColor="#008037">Confirmar</Button>
          </Row>
        </form>
        </ContainerC>
    </Container>
</>
  );
}