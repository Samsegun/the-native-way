import { FlatList, StyleSheet, Text, View } from 'react-native';

const ColorPalette = ({ route }) => {
  const { colors } = route.params;

  const renderItem = ({ item: { hexCode, colorName } }) => {
    // check for light or dark colors code snippet:
    const theme =
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? styles.darkText
        : styles.lightText;

    return (
      <View style={[styles.box, { backgroundColor: hexCode }]}>
        <Text style={theme}>
          {colorName} {hexCode}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={colors}
        keyExtractor={(item) => item.hexCode}
        renderItem={renderItem}
        // ListHeaderComponent={
        //   <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Solarized</Text>
        // }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
  },
  box: {
    padding: 10,
    marginVertical: 4,
    alignItems: 'center',
    borderRadius: 5,
  },
  lightText: {
    color: '#fff',
  },
  darkText: {
    color: '#000',
  },
});

export default ColorPalette;
