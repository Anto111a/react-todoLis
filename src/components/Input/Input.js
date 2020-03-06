//Core
import React, { useCallback, useState, } from 'react';
import Api from '../../engine/services/api';

function Input(props) {
  const { setData } = props;
  const [inputValue, setInputValue] = useState('');

  const onFormSubmit = useCallback((ev) => {
    ev.preventDefault();
    if (ev.target[0].value.trim()) {
      const title = ev.target[0].value;
      Api.postData(title)
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
    }
  }, []);

  const handleInputChange = useCallback((ev) => {
    const value = ev.target.value;
    setInputValue(value);
  }, []);

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="name" value={inputValue} onChange={handleInputChange} />
        <input type="submit" value="Add" />
      </form>
    </>
  )
}

export default Input; 
