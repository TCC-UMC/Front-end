import React, { useEffect, useState } from 'react';
import Api from '../../services/api';

import { Container } from '../../Styles/Container';
import Header from '../../components/HeaderCoord';
import {Title} from '../../Styles/EventsList';
import {Table} from '../../Styles/Table';
import {Row} from '../../Styles/NewEvent';
import {Button} from '../../Styles/Logon';
import {Link} from 'react-router-dom';

export default function Places() {
  const [places, setPlaces] = useState([]);
  const token = localStorage.getItem('token');

  const headers = {
    'Content-Type': 'application/json',
    'Authorization' : 'bearer ' + token
  }
  
  useEffect(() => {
    async function getPlaces() {
        try {
          const response = await Api.get('/loggedUser/listLocais', {
            headers: headers
          });
          console.log(response);
          setPlaces(response.data.message);
        } catch(err) {
          if (err) {
            console.log(err.response.data.error);
            alert(err.response.data.error)
          }
        }
      }
     
    getPlaces();
  }, []); //eslint-disable-line

  return (
  <>
    <Header/>
    <Container>
      <Title>Lista de locais</Title>
        <Table>
          <thead>
            <tr>
              <th width="25%">ID</th>
              <th width="75%">Nome</th>
            </tr>
          </thead>
          {places.map(place => (
         <tbody key={place.idLocal}>
            <tr>
              <td width="25%">{place.idLocal}</td>
              <td width="75%">{place.Nome}</td>
            </tr>
         </tbody>
        ))}
        </Table>
      <br/>
      <br/>
      <Row>
      <Link to="/cadastrar-local" className="decoration-none ">
        <Button buttonColor="#195088">Novo Local</Button>
      </Link>
        
      </Row>
    </Container>
    </>
  );
}