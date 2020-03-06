//Core
import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
//Components
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import DeleteButton from '../controls/DeleteButton';
import EditButton from '../controls/EditButton';
import DoneButton from '../controls/DoneButton';
import Input from '../Input/Input';


function TodoListItem(props) {
  const [collapse, setCollapse] = useState(true);
  const title = props.title
  const onEditSubmit = useCallback((ev) => {
    ev.preventDefault();
    console.log(ev.target);
  })
  useEffect(() => {

  }, [collapse])
  if (collapse) {
    return (
      <ListGroup.Item variant="info">
        You should do: {title}
        <EditButton setCollapse={setCollapse} collapse />
        <DeleteButton id={props.id} setData={props.setData} title={title} />
      </ListGroup.Item>
    )
  } return (

    <ListGroup.Item variant="warning">
      <DoneButton setCollapse={setCollapse} />
      <Input />
      {/*  <form onSubmit={onEditSubmit}>
        <input type="text" value={title}></input>
        <input type="submit" value="Change" />
      </form> */}
      <EditButton setCollapse={setCollapse} collapse={collapse} />
    </ListGroup.Item>
  )
}

TodoListItem.propTypes = {
  title: PropTypes.string
}

export default TodoListItem;
