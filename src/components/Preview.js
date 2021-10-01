import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Figure from 'react-bootstrap/Figure';

export function Preview({ author, id, avatar, preview }) {
  return (
    <ListGroup
      className='user-card bg-primary'
      style={{ width: '43vw', margin: '0 auto' }}
    >
      <ListGroup as='ul'>
        <h5 className='card-header text-start text-light'>{author} asks:</h5>
        <ListGroup.Item as='li'>
          <Figure className='d-flex m-3'>
            <Figure.Image width={120} height={120} alt={author} src={avatar} />
            <Figure.Caption className=' text-light'>
              <h6 className='text-start m-3 pt-2 text-dark'>
                Would you rather:
              </h6>
              <p className='text-start font-italic m-3 text-dark'>
                ...{preview}...
              </p>
              <Link to={`/question/${id}`}>
                <Button className='w-60 button' variant='success'>
                  View Pool
                </Button>
              </Link>
            </Figure.Caption>
          </Figure>
        </ListGroup.Item>
      </ListGroup>
    </ListGroup>
  );
}

Preview.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
};
