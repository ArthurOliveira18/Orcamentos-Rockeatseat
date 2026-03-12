import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewInfo: {
        marginTop: 20,
        marginHorizontal: 20, // Margem para a caixa não encostar nas bordas da tela
        backgroundColor: "#FAFAFA",
        borderColor: "#eaeaea",
        borderWidth: 1,   
        borderRadius: 20,
        paddingVertical: 15, // Mantemos o respiro apenas em cima e embaixo
        // Note: sem paddingHorizontal aqui para a linha encostar nos cantos!
    },

    viewInfoIcon: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15, // O recuo do ícone e texto agora fica aqui
        gap: 8
    },

    textInfo: {
        fontSize: 15,
        color: "#00000099",
       
    },

    divider: {
        height: 1,
        backgroundColor: "#eaeaea",
        marginVertical: 15, // Espaço entre o título e os inputs
        width: "100%", // Agora ela vai encostar nas bordas da viewInfo
    },

    viewInput: {
        paddingHorizontal: 15, // O recuo dos inputs agora fica aqui
        gap: 12, // Espaço entre o input de Título e o de Cliente
    },

    textInput: {
        backgroundColor: "#F0F0F0",
        borderRadius: 20,
        borderColor: "#dedede",
        borderWidth: 1,   
        fontSize: 16,
        padding: 15,
        color: "#333",
        textAlign: "left"
    }
});