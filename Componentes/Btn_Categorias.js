import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function Btns_Categorias() {
  const navigation = useNavigation();

  function VerdadoReto() {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Screen_VoR");
        }}
      >
        <LinearGradient
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={styles.button}
        >
          <Text style={styles.text}>Verdad o reto</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
  function QuienEsMas() {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Screen_QuienEsMas");
        }}
      >
        <LinearGradient
          // Button Linear Gradient
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={styles.button}
        >
          <Text style={styles.text}>Quien es más</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
  function YoNuncaNunca() {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Screen_YoNunca");
        }}
      >
        <LinearGradient
          // Button Linear Gradient
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={styles.button}
        >
          <Text style={styles.text}>Yo nunca nunca</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container2}>
      <VerdadoReto />
      <QuienEsMas />
      <YoNuncaNunca />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 15,
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    marginVertical: 35,
    marginHorizontal: 15,
    width: "90%",
    borderRadius: 40,
  },
  container2: {
    border: "black",
    borderWidth: 3,
    flexDirection: "column",
    backgroundColor: "red",
    width: "100%",
  },
});

