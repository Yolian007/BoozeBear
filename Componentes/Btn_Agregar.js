import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Agregar = (props) => {
    const { text, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Agregar;

const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        color: "red",
        fontWeight: "bold",
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
});
