import { StyleSheet, Text, View } from "react-native";
import Nav from "./components/Nav";
import Icon from 'react-native-vector-icons/Ionicons';
// import Profile from '../Assets/Images/Profile'



export default function Page() {
  return (
    <View style={styles.container}>
      <Nav/>
      <Icon  size={30} color="#900" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
