import AsyncStorage from '@react-native-community/async-storage';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeContext from './src/contexts/ThemeContext';
import MyDrawer from './src/navigator/DrawerNavigator';

export default function App() {
  // Theme Things
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(scheme);
  const themeValue = { theme, setTheme };
  // Todo Settings
  const [settings, setSettings] = useState({
    hideCompleted: true,
  })

  // Async Storage
  const saveSettings = (settings) => {
    setSettings(settings)
    saveData('@settings', JSON.stringify(settings))
  }

  const fetchSettings = useCallback(async () => {
    let response = await AsyncStorage.getItem('@settings')
    if(response !== null) {
      response = JSON.parse(response)
      setSettings(response)
    }
  })

  const fetchTodos = useCallback(async () => {
    let response = await AsyncStorage.getItem('@todos')
    if(response !== null) {
      response = JSON.parse(response)
      todoDispatch({
        type: "restore",
        payload: response
      })
    }
  }, [])
  
  // Save
  const saveData = async (storageKey, value) => {
    try {
      await AsyncStorage.setItem(storageKey, value)
      console.log('saving', `${storageKey} successfully saved`)
    } catch (e) {
      console.warn(`Failed to save ${storageKey}: ${value} to the storage`)
    }
  }

  // Read data on load
  useEffect(() => {
    fetchTodos()
    fetchSettings()
  }, [])


  // Initial todo reducer state
  const init = () => {
    return {
      activeTodo: {},
      todos: []
    };
  }

  // Todo reducer
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
      case 'save':
        saveData('@todos', JSON.stringify(state.todos))
        return {
          ...state
        }
      case 'restore':
        return {
          ...state,
          todos: payload
        }
      default:
        return state;
    }
  }

  // Use Todo Reducer
  const [state, todoDispatch] = useReducer(reducer, undefined, init);

  return (
    <SafeAreaProvider>
       <ThemeContext.Provider value={themeValue}>
          <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
            <MyDrawer 
              todos={state.todos} 
              todoDispatch={todoDispatch}
              settings={settings}
              setSettings={saveSettings}
            />
          </NavigationContainer>
        </ThemeContext.Provider>
    </SafeAreaProvider>
  );
}
