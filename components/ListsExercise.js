import { FlatList, StyleSheet, Text, View } from 'react-native';

const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

const ListsExercise = () => {
  const renderItem = ({ item: { hexCode, colorName } }) => {
    /**
      check for light or dark colors code snippet:
      parseInt(item.hexCode.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black' : 'white'
     */
    const theme =
      colorName === 'Base2' || colorName === 'Base3'
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
        data={COLORS}
        keyExtractor={(item) => item.hexCode}
        renderItem={renderItem}
        ListHeaderComponent={
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Solarized</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 10,
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

export default ListsExercise;
