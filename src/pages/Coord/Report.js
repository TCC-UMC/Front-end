import React, { useEffect, useState } from 'react';
import Api from '../../services/api';


export default function Report({match}) {
  const idPalestra = match.params.id;
  const [event, setEvents] = useState({});

  const headers = {
    'Content-Type': 'application/json',
    'Authorization' : 'bearer ' + localStorage.getItem('token')
  }

  useEffect(() => {
    async function getEvents() {
        try {
          const response = await Api.get(`/loggedUser/relatorioPalestra/${idPalestra}`, {
            headers: headers
          });
          console.log(response.data);
          if (response.data.message[0]) {
            setEvents(response.data.message[0]);
          } 
        } catch(err) {
            if(err) {
              console.log(err);
              alert(err)
            }
        }
      }
    getEvents();
  }, []); //eslint-disable-line

  return (
    <div>
      <h1>{idPalestra}</h1>
      <h2>{event.avaliacoes}</h2>
    </div>
  )
}