// Core
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
// Components
import TodoListItem from '../TodoListItem/TodoListItem';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

function MakeList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    instance.get('/posts')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return (
      <div style={{ color: 'red' }}>{error}</div>
    );
  }

  return (
    <Card.Body>
      <ListGroup>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data.map(item => (
            <TodoListItem
              variant="primary"
              key={item.id}
              title={item.title}
            />
          ))
        )}
      </ListGroup>
    </Card.Body>
  );
}

function TodoList() {
  return (
    <div className="todoList">
      <MakeList />
    </div>
  );
}

export default TodoList;
