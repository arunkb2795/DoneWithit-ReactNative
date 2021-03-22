import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import ColorBox from "../Components/ColorBox";

export default function ColorPalette({ route }) {
  const { colors, paletteName } = route.params;
  const renderItem = ({ item }) => (
    <ColorBox colorName={item.colorName} colorHex={item.hexCode} />
  );
  return (
    <View>
      <FlatList
        data={colors}
        renderItem={renderItem}
        style={styles.container}
        keyExtractor={(item) => item.colorName}
        ListHeaderComponent={() => (
          <Text style={styles.text}>{paletteName}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 10, paddingTop: 20 },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  box: {
    padding: 10,
    marginBottom: 5,
    marginTop: 10,
  },
});
