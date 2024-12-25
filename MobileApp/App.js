import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { Text } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text variant="headlineLarge">Headline Large</Text>
        <Divider />
        <Text variant="bodyMedium">
          The shimmering light of the moon danced upon the rippling surface of
          the tranquil lake, casting a silvery glow across the landscape.
          Beneath the ancient oak tree, a curious fox watched, its ears
          twitching at the faint sounds of the forest. Somewhere in the
          distance, the hoot of an owl broke the serene silence, a reminder of
          the mysteries hidden in the shadowy depths of the night. As the breeze
          carried the scent of blooming jasmine, time seemed to pause, leaving
          the world in a dreamlike stillness."
        </Text>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    padding: 8,
    textAlign: "justify",
  },
});
