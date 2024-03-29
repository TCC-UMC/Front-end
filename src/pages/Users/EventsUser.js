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
        const response = await Api.get(`/loggedUser/listPalestrasPresentes`, {
          headers: headers
        });
        setEvents(response.data.message.Palestras);
        setLoading('0');
      } catch(err) {
        if (err) {
          alert(err)
        }
      }
    }
     
    getEvents();
  }, []); //eslint-disable-line

  async function handleSubmit(e) {
    e.preventDefault();
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
      await Api.put('/loggedUser/avaliar', data, {
        headers: headers
      });
      alert("Avaliação efetuada com sucesso.");
    } catch(err) {
      if (err) {
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
                  <th width="60%">Sua Avaliação</th>
                </tr>
              </thead>
              {events.map(event => (
              <tbody key={event.idPalestra}>
                <tr>
                  <td width="20%">{event.Tema}</td>
                  <td width="20%">{event.Data}</td>
                  <td width="60%">
                    <StarRatings
                      rating={event.Inscricoes.Avaliacao}
                      starRatedColor="rgb(255, 204, 0)"
                      numberOfStars={5}
                      starDimension={'25px'}
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
                  starDimension={'40px'}
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