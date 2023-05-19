import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Texter from './components/Texter';
import ListsExercise from './components/ListsExercise';
import { createStackNavigator } from '@react-navigation/stack';
import ColorPalette from './screens/ColorPalette';
import Home from './screens/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'My Home' }}
        />
        <Stack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={{ title: 'Solarized' }}
        />
      </Stack.Navigator>
      {/* <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <Text style={styles.heading}>
            Here are some boxes of different colours
          </Text>

          <ListsExercise />
        </View>
      </SafeAreaView> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 2,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'lavender',
  },
  container: {
    flex: 1,
    margin: 10,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  box: {
    padding: 10,
    marginVertical: 4,
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default App;
