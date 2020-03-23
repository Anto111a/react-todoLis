// Core
import React, { useState, useEffect, Lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
  useParams,
  withRouter,
} from 'react-router-dom';
// Components
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Api from '../../engine/services/api';
import Input from '../Input/Input';
import TodoListBody from '../TodoListBody/TodoListBody';
import Navigation from '../Navigation/Navigation'
//Routes 
import { routes } from '../../engine/config/routes';

function TodoList() {
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
    <>
      <div className="todoList">
        <Card.Body>
          <ListGroup>
            <Input
              setData={setData}
              progress={false}
              label="Add"
            />
            <Suspense fallback={<div>Loading...</div>}>
              <Router>
                <>
                  <Navigation />
                  <Switch>
                    <Route exact path={routes.all}>
                      <TodoListBody
                        category="all"
                        data={data}
                        setData={setData}
                      />
                    </Route>
                    <Route exact path={routes.inprogress}>
                      <TodoListBody
                        category="inprogres"
                        data={data}
                        setData={setData}
                      />
                    </Route>
                    <Route exact path={routes.done}>
                      <TodoListBody
                        category="done"
                        data={data}
                        setData={setData}
                      />
                    </Route>
                  </Switch>
                </>
              </Router>
            </Suspense>
          </ListGroup>
        </Card.Body>
      </div>

    </>
  );
}

export default TodoList;
