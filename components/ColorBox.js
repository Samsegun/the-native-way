import React from 'react';
import { Text, View, StyleSheet, FlatList, SectionList } from 'react-native';

const DATA = [
  {
    title: 'primary colors',
    data: [
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
    ],
    // viewBg: { backgroundColor: '#2aa198' },
    // textStyle: { color: '#fff' },
    // text: 'Cyan #2aa198',
  },
  //   {
  //     title: 'primary colors',
  //     viewBg: { backgroundColor: '#268bd2' },
  //     textStyle: { color: '#fff' },
  //     text: 'Blue #268bd2',
  //   },
  {
    title: 'secondary colors',
    data: [
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
    ],
    // viewBg: { backgroundColor: '#d33682' },
    // textStyle: { color: '#fff' },
    // text: 'Magenta #d33682',
  },
  //   {
  // title: 'primary colors',
  // viewBg: { backgroundColor: '#cb4b16' },
  // textStyle: { color: '#fff' },
  // text: 'Orange #cb4b16',
  //   },
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
      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.text}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.head}>{title}</Text>
        )}
        ListEmptyComponent={<Text>list is empty</Text>}
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
  head: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ColorBox;
