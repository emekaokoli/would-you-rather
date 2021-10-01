import React from 'react';
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
  return (
    <>
      Oops, page not found, hit the back button{' '}
      <Link to='/' className='btn button-narrow text-success'>
        go back to Home
      </Link>
    </>
  );
};
