import React from 'react';
import {
  Alert,
  Button,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from './stylesheets/styles';
import HomeScreen from './screens/HomeScreen';

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  const insets = useSafeAreaInsets();
  const settingsScreenStyles = StyleSheet.create({
    safe: {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right
    }
  });

  return (
    <View style={[settingsScreenStyles.safe, styles.container]}>
      <Text>Settings screen</Text>
    </View>
  );
}

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown: false}}/>
          </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;