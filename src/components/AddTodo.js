import { ScrollView } from 'react-native';
import { Input, Button, Text, Slider, Icon } from 'react-native-elements';
import React, { useState } from 'react';
import { useTheme } from '@react-navigation/native';
import uuid from 'react-native-uuid';

const AddTodo = (props) => {
  const { todoDispatch } = props
  const [taskName, setTaskName] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDifficulty, setTaskDifficulty] = useState(0);
  const { colors } = useTheme();

  const addTodo = (e) => {
    e.preventDefault();
    todoDispatch({
      type: "add",
      payload: {
        title: taskName,
        description: taskDescription,
        difficulty: taskDifficulty,
        completed: false,
        id: `${uuid.v4()}`
      }
    })
  }

  return(
    <ScrollView>
      <Input 
        label="Task Name" 
        inputStyle={{ color: colors.text}} 
        placeholder="Enter Task Name"
        onChangeText={setTaskName}
      />
      <Input 
        label="Task Description" 
        inputStyle={{ color: colors.text}} 
        placeholder="Enter Task Description"
        onChangeText={setTaskDescription}
      />
      <Slider
        style={{
          margin: 16,
          color: colors.primary
        }}
        value={taskDifficulty}
        onValueChange={setTaskDifficulty}
        maximumValue={10}
        minimumValue={0}
        step={1}
        allowTouchTrack
        trackStyle={{ height: 5, backgroundColor: 'transparent' }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
        thumbProps={{
          children: (
            <Icon
              name="star"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
            />
          ),
        }}
      />
      <Text style={{ marginBottom: 10, paddingHorizontal: 16, color: colors.text, fontSize: 16}}> Difficulty: {taskDifficulty}</Text>
      <Button
        title="ADD TODO"
        iconContainerStyle={{ marginRight: 10 }}
        titleStyle={{ fontWeight: '700' }}
        buttonStyle={{
          backgroundColor: colors.primary,
          borderColor: 'transparent',
          borderWidth: 0,
          borderRadius: 30,
        }}
        containerStyle={{
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={addTodo}
      />
    </ScrollView>
  );
}

export default AddTodo
