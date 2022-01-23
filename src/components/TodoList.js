import React from 'react';
import { ScrollView } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const { todos, todoDispatch, settings } = props

  const shownTodos = !settings.hideCompleted 
    ? todos.filter(item => !item.completed)
    : todos

  return (
    <ScrollView scrollIndicatorInsets={{ right: 1 }}>
      { shownTodos.map(item => {
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
