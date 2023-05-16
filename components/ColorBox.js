import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const DATA = [
  {
    viewBg: { backgroundColor: '#2aa198' },
    textStyle: { color: '#fff' },
    text: 'Cyan #2aa198',
  },
  {
    viewBg: { backgroundColor: '#268bd2' },
    textStyle: { color: '#fff' },
    text: 'Blue #268bd2',
  },
  {
    viewBg: { backgroundColor: '#d33682' },
    textStyle: { color: '#fff' },
    text: 'Magenta #d33682',
  },
  {
    viewBg: { backgroundColor: '#cb4b16' },
    textStyle: { color: '#fff' },
    text: 'Orange #cb4b16',
  },
];

const Item = ({ viewBg, viewText, textStyle }) => {
  return (
    <View style={[styles.box, viewBg]}>
      <Text style={[textStyle]}>{viewText}</Text>
    </View>
  );
};

const ColorBox = () => {
  const renderItem = ({ item }) => {
    return (
      <Item
        viewBg={item.viewBg}
        viewText={item.text}
        textStyle={item.textStyle}
      />
    );
  };

  return (
    <>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.text}
      />
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    marginVertical: 4,
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default ColorBox;
