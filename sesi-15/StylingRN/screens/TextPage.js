import { useState } from "react";
import { View, Text, StatusBar, StyleSheet, TextInput } from "react-native";

export default function TextPage({ route }) {
  const [input, setInput] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params.name}</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Masukan teks disini"
        onChangeText={(text) => setInput(text)}
        defaultValue={input}
      />
      <Text style={{ padding: 10, fontSize: 25 }}>
        The text you entered : {input}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1c40f",
    justifyContent: "center",
    padding: 25,
  },
  text: {
    color: "#002B5B",
    fontSize: 30,
  },
  textInput: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#16a085",
    height: 60,
    color: "white",
  },
  rowButton: {
    flexDirection: "row",
    margin: 1,
  },
  title: {
    marginVertical: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 15,
    backgroundColor: "#ecf0f1",
    color: "black",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});
