import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';

const PalettePreview = ({ palette, handlePress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.heading}>{palette.paletteName}</Text>

      <FlatList
        horizontal
        data={palette.colors.slice(0, 5)}
        renderItem={({ item }) => (
          <View
            style={[styles.colorBox, { backgroundColor: item.hexCode }]}
          ></View>
        )}
        keyExtractor={(item) => item.hexCode}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  colorBox: {
    width: 24,
    height: 24,
    marginRight: 5,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 3,
  },
});

export default PalettePreview;
