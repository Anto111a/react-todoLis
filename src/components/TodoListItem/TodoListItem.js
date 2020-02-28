import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

function TodoListItem (props) {
    const title = props.title
    return (
      <ListGroup.Item variant="info"> You should do: {title} </ListGroup.Item>
    )
  }
  
  TodoListItem.propTypes = {
    title: PropTypes.string
  }
  
  

export default TodoListItem;