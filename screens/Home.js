import React from 'react';
import {
  View,
  Text,
  SectionList,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import PalettePreview from '../components/PalettePreview';

// const COLORPALETTE = [
//   {
//     title: 'Solarized',
//     data: [
//       { colorName: 'Base03', hexCode: '#002b36' },
//       { colorName: 'Base02', hexCode: '#073642' },
//       { colorName: 'Base01', hexCode: '#586e75' },
//       { colorName: 'Base00', hexCode: '#657b83' },
//       { colorName: 'Base0', hexCode: '#839496' },
//       { colorName: 'Base1', hexCode: '#93a1a1' },
//       { colorName: 'Base2', hexCode: '#eee8d5' },
//       { colorName: 'Base3', hexCode: '#fdf6e3' },
//       { colorName: 'Yellow', hexCode: '#b58900' },
//       { colorName: 'Orange', hexCode: '#cb4b16' },
//       { colorName: 'Red', hexCode: '#dc322f' },
//       { colorName: 'Magenta', hexCode: '#d33682' },
//       { colorName: 'Violet', hexCode: '#6c71c4' },
//       { colorName: 'Blue', hexCode: '#268bd2' },
//       { colorName: 'Cyan', hexCode: '#2aa198' },
//       { colorName: 'Green', hexCode: '#859900' },
//     ],
//   },
//   {
//     title: 'Frontend Masters',
//     data: [
//       { colorName: 'Red', hexCode: '#FF0000' },
//       { colorName: 'Orange', hexCode: '#FF7F00' },
//       { colorName: 'Yellow', hexCode: '#FFFF00' },
//       { colorName: 'Green', hexCode: '#00FF00' },
//       { colorName: 'Violet', hexCode: '#8B00FF' },
//     ],
//   },
//   {
//     title: 'Rainbow',
//     data: [
//       { colorName: 'Red', hexCode: '#c02d28' },
//       { colorName: 'Black', hexCode: '#3e3e3e' },
//       { colorName: 'Grey', hexCode: '#8a8a8a' },
//       { colorName: 'White', hexCode: '#ffffff' },
//       { colorName: 'Orange', hexCode: '#e66225' },
//     ],
//   },
// ];

const SOLARIZED = [
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

const RAINBOW = [
  { colorName: 'Red', hexCode: '#FF0000' },
  { colorName: 'Orange', hexCode: '#FF7F00' },
  { colorName: 'Yellow', hexCode: '#FFFF00' },
  { colorName: 'Green', hexCode: '#00FF00' },
  { colorName: 'Violet', hexCode: '#8B00FF' },
];

const FRONTEND_MASTERS = [
  { colorName: 'Red', hexCode: '#c02d28' },
  { colorName: 'Black', hexCode: '#3e3e3e' },
  { colorName: 'Grey', hexCode: '#8a8a8a' },
  { colorName: 'White', hexCode: '#ffffff' },
  { colorName: 'Orange', hexCode: '#e66225' },
];

const COLOR_PALETTES = [
  { paletteName: 'Solarized', colors: SOLARIZED },
  { paletteName: 'Rainbow', colors: RAINBOW },
  { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
];

const Home = ({ navigation }) => {
  // const renderItem = ({ item }) => {
  //   console.log(item);
  //   return (
  //     <TouchableOpacity
  //       onPress={() => navigation.navigate('ColorPalette', { colors: item })}
  //     >
  //       <View>
  //         <FlatList
  //           horizontal
  //           data={item.slice(0, 5)}
  //           renderItem={({ item }) => {
  //             return (
  //               <View
  //                 style={[styles.colorBox, { backgroundColor: item.hexCode }]}
  //               ></View>
  //             );
  //           }}
  //           keyExtractor={(item) => item.hexCode}
  //         />
  //       </View>
  //     </TouchableOpacity>
  //   );
  // };

  return (
    <View style={styles.container}>
      <FlatList
        data={COLOR_PALETTES}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => {
          return (
            <PalettePreview
              onPress={() => navigation.navigate('ColorPalette', item)}
              palette={item}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 10,
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
  },
});

export default Home;
