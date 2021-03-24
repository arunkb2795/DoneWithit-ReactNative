import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import PalettePreview from "../Components/PalettePreview";

export default function Home({ navigation, route }) {
  const newColorPalette = route.params
    ? route.params.newColorPalette
    : undefined;
  // useState
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefresh, isSetRefresh] = useState(false);

  // useCallback
  const handleFetchPalette = useCallback(async () => {
    const response = await fetch(
      "https://color-palette-api.kadikraman.now.sh/palettes"
    );
    if (response.ok) {
      const palettes = await response.json();
      setColorPalettes(palettes);
    }
  }, []);

  //useEffect
  useEffect(() => {
    handleFetchPalette();
  }, []);

  useEffect(() => {
    if (newColorPalette) {
      setColorPalettes((palettes) => [newColorPalette, ...palettes]);
    }
  }, [newColorPalette]);

  const handleRefresh = useCallback(async () => {
    isSetRefresh(true);
    await handleFetchPalette();
    isSetRefresh(false);
  }, []);

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("ColorPaletteModal");
        }}
      >
        <Text>Add New Palette</Text>
      </TouchableOpacity>

      <FlatList
        data={colorPalettes}
        renderItem={({ item }) => (
          <PalettePreview
            handlePress={() =>
              navigation.navigate("ColorPalette", {
                paletteName: item.paletteName,
                colors: item.colors,
              })
            }
            ColorPalette={item}
          />
        )}
        keyExtractor={(item) => item.paletteName}
        refreshing={isRefresh}
        onRefresh={handleRefresh}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    paddingVertical: 20,
  },
});
