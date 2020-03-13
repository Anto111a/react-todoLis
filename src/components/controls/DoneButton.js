//Core
import React, { useCallback } from 'react';
import cx from 'classnames';
import Api from '../../engine/services/api';
//Component
import Button from 'react-bootstrap/Button';

function DoneButton(props) {
  const { id, isDone, setData } = props;

  const doneButtonHandler = useCallback(() => {
    Api.updateProgress(id, !isDone)
      .then(() => Api.getRequest())
      .then((res) => {
        setData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id, isDone, setData]);

  return (
    <Button
      className={cx({ done: isDone })}
      variant="dark"
      onClick={doneButtonHandler}
    >
      Done!
    </Button>
  )
}

export default DoneButton;
