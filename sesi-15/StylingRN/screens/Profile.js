import { Image, StyleSheet, Text, View } from "react-native";

const MarginTop = () => <View style={{ marginTop: 10 }} />;
export default function Profile({ route }) {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image
          style={styles.tinyLogo}
          source={require("../assets/elon-musk.png")}
        />
        <Text style={styles.text}>Welcome to Profile Pages</Text>
      </View>
      <MarginTop />
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 15, color: "#ecf0f1" }}>
          Muhammad Irfan Zidni
        </Text>
        <Text style={{ fontSize: 15, color: "#ecf0f1" }}>RCTN-KS05-002</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e67e22",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    paddingVertical: 10,
    textDecorationLine: "underline",
  },
  rowButton: {
    flexDirection: "row",
    margin: 1,
  },
});
