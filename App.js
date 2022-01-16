import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MyDrawer from './src/navigator/DrawerNavigator';
import ThemeContext from './src/contexts/ThemeContext';


export default function App() {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(scheme);
  const value = { theme, setTheme };

  return (
    <SafeAreaProvider>
       <ThemeContext.Provider value={value}>
          <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
            <MyDrawer />
          </NavigationContainer>
        </ThemeContext.Provider>
    </SafeAreaProvider>
  );
}
