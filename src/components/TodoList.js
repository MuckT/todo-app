import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useTheme } from '@react-navigation/native';
import TodoItem from './TodoItem';
import { ScrollView } from 'react-native-gesture-handler';

// TODO: Make components for pages
const TodoList = (props) => {
  const { todos, setTodos } = props
  const { colors } = useTheme();

  return (
    <ScrollView>
      { todos.map((item, idx) => {
        return (
          <TodoItem 
            key={idx} 
            title={item.title} 
            description={item.description} 
            difficulty={item.difficulty}>
          </TodoItem>
        )
      })}
    </ScrollView>
  );
}

export default TodoList;
