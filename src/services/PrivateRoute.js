import React from 'react';

import { Route, Redirect } from 'react-router';

const PrivateRoute = props => {
  const isLogged = !!localStorage.getItem('token');
 // const type = localStorage.getItem('type');

  if (!isLogged) {
    return <Redirect to="/"/>
  }
  else {
    return <Route {...props} />
  }
}

export default PrivateRoute;