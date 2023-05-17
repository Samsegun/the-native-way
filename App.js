import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import Texter from './components/Texter';
import ColorBox from './components/ColorBox';
import ListsExercise from './components/ListsExercise';

const App = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Here are some boxes of different colours
        </Text>

        {/* <ColorBox /> */}
        <ListsExercise />
      </View>
    </SafeAreaView>
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
