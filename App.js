import React from "react";
import { Feather } from "@expo/vector-icons";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import InfoScreen from "./screens/InfoScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "Найзууд",
            headerRight: () => (
              <Feather
                onPress={() => navigation.navigate("Info")}
                name="info"
                size={24}
                color="black"
              />
            ),
          })}
        />
        <Stack.Screen name="Info" component={InfoScreen} options={{
          title: 'Info',
          headerRight: () => (
            <Text>@fkvivid</Text>
          )
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
