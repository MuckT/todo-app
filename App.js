import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React, { useState, useReducer } from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MyDrawer from './src/navigator/DrawerNavigator';
import ThemeContext from './src/contexts/ThemeContext';

export default function App() {
  // Theme Things
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(scheme);
  const themeValue = { theme, setTheme };

  const init = () => {
    return {
      activeTodo: {},
      todos: []
    };
  }
  
  const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'add':
        return {
          ...state,
          activeTodo: {},
          todos: [...state.todos, payload]
        }
      case 'complete':
        return {
          ...state,
          activeTodo: payload,
          todos: [...state.todos.map(todo => todo.id === payload.id ? {...todo, completed: true } : todo)]
        }
      case 'reopen':
        return {
          ...state,
          activeTodo: payload,
          todos: [...state.todos.map(todo => todo.id === payload.id ? {...todo, completed: false } : todo)]
        }
      default:
        return state;
    }
  }

  // Use Todo Reducer
  const [state, todoDispatch] = useReducer(reducer, undefined, init);

  // Todo Settings
  const [settings, setSettings] = useState({
    todoItemsPerPage: 3,
    hideCompletedItems: true,
    softField: 'dueDate',
  })

  return (
    <SafeAreaProvider>
       <ThemeContext.Provider value={themeValue}>
          <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
            <MyDrawer 
              todos={state.todos} 
              todoDispatch={todoDispatch}
              settings={settings}
              setSettings={setSettings}
            />
          </NavigationContainer>
        </ThemeContext.Provider>
    </SafeAreaProvider>
  );
}
