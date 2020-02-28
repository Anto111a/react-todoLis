import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoListItem from '../TodoListItem/TodoListItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

function MakeList() {
const [data, setData] = useState( []);

useEffect(() => {
  let ignore = false;

    async function fetchData() {
      const result = await axios('http://localhost:3000/posts');
      console.log(result);
      if (!ignore) setData(result.data);
    }

    fetchData();
    return () => { ignore = true; }
  }, []);

  return (
    <Card.Body>
      <ListGroup >
        {data.map(item => (
        <TodoListItem variant="primary" key={item.id} title={item.title}/>
        ))}
      </ListGroup>
    </Card.Body>
  )
}

function TodoList () {
    return (
      <div className='todoList'>
        <MakeList/>
      </div>
      )
    }


export default TodoList;
