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
        <S.Title>Eventos disponiveis</S.Title>
          
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
                <strong>Local: </strong> {event.Local}
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

              <S.Button onClick={async () => {
                let fkPalestra = event.idPalestra;
                const Presenca = false;
                const Avaliacao = 0;
                try {
                  const response = await Api.post('/loggedUser/inscrever', { fkPalestra, Presenca, Avaliacao  }, {
                    headers: headers
                  });
                  if (response.status === 201) {
                    console.log(response);
                    alert("Cadastro efetuado com sucesso, use seu email e senha para logar.");
                  }
                } catch(err) {
                  if (err) {
                    console.log(err.response.data.error);
                    alert(err.response.data.error)
                  }
                }
              
              }}>
                Inscrever-se
              </S.Button>
            </S.Event>
               ))};
          </S.List>
     

      </Container>
    </>
  );
}