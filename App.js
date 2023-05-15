import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Open up App.js to start working on your app!
            </Text>
            <Text style={styles.welcome}>I'm live with react-native!</Text>
            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "teal",
        alignItems: "center",
        justifyContent: "center",
    },
    welcome: {
        color: "#fff",
    },
});
