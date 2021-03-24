import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
export default function PalettePreview({ handlePress, ColorPalette }) {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>{ColorPalette.paletteName}</Text>
      <FlatList
        style={styles.container}
        horizontal={true}
        data={ColorPalette.colors.slice(0, 5)}
        renderItem={({ item }) => (
          <View style={[styles.box, { backgroundColor: item.hexCode }]}></View>
        )}
        keyExtractor={(item) => item.colorName}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: { fontWeight: "bold" },
  box: {
    padding: 10,
    marginBottom: 5,
    marginTop: 10,
    marginRight: 5,
  },
  container: { width: "100%" },
});
