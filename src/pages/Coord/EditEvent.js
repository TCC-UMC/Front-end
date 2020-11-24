import React, { useEffect, useState } from 'react';
import Api from '../../services/api';
import {Link} from 'react-router-dom';
import { history } from '../../services/history';

import { Container } from '../../Styles/Container'
import {Title, Button } from '../../Styles/EventsList';
import { Row, Col25, Col75, ContainerC } from '../../Styles/NewEvent';

import HeaderCoord from '../../components/HeaderCoord';

export default function EditEvent({ match }) {
  const idPalestra = match.params.id;

  const [Tema, setTema] = useState('');
  const [Descricao, setDescricao] = useState('');
  const [CapMax, setCapMax] = useState('');
  const [HorarioInicio, setHorarioInicio] = useState('');
  const [HorarioTermino, setHorarioTermino] = useState('');
  const [fkLocais, setLocal] = useState();
  const [locais, setLocais] = useState([]);
  const [Event, setEvent] = useState({});
  const [Data, setData] = useState('');
  const [data, setdata] = useState({});

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'bearer ' + localStorage.getItem('token')
  }

  useEffect(() => {
    async function getEvent() {
        try {
          const response = await Api.get(`/loggedUser/listPalestras/${idPalestra}`, {
            headers: headers
          });
          console.log(response);
          setEvent(response.data.message[0]);
          console.log(Event);
          const date = response.data.message[0].Data;
          var dia  = date.split("/")[0];
          var mes  = date.split("/")[1];
          var ano  = date.split("/")[2];
          const dat = ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
          setdata(e => setdata({...data, 
            idPalestra: idPalestra,
            fkLocais: response.data.message[0].fkLocais,
            Data: dat,
            HorarioInicio: response.data.message[0].HorarioInicio,
            HorarioTermino: response.data.message[0].HorarioTermino,
          }));
        } catch(err) {
          if (err) {
            console.log(err.response.data.error);
            alert(err.response.data.error)
          }
        }
      }
     
    getEvent();
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

  function setSubmitdata(e) {
    var {value, name} = e.target;
    if((value.trim() ==='') || (value.length===0)) {
      delete data.name;
      if (name === 'Descricao') {
        delete data.Descricao;
        setDescricao('');
      } 
      if (name === 'Tema') {
        delete data.Tema;
        setTema('');
      } 
      if (name === 'HorarioInicio') {
        setHorarioInicio('');
      } 
      if (name === 'HorarioTermino') {
        setHorarioTermino('');
      }
      if (name === 'CapMax') {
        delete data.CapMax;
        setCapMax('');
      }
      if (name === 'Data') {
        setData('');
      }
      if (name === 'Local') {
        setLocal('');
      }
    }
    else {
      if (name === 'Descricao') {
        setdata(e => setdata({...data, Descricao: value}));
        setDescricao(value);
      } 
      if (name === 'Tema') {
        setdata(e => setdata({...data, Tema: value}));
        setTema(value);
      } 
      if (name === 'HorarioInicio') {
        setdata(e => setdata({...data, HorarioInicio: value}));
        setHorarioInicio(value);
      }
      if (name === 'HorarioTermino') {
        setdata(e => setdata({...data, HorarioTermino: value}));
        setHorarioTermino(value);
      }
      if (name === 'CapMax') {
        setdata(e => setdata({...data, CapMax: value}));
        setCapMax(value);
      }
      if (name === 'Data') {
        setdata(e => setdata({...data, Data: value}));
        setData(value);
      }
      if (name === 'Local') {
        setdata(e => setdata({...data, fkLocais: value}));
        setLocal(value);
      }
    }
    console.log(name)
    console.log(value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (typeof data === 'object' && Object.keys(data).length === 0) {
      return alert('Você não escreveu nada!');
    }
    console.log(data);
    try {
      const response = await Api.put('/loggedUser/updatePalestra', data, {
        headers: headers
      });
      console.log(response);
      alert('Alterado com sucesso!');
      return history.push(`/event/${idPalestra}`);
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
      <Title>Dados que você pode alterar</Title>
      <ContainerC>
      <form onSubmit={handleSubmit}>
         <Row>
            <Col25>
              <label>Tema</label>
            </Col25>
            <Col75>
              <input type="text"
                name="Tema"
                placeholder='Tema'
                value={Tema}
                onChange={setSubmitdata} />
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Descrição</label>
            </Col25>
            <Col75>
              <input type="text"
                name="Descricao"
                placeholder='Descricao'
                value={Descricao}
                onChange={setSubmitdata} />
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Local</label>
            </Col25>
            <Col75>
              <select
                onChange={setSubmitdata}
                name="Local"
                value={fkLocais}>
               
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
              <label>Capacidade máxima</label>
            </Col25>
            <Col75>
              <input type="number"
                name="CapMax"
                placeholder='Capacidade máxima'
                value={CapMax}
                onChange={setSubmitdata} />
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Data</label>
            </Col25>
            <Col75>
              <input type="text"
                placeholder='yyyy/mm/dd'
                pattern='[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])'
                name="Data"
                value={Data}
                onChange={setSubmitdata} />
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Horário de Inicio</label>
            </Col25>
            <Col75>
              <input type="time"
                name="HorarioInicio"
                placeholder='Horario de Inicio'
                value={HorarioInicio}
                onChange={setSubmitdata} />
            </Col75>
          </Row>
          <Row>
            <Col25>
              <label>Horário de Termino</label>
            </Col25>
            <Col75>
              <input type="time"
                name="HorarioTermino"
                placeholder='Horario de Termino'
                value={HorarioTermino}
                onChange={setSubmitdata} />
            </Col75>
          </Row>
          <Row>
            <Link to={`/evento/${idPalestra}`} className="decoration-none ">
              <Button>Voltar</Button>
            </Link>
            <Button type="submit" buttonColor="#008037">Confirmar</Button>
          </Row>
        </form>
        </ContainerC>
    </Container>
</>
  );
}