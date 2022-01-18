import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from '@react-navigation/native';
import * as React from 'react';
import AddTodo from '../components/AddTodo';
import Settings from '../components/Settings';
import TodoList from '../components/TodoList';

const Drawer = createDrawerNavigator();

const MyDrawer = (props) => {
  const { todos, todoDispatch, settings, setSettings } = props
  const { colors } = useTheme();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: colors.text,
        headerStyle: {
          backgroundColor: colors.background,
          borderColor: colors.border,
          borderBottomWidth: 1
        },
      }}>
      <Drawer.Screen name="Todos" component={
        () => <TodoList todos={todos} todoDispatch={todoDispatch} />
      }/>
      <Drawer.Screen name="Add Todo" component={
        () => <AddTodo todoDispatch={todoDispatch} />
      }/>
      <Drawer.Screen name="Settings" component={
        () => <Settings settings={settings} setSettings={setSettings} />
      }/>
    </Drawer.Navigator>
  );
}

export default MyDrawer;