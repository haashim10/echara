import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { env } from "./env";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={styles.envText}>API URL: {env.EXPO_PUBLIC_API_URL}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  envText: {
    marginTop: 16,
    color: "#555",
  },
});
