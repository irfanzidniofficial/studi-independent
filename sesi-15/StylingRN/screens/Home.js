import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function Home({ navigation }) {
  const handleProfile = () => {
    navigation.navigate("Profile", { name: "Hello Profile" });
  };
  const handleText = () => {
    navigation.navigate("Text", { name: "Hello Text" });
  };
  const handleColumn = () => {
    navigation.navigate("Column", { name: "Hello Column" });
  };
  const handleFlatList = () => {
    navigation.navigate("FlatList", { name: "Hello FlatList" });
  };
  const handleScrollView = () => {
    navigation.navigate("ScrollView", { name: "Hello ScrollView" });
  };
  const handleAPIList = () => {
    navigation.navigate("APIList", { name: "Customers" });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require("../assets/hactiv8.png")}
      />
      <Text style={styles.text}>Welcome Page Home</Text>
      <View style={styles.rowButton}>
        <View style={{ flex: 1, marginHorizontal: 1 }}>
          <Button
            title="Profile"
            color="#e67e22"
            onPress={() => handleProfile()}
          />
        </View>
        <View style={{ flex: 1, marginHorizontal: 1 }}>
          <Button title="Text" color="#95a5a6" onPress={() => handleText()} />
        </View>
        <View style={{ flex: 1, marginHorizontal: 1 }}>
          <Button
            title="Column"
            color="#9b59b6"
            onPress={() => handleColumn()}
          />
        </View>
      </View>
      <View style={styles.rowButton}>
        <View style={{ flex: 1, marginHorizontal: 1 }}>
          <Button
            title="Scrollview"
            color="#f1c40f"
            onPress={() => handleScrollView()}
          />
        </View>
        <View style={{ flex: 1, marginHorizontal: 1 }}>
          <Button
            title="Flat List"
            color="#E9967A"
            onPress={() => handleFlatList()}
          />
        </View>
      </View>
      <View style={styles.rowButton}>
        <View style={{ flex: 1, marginHorizontal: 1 }}>
          <Button
            title="Random list"
            color="#2ecc71"
            onPress={() => handleAPIList()}
          />
        </View>
      </View>
      <StatusBar style="auto" />
      <Text style={styles.createBy}>Dibuat oleh: Muhammad Irfan Zidni</Text>
      <Text style={styles.code}>Kode Peserta: RCTN-KS05-002</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3498db",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  tinyLogo: {
    width: 180,
    height: 180,
  },
  text: {
    color: "#002B5B",
    fontSize: 28,
    marginBottom: 20,
  },
  rowButton: {
    flexDirection: "row",
    margin: 1,
  },
  createBy: {
    color: "#ecf0f1",
    fontSize: 18,
    marginTop: 30,
  },
  code: {
    fontSize: 18,
    color: "#ecf0f1",
    textDecorationLine: "underline",
    textDecorationColor: "white",
  },
});
