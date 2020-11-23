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
  const idPalestra = match.params.id;
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
          console.log(response);
          if (response.data.message.Participantes[0]) {
            setParticipants(response.data.message.Participantes);
            setLoading('sucess');
          } else {
            setLoading('error');
          }
         
        } catch(err) {
          if (err) {
            console.log(err.response);
            alert(err);
          }
        }
      }
     
    getParticipant();
  }, []); //eslint-disable-line

  async function handleInput(e) {
    console.log(e.target.value);
    const fkParticipante = (parseInt(e.target.value, 10));
    const data = {
      idPalestra,
      fkParticipante
    }
    try {
      const response = await Api.put('/loggedUser/lancarPresenca', data, {
        headers: headers
      });
      console.log(response);
      alert('Presença lançada com sucesso.');
    } catch(err) {
      if (err) {
        console.log(err.response.data.error);
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
          <S.Title>Para lançar as presenças, aperte no botão correspondente do participante.</S.Title>
            <Table>
              <thead>
                <tr>
                  <th width="20%">Nome</th>
                  <th width="30%">Email</th>
                  <th width="25%">Telefone</th>
                  <th width="20%">Presença</th>
                </tr>
              </thead>
              <tbody>
                {Participants.map(participant => (
                  <tr key={participant.idParticipante}>
                    <td width="20%">{participant.Nome}</td>
                    <td width="30%">{participant.Email}</td>
                    <td width="25%">{participant.Telefone}</td>
                    <td width="20%">
                      {
                        participant.Inscricoes.Presenca === false && (
                          <button 
                            value={participant.idParticipante}
                            onClick={e => handleInput(e, "value")}>
                              Lançar presença 
                          </button>
                        )
                      }
                      {
                        participant.Inscricoes.Presenca === true && (
                          <button>Participante presente.</button>
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