import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import Texter from './components/Texter';
import ColorBox from './components/ColorBox';

const App = () => {
  // const viewData = [
  //   {
  //     viewBg: { backgroundColor: '#2aa198' },
  //     textStyle: { color: '#fff' },
  //     text: 'Cyan #2aa198',
  //   },
  //   {
  //     viewBg: { backgroundColor: '#268bd2' },
  //     textStyle: { color: '#fff' },
  //     text: 'Blue #268bd2',
  //   },
  //   {
  //     viewBg: { backgroundColor: '#d33682' },
  //     textStyle: { color: '#fff' },
  //     text: 'Magenta #d33682',
  //   },
  //   {
  //     viewBg: { backgroundColor: '#cb4b16' },
  //     textStyle: { color: '#fff' },
  //     text: 'Orange #cb4b16',
  //   },
  // ];

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Here are some boxes of different colours
        </Text>

        <ColorBox />
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
  // box1: {
  //   color: '#fff',
  //   backgroundColor: '#2aa198',
  // },
  // box2: {
  //   backgroundColor: '#268bd2',
  // },
  // box3: {
  //   backgroundColor: '#d33682',
  // },
  // box4: {
  //   backgroundColor: '#cb4b16',
  // },
});

export default App;
