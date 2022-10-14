import axios from "axios";
import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function APIList({ route }) {
  const [users, setUsers] = useState([]);
  const USERS = 20;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `https://randomuser.me/api/?results=${USERS}`
        );
        console.log(response.data.result);
        setUsers(response.data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      {console.log(users)}
      <Text
        style={{
          textAlign: "center",
          fontSize: 30,
          paddingLeft: 10,
          color: "white",
          paddingVertical: 8,
        }}
      >
        List Customers
      </Text>

      <ScrollView style={styles.scroll}>
        {users.map((user, idx) => (
          <View style={styles.box} key={idx}>
            <View style={{ flex: 1 }}>
              <Image
                source={{ uri: user.picture.thumbnail }}
                // {user.picture.thumbnail}
                style={{ width: 60, height: 60, borderRadius: 5 }}
              />
            </View>
            <View style={{ flex: 4 }}>
              <Text style={styles.title}>
                {user.name.title} {user.name.first} {user.name.last}
              </Text>
              <Text>
                {user.location.street.number} {user.location.street.name},{" "}
                {user.location.city}, {user.location.country}
              </Text>
              <Text>{user.email}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e67e22",
  },
  item: {
    backgroundColor: "#D3D3D3",
    padding: 10,
    height: 50,
  },
  text: {
    color: "#E6E6FA",
    fontSize: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  scroll: {
    backgroundColor: "#3498db",
    padding: 10,
  },
  box: {
    backgroundColor: "#E6E6FA",
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    flex: 1,
    flexDirection: "row",
  },
});
