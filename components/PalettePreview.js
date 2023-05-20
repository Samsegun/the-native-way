import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';

const PalettePreview = ({ palette, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.heading}>{palette.paletteName}</Text>

      {/* <FlatList
        horizontal
        data={palette.slice(0, 5)}
        renderItem={({ item }) => (
          <View
            style={[styles.colorBox, { backgroundColor: item.hexCode }]}
          ></View>
        )}
        keyExtractor={(item) => item.hexCode}
      /> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  colorBox: {
    width: 24,
    height: 24,
    marginRight: 5,
    marginVertical: 10,
  },
});

export default PalettePreview;
