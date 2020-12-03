import React, { useState } from 'react';
import Api from '../../services/api';
import { history } from '../../services/history';

import { Button, Title } from '../../Styles/Logon';
import { Row, Col25, Col75, ContainerC } from '../../Styles/NewEvent';
import {Container} from '../../Styles/Container'
import Header from '../../components/HeaderAdm';

export default function NewAdm() {
  const [Nome, setNome] = useState('');
  const [CPF, setCPF] = useState('');
  const [Telefone, setTelefone] = useState('');
  const [Email, setEmail] = useState('');
  const [Senha, setSenha] = useState('');
  const [CursoCoord, setCursoCoord] = useState('');

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
      Senha,
      CursoCoord,
    };
  
    try {
      const response = await Api.post('/loggedUser/registerCoord', data, {
        headers: headers
      });
      
      if (response.status === 201) {
        alert("Coordenador cadastrado com sucesso.");
        return history.push('/coordenadores');
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
    <Title>Digite os dados do coordenador e clique em confirmar.</Title>
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
                placeholder="Nome do Coordenador"
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
              name="cpf" 
              title="Número de telefone precisa ser no formato xxx.xxx.xxx-xx" 
              placeholder="CPF: (xxx.xxx.xxx-xx)"
              pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" 
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
              <label>Senha</label></Col25>
            <Col75>
              <input
                value={Senha} 
                onChange={e => setSenha(e.target.value)}
                type="password" 
                placeholder="Senha"
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
              required="required" />
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Curso</label>
            </Col25>
            <Col75>
             <input
              value={CursoCoord} 
              onChange={e => setCursoCoord(e.target.value)}
              type="text" 
              placeholder="Curso" 
              required="required"/>
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