import React from 'react';
import { Button, Title } from '../../Styles/Logon';
import { Row, Col25, Col75, ContainerC } from '../../Styles/NewEvent';
import {Container} from '../../Styles/Container'
import Header from '../../components/HeaderAdm';

export default function NewAdm() {
  return(
    <>
    <Header/>
    <Container>
    <Title>Digite os dados do coordenador e clique em confirmar.</Title>
        <ContainerC>
        <form>
          <Row>
            <Col25>
              <label>Nome</label>
            </Col25>
            <Col75>
              <input type="text" placeholder="Nome Coordenador"/>
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>CPF</label>
            </Col25>
            <Col75>
            <input type="text" name="cpf" placeholder="CPF"/>
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Email</label>
            </Col25>
            <Col75>
              <input type="email" placeholder="Email"/>
            </Col75>
          </Row>
          <Row>
            <Col25><label>Senha</label></Col25>
            <Col75><input type="password" placeholder="Senha"/></Col75>
          </Row>
          <Row>
            <Col25>
              <label>Telefone</label>
            </Col25>
            <Col75>
            <input type="tel" placeholder="Telefone" required="required"  />
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Curso</label>
            </Col25>
            <Col75>
             <input type="text" placeholder="Curso" />
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