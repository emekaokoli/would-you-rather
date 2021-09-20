import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Figure from 'react-bootstrap/Figure';

export function Preview({ questionAuthor, id, avatar, questionPreview }) {
  return (
    <ListGroup.Item as='li' active className='user-card'>
      <h5 className='card-header text-start'>{questionAuthor} asks:</h5>
      <Figure className='d-flex m-3'>
        <Figure.Image
          width={120}
          height={120}
          alt={questionAuthor}
          src={`${avatar}`}
        />
        <Figure.Caption className='text-light'>
          <h6 className='text-start m-3 pt-2'>Would you rather:</h6>
          <p className='text-start font-italic m-3'>...{questionPreview}...</p>
          <Link to={`/question/${id}`}>
            <Button className='w-60 button' variant='success'>
              View Pool
            </Button>
          </Link>
        </Figure.Caption>
      </Figure>
    </ListGroup.Item>
  );
}

Preview.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  questionAuthor: PropTypes.string.isRequired,
  questionPreview: PropTypes.string.isRequired,
};
