// Core
import React, { useState, useEffect } from 'react';
// Components
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Api from '../../engine/services/api';
import TodoListItem from '../TodoListItem/TodoListItem';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Input from '../Input/Input';

function MakeList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    Api.getRequest()
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
        <Input
          setData={setData}
          progress=""
          label="Add" />
        <ErrorBoundary>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
              data.map(item => (
                <TodoListItem
                  variant="primary"
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  progress={item.progress}
                  setData={setData}
                />
              ))
            )}
        </ErrorBoundary>
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
