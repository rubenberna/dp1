import React, { useContext } from 'react';
import { Route, Redirect } from "react-router-dom";
import { Context as AuthContext } from '../../context/auth/auth.context';
import { GenericTemplate } from './GenericTemplate';

export const PrivateRoute = ({ component, ...options }) => {
  const { state: { user: { idToken } } } = useContext(AuthContext)

  return <Route
    {...options}
    render={() => idToken ? <GenericTemplate>{component}</GenericTemplate>: <Redirect to={'/'} />}
  />
}