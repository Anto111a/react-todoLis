//Core
import React, { useCallback, useState } from 'react';
//Component
import Button from 'react-bootstrap/Button';


function EditButton(props) {
  const { collapse, setCollapse } = props;
  console.log(collapse);
  const editButtonHandler = useCallback(() => {
    console.log(collapse);
    setCollapse(!collapse);
    console.log(collapse);
  }, []);

  return (
    <Button onClick={editButtonHandler} variant="primary"><span>&#9998;</span></Button>
  )
}

export default EditButton;
