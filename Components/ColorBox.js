import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function ColorBox({ colorName, colorHex }) {
  const boxColor = {
    backgroundColor: colorHex,
  };
  /*
  Identify the background color and change the text color properly.
  */
  const textColor = {
    color:
      parseInt(colorHex.replace("#", ""), 16) > 0xffffff / 1.1
        ? "black"
        : "white",
  };
  return (
    <View style={[styles.box, boxColor]}>
      <Text style={textColor}>
        {colorName} : {colorHex}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 50,
  },
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
