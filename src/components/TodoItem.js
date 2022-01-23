import React from 'react';
import { Text, Card, Button, Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const TodoItem = (props) => {
  const { title, completed, description, difficulty, id, todoDispatch  } = props
  const { colors } = useTheme();

  const completeTodo = () => {
    todoDispatch({
      type: "complete",
      payload: {
        id: id
      }
    })
  }
  
  const reopenTodo = () => {
    todoDispatch({
      type: "reopen",
      payload: {
        id: id
      }
    })
  }

  return (
    <Card containerStyle={{color: colors.text, backgroundColor: colors.card, borderColor: colors.border}}>
      <Card.Title style={{color: colors.text}}>{title}</Card.Title>
      <Card.Divider />
      <Text style={{ color: colors.text, marginBottom: 10 }}>
        {description}
      </Text>
      <Text style={{ color: colors.text, marginBottom: 10 }}>Difficulty: {difficulty} </Text>
      {completed 
        ? <Button
            buttonStyle={{
              backgroundColor: colors.primary,
              marginBottom: 10
            }}
            title="Reopen"
            onPress={reopenTodo}
          />
        : <Button
          buttonStyle={{
            backgroundColor: colors.primary,
            marginBottom: 10
          }}
          iconPosition="right"
          title="Complete"
          onPress={completeTodo}
        />}
    </Card>
  )
}

export default TodoItem;