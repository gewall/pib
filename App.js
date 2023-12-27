import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";

import { SafeAreaProvider } from "react-native-safe-area-context";
import Chat from "./src/pages/Chat";
import HomePage from "./src/pages/HomePage";

import { YellowBox } from "react-native";
import ArtikelView from "./src/pages/ArtikelView";
YellowBox.ignoreWarnings([""]);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chat"
              component={Chat}
              options={{ headerTitle: "Chat Bot" }}
            />
            <Stack.Screen
              name="ArtikelView"
              component={ArtikelView}
              options={{ headerTitle: "Artikel" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}

