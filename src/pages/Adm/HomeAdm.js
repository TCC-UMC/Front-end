import React, { useEffect, useState } from 'react';
import Api from '../../services/api';

import {Container} from '../../Styles/Container';
import Header from '../../components/HeaderAdm';
import {Title} from '../../Styles/EventsList';
import {Table} from '../../Styles/Table';

export default function HomeAdm() {
  const [coords, setCoords] = useState([]);
  const token = localStorage.getItem('token');

  const headers = {
    'Content-Type': 'application/json',
    'Authorization' : 'bearer ' + token
  }
  
  useEffect(() => {
    async function getCoords() {
        try {
          const response = await Api.get('/loggedUser/listCoord', {
            headers: headers
          });
          setCoords(response.data.message);
        } catch(err) {
          if (err) {
            alert(err.response.data.error)
          }
        }
      }
    getCoords();
  }, []); //eslint-disable-line

  return (
  <>
    <Header/>
    <Container>
      <Title>Lista de Coordenadores</Title>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th> 
            <th>Curso</th>
          </tr>
        </thead>
        {coords.map(coord => (
          <tbody>
            <tr>
              <td>{coord.Nome}</td>
              <td>{coord.Email}</td>
              <td>{coord.CursoCoord}</td>
            </tr>
          </tbody>
        ))}
      </Table>
      <br/>
    </Container>
    </>
  );
}