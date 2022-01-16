import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from '../components/Settings'
import TodoList from '../components/TodoList';

const Drawer = createDrawerNavigator();

const MyDrawer = (props) => {
  const {todos, setTodos, settings, setSettings } = props
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Todos" component={
        () => <TodoList todos={todos} setTodos={setTodos} />
      }/>
      <Drawer.Screen name="Settings" component={
        () => <Settings settings={settings} setSettings={setSettings} />
      }/>
    </Drawer.Navigator>
  );
}

export default MyDrawer;