import React, { useEffect, useState } from 'react';
import Api from '../../services/api';
 
import * as S from '../../Styles/EventsList';
import { Container } from '../../Styles/Container';
import Header from '../../components/HeaderUser';

export default function EventsList() {
  const [events, setEvents] = useState([]);
  const token = localStorage.getItem('token');

  const headers = {
    'Content-Type': 'application/json',
    'Authorization' : 'bearer ' + token
  }
  
  useEffect(() => {
    async function getEvents() {
        try {
          const response = await Api.get('/loggedUser/listPalestras', {
            headers: headers
          });
          console.log(response);
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
    <Header/>
      <Container>
        <S.Title>Todos eventos</S.Title>
          <S.List >
          {events.map(event => (
           <S.Event key={event.idPalestra}>
            <S.DateTime>
                {event.Data}
              </S.DateTime>
              <S.TitleDiv>
               {event.Descricao}
              </S.TitleDiv>
              <S.Venue>
                <strong>Local: </strong> {event.NomeLocal}
                <br/>
                <strong>Capaxidade máxima </strong> {event.CapMax}
              </S.Venue>
              <S.Venue>
                <strong>Inicio: </strong> {event.HorarioInicio}
                <br/>
                <strong>Termino: </strong> {event.HorarioTermino}
              </S.Venue>
              <S.Venue>
                <strong>Palestrante: </strong> {event.NomePalestrante}
              </S.Venue>
              <S.LinkBlue to={`/evento/${event.idPalestra}`}>
                Acessar
              </S.LinkBlue>
            </S.Event>
               ))}
          </S.List>
     

      </Container>
    </>
  );
}