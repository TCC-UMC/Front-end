import React from 'react';
import { Button, Title } from '../../Styles/Logon';
import { Row, Col25, Col75, ContainerC } from '../../Styles/NewEvent';
import {Container} from '../../Styles/Container'
import Header from '../../components/HeaderCoord';

export default function NewEvent() {
  return(
    <>
    <Header/>
    <Container>
    <Title>Digite as informações do evento e clique em confirmar.</Title>
        <ContainerC>
        <form>
          <Row>
            <Col25>
              <label>Tema</label>
            </Col25>
            <Col75>
              <input type="text" placeholder="Tema ou Titulo do evento"/>
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Local</label>
            </Col25>
            <Col75>
              <input type="text" placeholder="Local"/>
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Palestrante</label>
            </Col25>
            <Col75>
              <select>
                <option value="default">Palestrante</option>
                <option value="fulano">Fulano</option>
              </select>
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Data</label>
            </Col25>
            <Col75>
              <input type="date" required="required" maxlength="10" name="date" 
                pattern="[0-9]{2}\/[0-9]{2}\/[0-9]{4}$" min="1920-01-01" max="2010-01-01" />
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Horario Inicio</label>
            </Col25>
            <Col75>
              <input type="time" name="time" />
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Horario Fim</label>
            </Col25>
            <Col75>
              <input type="time" name="time" />
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