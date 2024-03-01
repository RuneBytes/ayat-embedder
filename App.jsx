/**
 * React native Dependecies
 */
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, StyleSheet } from "react-native";
/**
 * Internal Dependencies
 */
import AddTimeStamp from "./screens/AddTimeStamp";
import Exporting from "./screens/Exporting";
import Home from "./screens/Home";
import PositionAndTransition from "./screens/PositionAndTransition";
import SelectAyat from "./screens/SelectAyat";
import SelectVideo from "./screens/SelectVideo";
import PreviousProjects from "./screens/PreviousProjects";
/**
 * Main Function
 */
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SelectVideo" component={SelectVideo} />
          <Stack.Screen name="SelectAyat" component={SelectAyat} />
          <Stack.Screen name="AddTimeStamp" component={AddTimeStamp} />
          <Stack.Screen
            name="PositionAndTransition"
            component={PositionAndTransition}
          />
          <Stack.Screen name="Exporting" component={Exporting} />
          <Stack.Screen name="PreviousProjects" component={PreviousProjects} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
