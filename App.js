import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ColorPalette from "./Screens/ColorPalette";
import Home from "./Screens/Home";
import PaletteModal from "./Screens/PaletteModal";

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();
const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="ColorPaletteModal" component={PaletteModal} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
