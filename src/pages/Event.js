import React, { useEffect, useState } from 'react';

import Api from '../services/api';

import * as S from '../Styles/EventsList';
import { Container } from '../Styles/Container';
import HeaderUser from '../components/HeaderUser';
import HeaderCoord from '../components/HeaderCoord';

export default function Events({ match }) {
  const id = match.params.id;
  const [inscrito, setInscrito] = useState();
  const [loading, setLoading] = useState('loading');
  const [Event, setEvent] = useState({});
  const Type = localStorage.getItem('type');

  const headers = {
    'Content-Type': 'application/json',
    'Authorization' : 'bearer ' + localStorage.getItem('token')
  }
  
  useEffect(() => {
    async function getEvent() {
        try {
          const response = await Api.get(`/loggedUser/listPalestras/${id}`, {
            headers: headers
          });
          console.log(response);
          if (response.data.message[0]) {
            setInscrito(response.data.inscrito);
            setEvent(response.data.message[0]);
            setLoading('sucess');
          } else {
            setLoading('error');
          }
         
        } catch(err) {
          if (err) {
            console.log(err);
            alert(err);
          }
        }
      }
     
    getEvent();
  }, []); //eslint-disable-line

  function Loading() {
    return(
        <Container>
          <S.Title>Carregando ...</S.Title>
        </Container>
    );
  }

  function Err() {
    return(
        <Container>
          <S.Title>Erro, evento não encontrado.</S.Title>
        </Container>
    );
  }

  function Sucess(){
    return (
        <Container>
          <S.Title>Sobre o evento</S.Title>
          <S.Venue>
            Tema: {Event.Tema}
          </S.Venue>
          <S.Venue>Descrição: {Event.Descricao}</S.Venue>
          <S.Venue>Data: {Event.Data}</S.Venue>
          <S.Venue>Horario do Inicio: {Event.HorarioInicio}</S.Venue>
          <S.Venue>Horario de Termino {Event.HorarioTermino}</S.Venue>
          <S.Venue>Local: {Event.NomeLocal}</S.Venue>
          <S.Venue>Capacidade Máxima: {Event.CapMax}</S.Venue>
          <S.Title>Sobre o palestrante</S.Title>
          <S.Venue>Nome: {Event.NomePalestrante}</S.Venue>
          <S.Venue>Curriculo: {Event.CVPalestrante}</S.Venue>
          {
            Type === 'participante' && !inscrito && (
              <>
              <S.Button onClick={async () => {
                  let fkPalestra = Event.idPalestra;
                  const Presenca = false;
                  const Avaliacao = 0;
                  try {
                    const response = await Api.post('/loggedUser/inscrever', { fkPalestra, Presenca, Avaliacao, Type }, {
                      headers: headers
                    });
                    if (response.status === 201) {
                      console.log(response);
                      alert("Você foi inscrito na palestra com sucesso.");
                      setInscrito(true);
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
              <S.LinkBlue to={'/eventos'} className="decoration-none ">
                Voltar
              </S.LinkBlue>
              </>
            )
          }
          {
            Type === 'participante' && inscrito && (
              <>
              <S.Button>
                Você está inscrito nesse evento!
              </S.Button>
              <S.LinkBlue to={'/eventos'} className="decoration-none ">
                Voltar
              </S.LinkBlue>
              </>
            )
          }
          {
            Type === 'coordenador' && (
              <>
                <S.LinkBlue to={`/editar-evento/${Event.idPalestra}`}>Editar evento</S.LinkBlue>
                <S.LinkBlue to={`/lancar-presencas/${Event.idPalestra}`}>Lançar Presencas</S.LinkBlue>
                <S.LinkBlue to={`/relatorio/${Event.idPalestra}`}>Relatorio</S.LinkBlue>
              </>
            )
          }
        </Container>
    )
  }
  
  return (
    <>
    {Type === 'participante' && (<HeaderUser/>)}
    {Type === 'coordenador' && (<HeaderCoord/>)}
    {loading === "loading" && (Loading())}
    {loading === "error" && (Err())}
    {loading === "sucess" && (Sucess())}
    </>
  );
}