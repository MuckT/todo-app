
import { View, Text, Switch, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import ThemeContext from "../contexts/ThemeContext"
import { useTheme } from '@react-navigation/native';
const Settings = (props) => {
  const {settings, setSettings} = props
  const { theme, setTheme } = useContext(ThemeContext)
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <View style={styles.settingItem}>
        <Text style={[{ color: colors.text }, styles.text]}> Set App Dark Mode</Text>
        <Switch 
          onValueChange={() => setTheme(theme == "dark" ? "light" : "dark")}
          value={theme === 'dark' ? true : false}
        />
      </View>
      <View style={styles.settingItem}>
        <Text style={[{ color: colors.text }, styles.text]}> Display completed Items</Text>
        <Switch 
          onValueChange={() => setSettings({hideCompleted: !settings.hideCompleted})}
          value={settings.hideCompleted}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    padding: 16
  },
  text: {
    textAlignVertical: 'center',
    fontSize: 20,
    textAlign: 'center',
  }
})

export default Settings;
