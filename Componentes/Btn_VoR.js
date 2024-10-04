import { Text, TouchableOpacity, StyleSheet } from "react-native";

const VoR = (props) => {
    const { text, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

export default VoR;

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: "#ffffff",
        fontWeight: "bold",
        textAlign: "center",
    },
    button: {
        marginVertical: 10,
        marginHorizontal: 5,
        width: 70,
        height: 34,
        borderRadius: 20,
        backgroundColor: "#660000",
        justifyContent: 'center',
    },
});

