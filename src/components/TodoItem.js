import React from 'react';
import { Text, Card, Button, Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const TodoItem = (props) => {
  const { title, description, difficulty } = props
  const { colors } = useTheme();

  return (
    <Card containerStyle={{color: colors.text, backgroundColor: colors.card, borderColor: colors.border}}>
      <Card.Title style={{color: colors.text}}>{title}</Card.Title>
      <Card.Divider />
      <Text style={{ color: colors.text, marginBottom: 10 }}>
        {description}
      </Text>
      <Text style={{ color: colors.text, marginBottom: 10 }}>Difficulty: {difficulty} </Text>
      <Button 
        buttonStyle={{
          backgroundColor: colors.primary,
          marginBottom: 10
        }}
        iconPosition="right"
        icon={
          <Icon
            name="edit"
            color="#ffffff"
            style={{paddingLeft: 10 }}
          />
        }
        title="Edit"
      />
      <Button
        buttonStyle={{
          backgroundColor: colors.primary,
          marginBottom: 10
        }}
        iconPosition="right"
        icon={
          <Icon
            name="check"
            color={"#ffffff"}
            style={{paddingLeft: 10 }}
          />
        }
        title="Complete"
      />
    </Card>
  )
}

export default TodoItem;