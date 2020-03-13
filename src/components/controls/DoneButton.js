//Core
import React, { useCallback, useState, useEffect } from 'react';
import Api from '../../engine/services/api';
//Component
import Button from 'react-bootstrap/Button';

function DoneButton(props) {
  const { id, progress, setData } = props;
  const [doneButtonStyle, setDoneButtonStyle] = useState(progress);
  const [newProgress, setNewProgress] = useState(progress);

  const doneButtonHendler = useCallback(() => {
    newProgress === 'done' ? setNewProgress('') : setNewProgress('done');
    setDoneButtonStyle(newProgress);
    Api.updateProgress(id, newProgress)
      .then(() => console.log('updeted! new progress=', newProgress))
      .then(() => Api.getRequest())
      .then((res) => {
        setData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [newProgress]);

  /*   useEffect(() => {
      setDoneButtonStyle(newProgress);
    }, [doneButtonStyle,newProgress]); */
  return (
    <Button variant="dark" onClick={doneButtonHendler} className={doneButtonStyle}>Done!</Button>
  )
}

export default DoneButton;
