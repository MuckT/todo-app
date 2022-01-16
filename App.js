import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MyDrawer from './src/navigator/DrawerNavigator';
import ThemeContext from './src/contexts/ThemeContext';


export default function App() {
  // Theme Things
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(scheme);
  const themeValue = { theme, setTheme };

  // Todo Items
  const [todos, setTodos] = useState([
    {title: 'Temp - #1', description: 'This is a sample description #1', difficulty: 10}, 
    {title: 'Temp - #2', description: 'This is a sample description #2', difficulty: 2}
  ]);

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
              todos={todos} 
              setTodos={setTodos}
              settings={settings}
              setSettings={setSettings}
            />
          </NavigationContainer>
        </ThemeContext.Provider>
    </SafeAreaProvider>
  );
}
