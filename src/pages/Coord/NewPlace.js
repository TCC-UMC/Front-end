import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Api from '../../services/api';
import { history } from '../../services/history';

import Header from '../../components/HeaderCoord';

import { Button, Title } from '../../Styles/Logon';
import { Row, Col25, Col75, ContainerC } from '../../Styles/NewEvent';
import {Container} from '../../Styles/Container'


export default function NewPlace() {
  const [Nome, setNome] = useState('');
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'bearer ' + localStorage.getItem('token')
  }

  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      Nome
    };
  
    try {
      const response = await Api.post('/loggedUser/registerLocal', data, {
        headers: headers
      });
      if (response.status === 201) {
        alert("Local cadastrado com sucesso.");
        return history.push('/locais');
      }
    } catch(err) {
      if (err) {
        alert(err.response.data.error)
      }
    }
  }

  return(
    <>
    <Header/>
    <Container>
    <Title>Digite os dados do local e clique em confirmar.</Title>
        <ContainerC>
        <form onSubmit={handleRegister}>
          <Row>
            <Col25>
              <label>Nome</label>
            </Col25>
            <Col75>
              <input
                value={Nome} 
                onChange={e => setNome(e.target.value)}
                type="text" 
                placeholder="Nome do Local"
                required="required"/>
            </Col75>
          </Row>
          <Row>
            <Link to="/locais" className="decoration-none ">
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