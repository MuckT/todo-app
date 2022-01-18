import * as React from 'react';
import TodoItem from './TodoItem';
import { ScrollView } from 'react-native';

// TODO: Make components for pages
const TodoList = (props) => {
  const { todos, todoDispatch } = props

  return (
    <ScrollView scrollIndicatorInsets={{ right: 1 }}>
      { todos.map(item => {
        return (
          <TodoItem
            key={item.id}
            todoDispatch={todoDispatch} 
            title={item.title} 
            description={item.description} 
            difficulty={item.difficulty}
            completed={item.completed}
            id={item.id}>
          </TodoItem>
        )
      })}
    </ScrollView>
  );
}

export default TodoList;
