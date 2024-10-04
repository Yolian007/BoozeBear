import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Principal = (props) => {
    const { text, onPress, styleType } = props;

    const getButtonStyle = () => {
        switch (styleType) {
            case "buttonVoR":
                return styles.buttonVoR;
            case "buttonQEM":
                return styles.buttonQEM;
            default:
                return styles.buttonVoR;
        }
    };

    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, getButtonStyle()]}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Principal;

const styles = StyleSheet.create({
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
    buttonVoR: {
        marginTop: 45,
        marginHorizontal: 15,
        width: 60,
        height: 60,
        backgroundColor: "#d53032",
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonQEM: {
        marginTop: 45,
        marginHorizontal: 15,
        width: 60,
        height: 60,
        backgroundColor: "#42214b",
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
