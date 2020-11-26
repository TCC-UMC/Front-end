import React, { useEffect, useState } from 'react';
import Api from '../../services/api';

import { Container } from '../../Styles/Container';
import Header from '../../components/HeaderCoord';
import * as S from '../../Styles/EventsList';

export default function HomeCoord() {  
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState('loading');
  const token = localStorage.getItem('token');

  const headers = {
    'Content-Type': 'application/json',
    'Authorization' : 'bearer ' + token
  }
  
  useEffect(() => {
    async function getEvents() {
        try {
          const response = await Api.get('/loggedUser/PalestrasCoord', {
            headers: headers
          });
          console.log(response);
          setLoading('0');
          setEvents(response.data.message);
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
      events[0] && (
        <>
          <Header/>
          <Container>
            <S.Title>Eventos cadastrados por você</S.Title>
            <S.List >
            {events.map(event => (
              <S.Event key={event.idPalestra}>
              <S.DateTime>
                  {event.Data}
                </S.DateTime>
                <S.TitleDiv>
                {event.Tema}
                </S.TitleDiv>
                <S.Venue>
                  <strong>Local: </strong> {event.locai.Nome}
                  <br/>
                  <strong>Capacidade máxima </strong> {event.CapMax}
                </S.Venue>
                <S.Venue>
                  <strong>Inicio: </strong> {event.HorarioInicio}
                  <br/>
                  <strong>Termino: </strong> {event.HorarioTermino}
                </S.Venue>
                <S.Venue>
                  <strong>Palestrante: </strong> {event.Palestrante.Nome}
                </S.Venue>
                <S.LinkBlue to={`/evento/${event.idPalestra}`}>
                  Acessar
                </S.LinkBlue>
              </S.Event>
              ))}
            </S.List>
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
            <S.Title>Carregando ...</S.Title>
          </Container>
        </>
      )
    }

    {
      !events[0] && loading === '0' && (
        <>
          <Header/>
          <Container>
            <br/>
            <br/>
            <S.Title>Você ainda não cadastrou nenhum evento.</S.Title>
          </Container>
        </>
      )
    }

    </>
  );
}