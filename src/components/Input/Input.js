//Core
import React, { useCallback, useState, useEffect, useRef } from 'react';
import Api from '../../engine/services/api';
//Components 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//Styles
import './input.css';


function Input(props) {
  const { setData, label, title, id, collapse, setCollapse, progress } = props;
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();
  const onFormSubmit = useCallback((ev) => {
    ev.preventDefault();
    if (ev.target[0].value.trim()) {
      const title = ev.target[0].value;
      if (label === "Add") {
        Api.postData(title, progress)
          .then(() => Api.getRequest())
          .then((res) => {
            setData(res.data);
          })
          .catch(error => {
            console.log(error);
          })
          .finally(() => {
            setInputValue('');
          });
      } else if (label === "Update") {
        Api.updateData(id, title)
          .then(() => Api.getRequest())
          .then((res) => {
            setData(res.data);
          })
          .catch(error => {
            console.log(error);
          });
        setCollapse(!collapse);
      }
    }
  }, []);

  useEffect(() => {
    setInputValue(title);
    if(label === "Update") {
      inputRef.current.focus();
    }
  }, [title, label]);

  const handleInputChange = useCallback((ev) => {
    const value = ev.target.value;
    setInputValue(value);
    console.log('callback');
  }, []);

  return (
    <Form onSubmit={onFormSubmit}>
      <Form.Control
        ref={inputRef}
        type="text"
        name="name"
        value={inputValue}
        onChange={handleInputChange} />
      <Button
        variant="success"
        type="submit">
        {label}
      </Button>
    </Form>

  )
}

export default Input; 
