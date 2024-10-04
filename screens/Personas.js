import React, { useState, createContext } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
  Button,
  FlatList,
  Touchable,
  TouchableOpacity,
} from "react-native";
import Btn_Agregar from "../Componentes/Btn_Agregar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const SavedNamesContext = createContext();

const Screen_Personas = ({ navigation }) => {
  const [name, setName] = useState("");
  const [savedNames, setSavedNames] = useState([]);

  const saveNames = () => {
    if (name.trim() !== "") {
      setSavedNames([...savedNames, name]);
      setName("");
    }
  };
  const onPressRemove = (name) => {
    if (savedNames.length <= 0) {
      return;
    }
    const newSelectedNames = [...savedNames];
    newSelectedNames.splice(savedNames.indexOf(name), 1);
    setSavedNames(newSelectedNames);
  };
  const insets = useSafeAreaInsets();

  return (
    <SavedNamesContext.Provider value={{ savedNames, saveNames }}>
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Agregar Nombre</Text>
        </View>

        <TextInput
          placeholder="Ingrese el nombre"
          onChangeText={(text) => setName(text)}
          value={name}
          style={styles.input}
        />
        <Button title="Guardar" onPress={saveNames} color="#17B862" />
        <FlatList
          data={savedNames}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onPressRemove(item)}>
              <Text style={styles.savedName}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SavedNamesContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  headerText: {
    fontSize: 24,
    marginLeft: 10,
    color: "#333",
    fontWeight: "bold",
  },
  img: {
    height: 75,
    width: 75,
    resizeMode: "contain",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  savedName: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Screen_Personas;
