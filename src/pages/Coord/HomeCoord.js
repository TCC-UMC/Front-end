import React from 'react';
import { Container } from '../../Styles/Container';
import Header from '../../components/HeaderCoord';
import * as S from '../../Styles/EventsList';

export default function HomeCoord() {
  return (
  <>
    <Header/>
    <Container>
      <S.Title>Eventos criado por você</S.Title>
      <S.List>
        <S.Event>
          <S.DateTime>Sexta, 5 de junho de 2020, 19:00</S.DateTime>
          <S.TitleDiv>Palestra da informatica</S.TitleDiv>
          <S.Venue><strong>Local: </strong> Teatro umc</S.Venue>
          <S.Button>Presençass</S.Button>
          <S.Button>Certificados</S.Button>
        </S.Event>
        <S.Event>
          <S.DateTime>Sexta, 5 de junho de 2020, 19:00</S.DateTime>
          <S.TitleDiv>Palestra da informatica</S.TitleDiv>
          <S.Venue><strong>Local: </strong> Teatro umc</S.Venue>
          <S.Button>Presenças</S.Button>
          <S.Button>Certificados</S.Button>
        </S.Event>
        <S.Event>
          <S.DateTime>Sexta, 5 de junho de 2020, 19:00</S.DateTime>
          <S.TitleDiv>Palestra da informatica</S.TitleDiv>
          <S.Venue><strong>Local: </strong> Teatro umc</S.Venue>
          <S.Button>Presenças</S.Button>
          <S.Button>Certificados</S.Button>
        </S.Event>
        <S.Event>
          <S.DateTime>Sexta, 5 de junho de 2020, 19:00</S.DateTime>
          <S.TitleDiv>Palestra da informatica</S.TitleDiv>
          <S.Venue><strong>Local: </strong> Teatro umc</S.Venue>
          <S.Button>Presenças</S.Button>
          <S.Button>Certificados</S.Button>
        </S.Event>

        <S.Event>
          <S.DateTime>Sexta, 5 de junho de 2020, 19:00</S.DateTime>
          <S.TitleDiv>Palestra da informatica</S.TitleDiv>
          <S.Venue><strong>Local: </strong> Teatro umc</S.Venue>
          <S.Button>Presenças</S.Button>
          <S.Button>Certificados</S.Button>
        </S.Event>
        <S.Event>
          <S.DateTime>Sexta, 5 de junho de 2020, 19:00</S.DateTime>
          <S.TitleDiv>Palestra da informatica</S.TitleDiv>
          <S.Venue><strong>Local: </strong> Teatro umc</S.Venue>
          <S.Button>Presenças</S.Button>
          <S.Button>Certificados</S.Button>
        </S.Event>
        <S.Event>
          <S.DateTime>Sexta, 5 de junho de 2020, 19:00</S.DateTime>
          <S.TitleDiv>Palestra da informatica</S.TitleDiv>
          <S.Venue><strong>Local: </strong> Teatro umc</S.Venue>
          <S.Button>Presenças</S.Button>
          <S.Button>Certificados</S.Button>
        </S.Event>
        <S.Event>
          <S.DateTime>Sexta, 5 de junho de 2020, 19:00</S.DateTime>
          <S.TitleDiv>Palestra da informatica</S.TitleDiv>
          <S.Venue><strong>Local: </strong> Teatro umc</S.Venue>
          <S.Button>Presenças</S.Button>
          <S.Button>Certificados</S.Button>
        </S.Event>
      </S.List>
      
    </Container>
  </>
  );
}