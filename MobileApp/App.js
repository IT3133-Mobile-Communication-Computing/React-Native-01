import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}></View>
    </PaperProvider>
  );
}
