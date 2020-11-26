import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

import Api from '../../services/api';

import StarRatings from 'react-star-ratings';

import Header from '../../components/HeaderCoord';

import { Button } from '../../Styles/Logon';
import { Container } from '../../Styles/Container';
import {Title} from '../../Styles/EventsList';
import {Table} from '../../Styles/Table'

export default function Report({ match }) {
  const idPalestra = match.params.id;
  const [event, setEvents] = useState();
  const [participants, setParticipants] = useState();
  const [loading, setLoading] = useState('loading');
  const token = localStorage.getItem('token');

  const headers = {
    'Content-Type': 'application/json',
    'Authorization' : 'bearer ' + token
  }
  
  useEffect(() => {
    async function getEvents() {
        try {
          const response = await Api.get(`/loggedUser/relatorioPalestra/${idPalestra}`, {
            headers: headers
          });
          console.log(response.data);
          if (response.data.message[0]) {
            setEvents(response.data.message[0]);
            setParticipants(response.data.message[0].inscricoes.rows[0].Participantes);
            setLoading('0');
          } 
        } catch(err) {
          if (err) {
            console.log(err.response.data.error);
            alert(err.response.data.error)
          }
        }
      }
     
    getEvents();
  }, []); //eslint-disable-line



  return (
  <>
  {
    loading === '0' && (
    <>
      <Header/>
      <Container>
        <Title>Sobre o evento</Title>
        <Table>
          <thead>
            <tr>
              <th width="20%">Data</th>
              <th width="20%">Local</th> 
              <th width="20%">Inscritos</th>
              <th width="40%">Média das notas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width="20%">{event.inscricoes.rows[0].Data}</td>
              <td width="20%">{event.inscricoes.rows[0].locai.Nome}</td>
              <td width="20%">{event.inscricoes.count}</td>
                {event.media === null && (
                  <td width="40%">Sem avaliações</td>
                )}
                {event.media > 0 && (
                  <td width="40%">
                    <StarRatings
                        rating={event.media}
                        starRatedColor="rgb(255, 204, 0)"
                        numberOfStars={5}
                        starDimension={'20px'}
                        name='rating'/>
                  </td>
                )}
            </tr>
          </tbody>
        </Table>
        <br/>
        <br/>
        <Title>Inscritos</Title>
        <Table>
          <thead>
            <tr>
              <th width="40%">Nome</th>
              <th width="20%">Presença</th>
              <th width="40%">Avaliação</th>
            </tr>
          </thead>
          <tbody>
          {participants.map(participant =>(
            <tr key={participant.Email}>
              <td width="40%">{participant.Nome}</td>
              {participant.Inscricoes.Presenca === true && (
                <>
                  <td width="20%">Sim</td>
                  {participant.Inscricoes.Avaliacao === 0 && (
                    <td width="40%">Não avaliou</td>
                  )}
                  {participant.Inscricoes.Avaliacao > 0 && (
                    <td width="40%">
                      <StarRatings
                        rating={participant.Inscricoes.Avaliacao}
                        starRatedColor="rgb(255, 204, 0)"
                        numberOfStars={5}
                        starDimension={'20px'}
                        name='rating'/>
                    </td>
                  )}
                </>
              )}
              {participant.Inscricoes.Presenca === false && (
                <>
                  <td width="20%">Não</td>
                  <td width="40%">Não pode avaliar</td>
                </>
              )}
            </tr>
          ))}
          </tbody>
        </Table>
        <Title>
          <Link to={`/evento/${idPalestra}`} className="decoration-none ">
            <Button>Voltar</Button>
          </Link>
        </Title>
      </Container>  
    </>
    )
  }
  
  {
      loading === 'loading' && (
        <>
          <Header/>
          <Container>
            <br/>
            <br/>
            <Title>Carregando ...</Title>
          </Container>
        </>
      )
    }

  </>
  );
}