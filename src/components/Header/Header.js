import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';


 function Header(props) { 
    const {name} = props;
    return (
      <Card.Header >
        <h1> <span>{name}</span> ToDo List </h1>
      </Card.Header>
    )
  };
  
  Header.propTypes = {
    name: PropTypes.string.isRequired
  }
  

export default Header;