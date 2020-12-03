import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Api from '../../services/api';
import { history } from '../../services/history';

import Header from '../../components/HeaderCoord';

import { Button, Title } from '../../Styles/Logon';
import { Row, Col25, Col75, ContainerC } from '../../Styles/NewEvent';
import {Container} from '../../Styles/Container'


export default function NewPanelist() {
  const [Nome, setNome] = useState('');
  const [CPF, setCPF] = useState('');
  const [Telefone, setTelefone] = useState('');
  const [Email, setEmail] = useState('');
  const [Curriculo, setCurriculo] = useState('');

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'bearer ' + localStorage.getItem('token')
  }

  async function handleRegister(e) {
    e.preventDefault();
  
    const data = {
      Nome,
      CPF,
      Telefone,
      Email,
      Curriculo,
    };
  
    try {
      const response = await Api.post('/loggedUser/registerPalestrante', data, {
        headers: headers
      });
      if (response.status === 201) {
        alert("Palestrante cadastrado com sucesso.");
        return history.push('/palestrantes');
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
    <Title>Digite os dados do palestrante e clique em confirmar.</Title>
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
                placeholder="Nome Palestrante"
                required="required"/>
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Email</label>
            </Col25>
            <Col75>
              <input
                value={Email} 
                onChange={e => setEmail(e.target.value)}
                type="email" 
                placeholder="Email"
                required="required"/>
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Telefone</label>
            </Col25>
            <Col75>
            <input
              value={Telefone} 
              onChange={e => setTelefone(e.target.value)}
              type="tel" 
              placeholder="Telefone" 
              required="required"/>
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>CPF</label>
            </Col25>
            <Col75>
            <input
              value={CPF} 
              onChange={e => setCPF(e.target.value)}
              type="text" 
              title="Número de CPF precisa ser no formato xxx.xxx.xxx-xx" 
              placeholder="CPF: (xxx.xxx.xxx-xx)"
              pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
              required="required"/>
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Curriculo</label>
            </Col25>
            <Col75>
              <textarea
                value={Curriculo} 
                onChange={e => setCurriculo(e.target.value)}
                name="descricao" 
                id="CV" 
                rows="10"/>
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