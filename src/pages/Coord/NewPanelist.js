import React from 'react';
import { Button, Title } from '../../Styles/Logon';
import { Row, Col25, Col75, ContainerC } from '../../Styles/NewEvent';
import {Container} from '../../Styles/Container'
import Header from '../../components/HeaderCoord';
import {Link} from 'react-router-dom'

export default function NewPanelist() {
  return(
    <>
    <Header/>
    <Container>
    <Title>Digite os dados do palestrante e clique em confirmar.</Title>
        <ContainerC>
        <form>
          <Row>
            <Col25>
              <label>Nome</label>
            </Col25>
            <Col75>
              <input type="text" placeholder="Nome Palestrante"/>
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
            <Col25>
              <label>Telefone</label>
            </Col25>
            <Col75>
            <input type="tel" placeholder="Telefone" required="required"  />
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
              <label>Informações/Curriculo</label>
            </Col25>
            <Col75>
              <textarea name="descricao" id=""  rows="10"/>
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Data de nascimento</label>
            </Col25>
            <Col75>
              <input type="date" required="required" maxlength="10" name="date" 
                pattern="[0-9]{2}\/[0-9]{2}\/[0-9]{4}$" min="1920-01-01" max="2010-01-01" />
            </Col75>
          </Row>
          <Row>
            <Link to="/palestrantes" className="decoration-none ">
              <Button>Voltar</Button>
            </Link>
            
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