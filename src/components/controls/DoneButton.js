//Core
import React, { useCallback, useState } from 'react';
//Component
import Button from 'react-bootstrap/Button';

function DoneButton(props) {
  const { setCollapse } = props;
  const doneButtonHendler = useCallback(() => {
    setCollapse(false);
    console.log('DoNE!!!!');
  }, []);

  return (
    <Button variant="success" onClick={doneButtonHendler}>Done</Button>
  )
}

export default DoneButton;
