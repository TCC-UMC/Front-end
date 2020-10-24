import React, { useState, useEffect } from 'react';
import Api from '../../services/api';
import { history } from '../../services/history';

import { Button, Title } from '../../Styles/Logon';
import { Row, Col25, Col75, ContainerC } from '../../Styles/NewEvent';
import {Container} from '../../Styles/Container'
import Header from '../../components/HeaderCoord';

export default function NewEvent() {
  const [palestrantes, setPalestrantes] = useState([]);
  const [Descricao, setDescricao] = useState('');
  const [Local, setLocal] = useState('');
  const [CapMax, setCapMax] = useState('');
  const [HorarioInicio, setHoraInicio] = useState('');
  const [HorarioTermino, setHoraTermino] = useState('');
  const [fkPalestrante, setPalestrante] = useState('');
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

  async function handleRegister(e) {
    e.preventDefault();
  
    const data = {
      Descricao,
      Local,
      CapMax,
      HorarioInicio,
      HorarioTermino,
      fkPalestrante,
      Data,
    };
  
    try {
      console.log(data);
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
        console.log(err.response.data.error);
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
              <label>Descrição</label>
            </Col25>
            <Col75>
              <input
                value={Descricao} 
                onChange={e => setDescricao(e.target.value)}
                type="text"
                placeholder="Tema ou Titulo do evento" 
                required="required"/>
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Local</label>
            </Col25>
            <Col75>
              <input 
                value={Local} 
                onChange={e => setLocal(e.target.value)}
                type="text" 
                placeholder="Local" 
                required="required"/>
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Capacidade máxima</label>
            </Col25>
            <Col75>
              <input 
                value={CapMax} 
                onChange={e => setCapMax(e.target.value)}
                type="number" 
                placeholder="Capacidade máxima" 
                required="required"/>
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Palestrante</label>
            </Col25>
            <Col75>
            
              <select 
                onChange={e => setPalestrante(e.target.value)}
                value={fkPalestrante}>
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
                type="date" 
                required="required" 
                maxlength="10" 
                name="date" 
                pattern="[0-9]{2}\/[0-9]{2}\/[0-9]{4}$" 
               />
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Horario do Inicio</label>
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
              <label>Horario do Términio</label>
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