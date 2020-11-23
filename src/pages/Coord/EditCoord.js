import React, {useState} from 'react';
import Api from '../../services/api';

import HeaderCoord from '../../components/HeaderCoord';

import {Container} from '../../Styles/Container'
import {Title, Button } from '../../Styles/EventsList';
import { Row, Col25, Col75, ContainerC } from '../../Styles/NewEvent';

export default function EditCoord() {
  const [Email, setEmail] = useState('');
  const [Telefone, setTelefone] = useState('');
  const [CursoCoord, setCursoCoord] = useState('');
  const [Data, setData] = useState({});

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'bearer ' + localStorage.getItem('token')
  }

  function setSubmitData(e) {
    var {value, name} = e.target;
    if((value.trim() ==='') || (value.length===0)) {
      delete Data.name;
      if (name === 'Telefone') {
        delete Data.Telefone;
        setTelefone('');
      } 
      if (name === 'Email') {
        delete Data.Email;
        setEmail('');
      } 
      if (name === 'CursoCoord') {
        delete Data.CursoCoord;
        setCursoCoord('');
      } 
    }
    else {
      if (name === 'Telefone') {
        setData(e => setData({...Data, Telefone: value}));
        setTelefone(value);
      } 
      if (name === 'Email') {
        setData(e => setData({...Data, Email: value}));
        setEmail(value);
      } 
      if (name === 'CursoCoord') {
        setData(e => setData({...Data, CursoCoord: value}));
        setCursoCoord(value);
      } 
    }
    console.log(name)
    console.log(value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (typeof Data === 'object' && Object.keys(Data).length === 0) {
      return alert('Você não escreveu nada!');
    }
    try {
      const response = await Api.put('/loggedUser/updateCoord', Data, {
        headers: headers
      });
      console.log(response);
      alert('Alterado com sucesso!');
    } catch(err) {
      if (err) {
        console.log(err.response.data.error);
        alert(err.response.data.error)
      }
    }
  }

  return (
    <>
    <HeaderCoord/>
    <Container>
      <Title>Dados que você pode alterar.</Title>
      <ContainerC>
        <form onSubmit={handleSubmit}>
         <Row>
            <Col25>
              <label>Email</label>
            </Col25>
            <Col75>
              <input type="email"
                name="Email"
                placeholder="Email"
                value={Email}
                onChange={setSubmitData} />
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Telefone</label>
            </Col25>
            <Col75>
            <input type="text" 
              name="Telefone"
              placeholder="Celular: (99) 9999-9999"
              value={Telefone}
              onChange={setSubmitData} />
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Curso</label>
            </Col25>
            <Col75>
             <input type="text" 
              name="CursoCoord"
              placeholder="Curso"
              value={CursoCoord}
              onChange={setSubmitData}/>
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