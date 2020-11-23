import React, { useEffect, useState } from 'react';
import Api from '../../services/api';

import StarRatings from 'react-star-ratings';

import HeaderUser from '../../components/HeaderUser';
import {Container} from '../../Styles/Container'
import {Table} from '../../Styles/Table';
import {Title, DivForm, Button } from '../../Styles/EventsList';

export default function EventsUser() {
  const [fkPalestra, setFkPalestra] = useState();
  const [rating, setRating] = useState();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState('loading');
  const Token = localStorage.getItem('token');

  const headers = {
    'Content-Type': 'application/json',
    'Authorization' : 'bearer ' + Token
  }
  
  useEffect(() => {
    async function getEvents() {
      try {
        console.log('Content-Type: ' + headers["Content-Type"] + '\nAuthorization: ' + headers.Authorization)
        const response = await Api.get(`/loggedUser/listPalestrasPresentes`, {
          headers: headers
        });
        console.log(response);
        setEvents(response.data.message.Palestras);
        setLoading('0');
      } catch(err) {
        if (err) {
          console.log(err.response);
          alert(err)
        }
      }
    }
     
    getEvents();
  }, []); //eslint-disable-line

  async function handleSubmit(e) {
    e.preventDefault();

    console.log(fkPalestra);

    if(fkPalestra === undefined) {
      return alert('Selecione um evento!');
    } else if (rating === undefined){
      return alert('Selecione uma nota!');
    }

    const Avaliacao = rating;

    const data = {
      fkPalestra,
      Avaliacao
    }

    try {
      const response = await Api.put('/loggedUser/avaliar', data, {
        headers: headers
      });
      console.log(response);
      alert("Avaliação efetuada com sucesso.");
    } catch(err) {
      if (err) {
        console.log(err.response.data.error);
        alert(err.response.data.error)
      }
    }
  }

  return (
    <>
    <HeaderUser/>
    <Container>
      
      {
        events[0] && (
          <>
            <Title>Todos seus eventos com presença.</Title>
            <Table>
              <thead>
                <tr>
                  <th width="20%">Tema</th>
                  <th width="20%">Data</th> 
                  <th width="20%">Local</th>
                  <th width="40%">Sua Avaliação</th>
                </tr>
              </thead>
              {events.map(event => (
              <tbody key={event.idPalestra}>
                <tr>
                  <td width="20%">{event.Tema}</td>
                  <td width="20%">{event.Data}</td>
                  <td width="20%">{event.locai.Nome}</td>
                  <td width="40%">
                    <StarRatings
                      rating={event.Inscricoes.Avaliacao}
                      starRatedColor="rgb(255, 204, 0)"
                      numberOfStars={5}
                      name='rating' />
                  </td>
                </tr>
              </tbody>
              ))}
            </Table>
            <Title>Selecione um evento e dê sua avaliação.</Title>
            <DivForm>
              <form onSubmit={handleSubmit}>
                <select 
                  onChange={e => setFkPalestra(parseInt(e.target.value))}
                  value={fkPalestra}>
                    <option>
                      Selecione o evento
                    </option>
                    {events.map(event => (
                    <option
                      key={event.idPalestra} 
                      value={event.idPalestra}>
                        {event.Tema}
                    </option>
                  ))};
                </select>
                <p>Nota do evento </p>
                <StarRatings
                  rating={rating}
                  starRatedColor="rgb(255, 204, 0)"
                  starHoverColor="rgb(255, 204, 0)"
                  changeRating={setRating}
                  numberOfStars={5}
                  name='ratingInput'
                />
                <br/>
                <Button>Enviar</Button>
              </form>
            </DivForm>
          </>
        )
      }
      {
      loading === 'loading' && (
            <Title>Carregando ...</Title>
      )
      }
      {
        !events[0] && loading === '0' && (
          <Title>Você não tem presença em nenhum evento.</Title>
        ) 
      }
      <br/>
      <br/> 
    </Container>
</>
  );
}