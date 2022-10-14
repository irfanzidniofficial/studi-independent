import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";

let posts = [];

for (let i = 1; i < 19; i++) {
  posts.push({
    title: `Title ${i}`,
  });
}

export default function FlatListPage({ route }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
      ></FlatList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#9b59b6",
    padding: 10,
    color: "white",
    height: 50,
  },

  title: {
    fontSize: 20,

    fontWeight: "bold",
  },
});
