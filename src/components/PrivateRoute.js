import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';

export const PrivateRoute = ({ children, ...rest }) => {
  const { authedUser } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return authedUser === null ? (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        ) : (
          children
        );
      }}
    />
  );
};
