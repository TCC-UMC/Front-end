import React, { useEffect, useState } from 'react';
import Api from '../../services/api';

import { Container } from '../../Styles/Container';
import Header from '../../components/HeaderCoord';
import {Title} from '../../Styles/EventsList';
import {Table} from '../../Styles/Table';
import {Row} from '../../Styles/NewEvent';
import {Button} from '../../Styles/Logon';
import {Link} from 'react-router-dom';

export default function Panelist() {
  const [panelists, setPanelist] = useState([]);
  const token = localStorage.getItem('token');

  const headers = {
    'Content-Type': 'application/json',
    'Authorization' : 'bearer ' + token
  }
  
  useEffect(() => {
    async function getPanelist() {
        try {
          const response = await Api.get('/loggedUser/listPalestrantes', {
            headers: headers
          });
          console.log(response);
          setPanelist(response.data.message);
        } catch(err) {
          if (err) {
            console.log(err.response.data.error);
            alert(err.response.data.error)
          }
        }
      }
     
    getPanelist();
  }, []); //eslint-disable-line

  return (
  <>
    <Header/>
    <Container>
      <Title>Lista de palestrantes</Title>
        <Table>
          <thead>
            <tr>
              <th width="33%">Nome</th>
              <th width="33%">Email</th> 
              <th width="33%">Curriculo</th>
            </tr>
          </thead>
          <tbody>
            {panelists.map(panelist => (
            <tr key={panelist.idPalestrante}>
              <td width="33%">{panelist.Nome}</td>
              <td width="33%">{panelist.Email}</td>
              <td width="33%">{panelist.Curriculo}</td>
            </tr>
            ))}
          </tbody>
        </Table>
      <br/>
      <br/>
      <Row>
      <Link to="/cadastrar-palestrante" className="decoration-none ">
        <Button buttonColor="#195088">Novo Palestrante</Button>
      </Link>
        
      </Row>
    </Container>
    </>
  );
}