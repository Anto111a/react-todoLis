//Core
import React, { useCallback, useState, useEffect, } from 'react';
import Api from '../../engine/services/api';
//Components 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//Styles
import './input.css';


function Input(props) {
  const { setData, label, title, id, collapse, setCollapse, progress } = props;
  const [inputValue, setInputValue] = useState('');
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
  }, [title]);
  const handleInputChange = useCallback((ev) => {
    const value = ev.target.value;
    setInputValue(value);
  }, []);

  return (
    <Form onSubmit={onFormSubmit}>
      <Form.Control
        type="text"
        name="name"
        value={inputValue}
        onChange={handleInputChange} />
      <Button
        variant="primary"
        type="submit">
        {label}
      </Button>
    </Form>

  )
}

export default Input; 
