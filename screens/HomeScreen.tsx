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

  import styles from '../stylesheets/styles';

  function HomeScreen() {
    const insets = useSafeAreaInsets();
    const homeScreenStyles = StyleSheet.create({
      safe: {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
      }
    });

    return (
        <View style={[homeScreenStyles.safe, styles.container]}>
          <Text>Home screen</Text>
        </View>
      );
    }

export default HomeScreen;