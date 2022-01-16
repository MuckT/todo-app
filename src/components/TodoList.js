import * as React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

// TODO: Make components for pages
const TodoList = () => {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: colors.text }}>Todo List</Text>
    </View>
  );
}

export default TodoList;
