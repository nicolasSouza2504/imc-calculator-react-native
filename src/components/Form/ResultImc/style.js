import { StyleSheet } from "react-native";

const stylesResult = StyleSheet.create({
    resultImc: {
        flex: 1,
        marginTop: 20,
        paddingTop: 20,
        borderRadius:  50,
        alignItems: "center",
        width: "100%",
    },
    information:  {
        fontSize: 18,
        color: "#FF0043",
        fontWeight: "bold",
    },
    numberImc: {
        fontSize: 48,
        color: "#FF0043",
        fontWeight: "bold"
    },
    boxShareButton: {
        width: "100%",
        alignItems: "center",
        marginBottom: 10,
    },
    shared: {
        backgroundColor: "#1877f2",
        borderRadius: 50,
        paddingBottom: 5,
        paddingTop: 5,
    },
    sharedText: {
        color: "#ffffff",
        fontWeight: "bold",
        paddingHorizontal: 30,
    }


});

export default stylesResult;