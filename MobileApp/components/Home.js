import { StyleSheet, View } from "react-native";
import { Text, Divider } from "react-native-paper";

export default function Home() {
  return (
    <>
      <Text variant="headlineLarge">Headline Large</Text>
      <Divider />
      <Text variant="bodyMedium" style={styles.body}>
        The shimmering light of the moon danced upon the rippling surface of the
        tranquil lake, casting a silvery glow across the landscape. Beneath the
        ancient oak tree, a curious fox watched, its ears twitching at the faint
        sounds of the forest. Somewhere in the distance, the hoot of an owl
        broke the serene silence, a reminder of the mysteries hidden in the
        shadowy depths of the night. As the breeze carried the scent of blooming
        jasmine, time seemed to pause, leaving the world in a dreamlike
        stillness."
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: 8,
    textAlign: "justify",
  },
});
