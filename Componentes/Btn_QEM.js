import { Text, TouchableOpacity, StyleSheet } from "react-native";

const QEM = (props) => {
    const { text, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

export default QEM;

const styles = StyleSheet.create({
    text: {
        fontSize: 28,
        color: "#ffffff",
        fontWeight: "bold",
        textAlign: "center",
    },
    button: {
        marginTop: 70,
        marginHorizontal: 5,
        width: 170,
        height: 70,
        borderRadius: 40,
        backgroundColor: "#e55137",
        justifyContent: 'center',
    },
});

