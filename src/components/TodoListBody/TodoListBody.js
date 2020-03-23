//Core
import React from 'react';

//Components
import TodoListItem from '../TodoListItem/TodoListItem';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

function TodoListBody(props) {
  const { data, setData, category } = props;
  let newData = [];
  if (category === 'all') {
    newData = data;
  } else if (category === 'done') {
    newData = data.filter(item => (
      item.progress === true
    ))
  } else if (category === 'inprogres') {
    newData = data.filter(item => (
      item.progress === false
    ))
  }

  console.log(newData);
  return (
    <ErrorBoundary>
      {
        newData.map(item => (
          <TodoListItem
            variant="primary"
            key={item.id}
            id={item.id}
            title={item.title}
            progress={item.progress}
            setData={setData}
          />
        ))
      }
    </ErrorBoundary>
  )
}

export default TodoListBody;