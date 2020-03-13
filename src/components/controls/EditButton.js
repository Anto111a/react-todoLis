//Core
import React, { useCallback } from 'react';
//Component
import Button from 'react-bootstrap/Button';


function EditButton(props) {
  const { collapse, setCollapse, label } = props;
  const editButtonHandler = useCallback(() => {
    setCollapse(!collapse);
  }, [setCollapse, collapse]);

  return (
    <Button onClick={editButtonHandler} variant="primary"><span>{label}</span></Button>
  )
}

export default EditButton;
