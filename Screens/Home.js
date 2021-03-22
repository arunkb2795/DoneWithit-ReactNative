import React, { useState, useCallback, useEffect } from "react";
import { View, FlatList } from "react-native";
import PalettePreview from "../Components/PalettePreview";

export default function Home({ navigation }) {
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

  const handleRefresh = useCallback(async () => {
    isSetRefresh(true);
    await handleFetchPalette();
    isSetRefresh(false);
  }, []);

  return (
    <View>
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
