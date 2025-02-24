import { TouchableOpacity, Text, StyleSheet } from "react-native"

interface ButtonProps {
    onPress: () => void
    title: string
    }

const Button =({ onPress, title }: ButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#007bff",
        padding: 12,
        borderRadius: 5,
        marginVertical: 10,
        alignItems: "center",
        width: 200,
    },
    text: {
        color: "white",
        fontSize: 16,
    }
 })

export default Button