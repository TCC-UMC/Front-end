import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import Api from '../../services/api';

import * as S from '../../Styles/EventsList';
import { Button } from '../../Styles/Logon';
import { Container } from '../../Styles/Container';
import {Table} from '../../Styles/Table';
import {Row} from '../../Styles/NewEvent';

import HeaderCoord from '../../components/HeaderCoord';

export default function LaunchPresence({ match }) {
  const idPalestra = (parseInt(match.params.id, 10));
  const [Participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState('loading');

  const headers = {
    'Content-Type': 'application/json',
    'Authorization' : 'bearer ' + localStorage.getItem('token')
  }
 
  useEffect(() => {
    async function getParticipant() {
        try {
          const response = await Api.get(`/loggedUser/listInscricoesPalestra/${idPalestra}`, {
            headers: headers
          });
          if (response.data.message.Participantes[0]) {
            setParticipants(response.data.message.Participantes);
            setLoading('sucess');
          } else {
            setLoading('error');
          }
         
        } catch(err) {
          if (err) {
            alert(err);
          }
        }
      }
     
    getParticipant();
  }, []); //eslint-disable-line

  async function handleInput(e) {
    const fkParticipante = (parseInt(e.target.value, 10));
    const data = {
      idPalestra,
      fkParticipante
    }
    try {
      const response = await Api.put('/loggedUser/lancarPresenca', data, {
        headers: headers
      });
      if (response.status === 200) {
        alert('Presença lançada com sucesso.');
        gerarCertificado(fkParticipante)
      }
      
    } catch(err) {
      if (err) {
        alert(err.response.data.error);
      }
    }
  }

  async function gerarCertificado(idParticipante) {
    const data = {
      idPalestra
    }
    try {
      const response = await Api.post(`/loggedUser/gerarCertificado/${idParticipante}`, data, {
        headers: headers
      });
      if (response.status === 200) {
        alert('Certificado lançado');
      }
      
    } catch(err) {
      if (err) {
        alert(err.response.data.error);
      }
    }

  }

  function Loading() {
    return(
        <Container>
          <S.Title>Carregando ...</S.Title>
        </Container>
    );
  }

  function Err() {
    return(
      <>
        <HeaderCoord />
        <Container>
          <S.Title>Ninguém se inscreveu para essa palestra ainda.</S.Title>
          <Row>
            <Link to={`/evento/${idPalestra}`} className="decoration-none ">
              <Button>Voltar</Button>
            </Link>
          </Row>
        </Container>
      </>

    );
  }

  function Sucess(){
    return (
      <>
        <HeaderCoord />
        <Container>
          <S.Title>Aperte o botão correspondente de algum participante.</S.Title>
            <Table>
              <thead>
                <tr>
                  <th width="40%">Nome</th>
                  <th width="40%">Email</th>
                  <th width="20%">Presença</th>
                </tr>
              </thead>
              <tbody>
                {Participants.map(participant => (
                  <tr key={participant.idParticipante}>
                    <td width="30%">{participant.Nome}</td>
                    <td width="45%">{participant.Email}</td>
                    <td width="25%">
                      {
                        participant.Inscricoes.Presenca === false && (
                          <button 
                            value={participant.idParticipante}
                            onClick={e => handleInput(e, "value")}>
                              Lançar
                          </button>
                        )
                      }
                      {
                        participant.Inscricoes.Presenca === true && (
                          <button>Presente</button>
                        )
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Row>
              <Link to={`/evento/${idPalestra}`} className="decoration-none ">
                <Button>Voltar</Button>
              </Link>
            </Row>
        </Container>
      </>
    )
  }
  
  return (
    <>
      {loading === "loading" && (Loading())}
      {loading === "error" && (Err())}
      {loading === "sucess" && (Sucess())}
    </>
  );
}