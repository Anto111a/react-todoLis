//Core
import React, { useCallback, useState } from 'react';
import Api from '../../engine/services/api';
//Component
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function DeleteButton(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { setData, title } = props;
  const deleteButtonHendler = useCallback(() => {
    Api.deleteData(props.id)
      .then(() => Api.getRequest())
      .then((res) => {
        setData(res.data);
      });
  }, [])

  return (
    <>
      <Button onClick={handleShow} variant="danger"><span>&#10539;</span></Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure to delete this item?</Modal.Title>
        </Modal.Header>
        <Modal.Body>{title}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteButtonHendler}>
            I sure, delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DeleteButton;
