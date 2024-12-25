import { StyleSheet, View } from "react-native";
import { Text, Divider } from "react-native-paper";
import { Button } from "react-native-paper";

export default function Home() {
  return (
    <>
      <Text variant="headlineLarge">Headline Large</Text>
      <Divider />
      <Text variant="bodyMedium" style={styles.body}>
        The morning mist clung to the ground like a forgotten memory, hiding the
        secrets of the night. In the distance, the first rays of sunlight
        filtered through the trees, turning the dew on the leaves into tiny
        jewels that shimmered with a quiet radiance. Birds began to stir, their
        songs rising in harmony with the growing warmth of the day. A gentle
        breeze whispered through the forest, stirring the leaves in a soft
        symphony that felt almost like a lullaby. By the edge of the forest, a
        small village lay nestled among rolling hills, its cottages built from
        weathered stone and timber. The streets were narrow and cobbled, winding
        between the homes in a maze that seemed to have no beginning or end. The
        village was peaceful, its people starting their daily routines with a
        sense of familiarity, as though time had no hold here. The aroma of
        fresh bread and brewing tea filled the air, mingling with the scent of
        wood smoke from chimneys. It was a place where the seasons changed, but
        the rhythms of life remained the same. In the center of the village
        stood a grand oak tree, its branches reaching skyward as if it were
        trying to touch the heavens. For as long as anyone could remember, it
        had been there, standing tall and strong through storms and sunshine
        alike. Beneath its shade, the villagers gathered to share stories, to
        seek advice, or simply to sit in quiet companionship. Today, like every
        other, a small group had gathered beneath its canopy, exchanging news
        and laughing together as children ran in circles, their voices ringing
        with carefree joy. The village blacksmith, a burly man with a beard as
        thick as a winter coat, was discussing the latest order he had
        received—a custom-made horseshoe for the mayor's prized stallion. His
        deep voice rumbled like thunder as he gestured to the hammer and anvil
        at his side. His wife, a kind-hearted woman with hands that had known
        the work of both cooking and mending, stood nearby, smiling as she
        watched him talk. She carried a basket full of freshly picked herbs, her
        apron covered in flour from the morning's baking. Together, they made
        the perfect pair, each complementing the other's strengths. Further down
        the lane, the village baker was busy pulling loaves of bread from the
        oven. His bakery smelled of yeast and warmth, a welcome scent to anyone
        passing by. The baker had an easy smile and a knack for making everyone
        feel at home, whether they were picking up their daily loaf or simply
        stopping by for a chat. His daughter, a young girl with a bright red
        ribbon in her hair, helped him by arranging the freshly baked bread on
        the shelves. She had a kind heart, always quick to offer a helping hand
        to anyone who needed it. Across from the bakery, the village inn stood,
        its wooden sign swaying gently in the breeze. The innkeeper, a man of
        few words but many stories, had built the inn from the ground up. He had
        a small staff to help him run the place, but it was his attention to
        detail that made the inn special. The rooms were cozy, with thick
        blankets and windows that looked out over the hills. The inn's hearth
        was always lit, offering warmth to travelers and locals alike. The
        innkeeper was known for his fine ale and hearty meals, which brought in
        visitors from nearby towns. But it was the stories he shared with those
        who stayed the night that made the inn a favorite among all who passed
        through.
      </Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Press me
      </Button>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: 8,
    textAlign: "justify",
  },
});
