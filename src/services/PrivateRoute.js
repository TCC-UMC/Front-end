import React from 'react';

import { Route, Redirect } from 'react-router';

const PrivateRoute = props => {
  const isLogged = localStorage.getItem('token');

  if (isLogged === "0" || !isLogged) {
    return <Redirect to="/"/>
  }
  else {
    return <Route {...props} />
  }
}

export default PrivateRoute;