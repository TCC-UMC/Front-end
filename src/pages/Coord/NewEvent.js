import React, { useState, useEffect } from 'react';
import Api from '../../services/api';
import { history } from '../../services/history';

import { Button, Title } from '../../Styles/Logon';
import { Row, Col25, Col75, ContainerC } from '../../Styles/NewEvent';
import {Container} from '../../Styles/Container'
import Header from '../../components/HeaderCoord';

export default function NewEvent() {
  const [palestrantes, setPalestrantes] = useState([]);
  const [locais, setLocais] = useState([0]);
  const [Descricao, setDescricao] = useState('');
  const [Tema, setTema] = useState('');
  const [fkLocais, setLocal] = useState();
  const [CapMax, setCapMax] = useState(0);
  const [HorarioInicio, setHoraInicio] = useState('');
  const [HorarioTermino, setHoraTermino] = useState('');
  const [fkPalestrante, setPalestrante] = useState(0);
  const [Data, setData] = useState('');

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'bearer ' + localStorage.getItem('token')
  }

  useEffect(() => {
    async function getPalestrantes() {
        try {
          const response = await Api.get('/loggedUser/listPalestrantes', {
            headers: headers
          });
          console.log(response);
          setPalestrantes(response.data.message);
        } catch(err) {
          if (err) {
            console.log(err.response.data.error);
            alert(err.response.data.error)
          }
        }
      }
     
    getPalestrantes();
  }, []); //eslint-disable-line

  useEffect(() => {
    async function getLocais() {
        try {
          const response = await Api.get('/loggedUser/listLocais', {
            headers: headers
          });
          console.log(response);
          setLocais(response.data.message);
        } catch(err) {
          if (err) {
            console.log(err.response.data.error);
            alert(err.response.data.error)
          }
        }
      }
     
    getLocais();
  }, []); //eslint-disable-line

  async function handleRegister(e) {
    e.preventDefault();
   
    const data = {
      Tema,
      Descricao,
      fkLocais,
      CapMax,
      HorarioInicio,
      HorarioTermino,
      fkPalestrante,
      Data,
    };
  
    try {
      console.log(data.Data);
      console.log(typeof(data.HorarioInicio));
      console.log(typeof(data.HorarioTermino));
      console.log(typeof(data.fkLocais));
      console.log("Isso aqui >" + data);
      const response = await Api.post('/loggedUser/registerPalestra', data, {
        headers: headers
      });
      
      if (response.status === 201) {
        console.log(response);
        alert("Evento cadastrado com sucesso.");
        return history.push('/meus-eventos');
      }
    } catch(err) {
      if (err) {
        console.log(err.response);
        alert(err.response.data.error)
      }
    }
  }

  return(
    <>
    <Header/>
    <Container>
    <Title>Digite as informações do evento e clique em confirmar.</Title>
        <ContainerC>
        <form onSubmit={handleRegister}>
        <Row>
            <Col25>
              <label>Tema</label>
            </Col25>
            <Col75>
              <input
                value={Tema} 
                onChange={e => setTema(e.target.value)}
                type="text"
                placeholder="Tema do evento" 
                required="required"/>
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Descrição</label>
            </Col25>
            <Col75>
              <textarea
                value={Descricao} 
                onChange={e => setDescricao(e.target.value)}
                id="desc" 
                rows="10"
                placeholder="Descricao do evento" 
                required="required"/>
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Capacidade</label>
            </Col25>
            <Col75>
              <input 
                value={CapMax} 
                onChange={e => setCapMax(parseInt(e.target.value))}
                type="number"
                placeholder="Capacidade máxima" 
                required="required"/>
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Local</label>
            </Col25>
            <Col75>
              <select
                onChange={e => setLocal(parseInt(e.target.value))}
                value={fkLocais} >
                <option>Local</option>
                {locais.map(local => (
                  <option
                    key={local.idLocal} 
                    value={local.idLocal}>
                    {local.Nome}
                  </option>
                ))};
              </select>
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Palestrante</label>
            </Col25>
            <Col75>
              <select 
                onChange={e => setPalestrante(parseInt(e.target.value))}
                value={fkPalestrante}>
                <option>Palestrante</option>
                {palestrantes.map(palestrante => (
                  <option
                    key={palestrante.idPalestrante} 
                    value={palestrante.idPalestrante}>
                    {palestrante.Nome}
                  </option>
                ))};
              </select>
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Data</label>
            </Col25>
            <Col75>
              <input 
                value={Data} 
                onChange={e => setData(e.target.value)}
                placeholder='yyyy-mm-dd'
                type="text"
                pattern='[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])'
                required="required"
               />
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Inicio</label>
            </Col25>
            <Col75>
              <input 
                value={HorarioInicio} 
                onChange={e => setHoraInicio(e.target.value)}
                type="time" 
                name="time" 
                required="required"/>
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Término</label>
            </Col25>
            <Col75>
              <input 
                value={HorarioTermino} 
                onChange={e => setHoraTermino(e.target.value)}
                type="time" 
                name="time" 
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