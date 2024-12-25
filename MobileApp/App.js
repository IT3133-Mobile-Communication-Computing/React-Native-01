import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import Home from "./components/Home";

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Home />
      </View>
    </PaperProvider>
  );
}
