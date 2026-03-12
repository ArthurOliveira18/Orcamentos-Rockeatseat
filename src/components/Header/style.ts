import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  
    viewHeader: {
        // Sem flexDirection row aqui! Queremos empilhar a linha embaixo do conteúdo
        height: 110, // Aumentei um pouco para caber a linha
        justifyContent: "flex-end",
        backgroundColor: '#FFF' // Geralmente o header é branco
    },

    headerContent: {
        flexDirection: "row", // Só o conteúdo (Título e Botão) fica lado a lado
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingBottom: 10, // Espaço entre o texto e a linha
    },

    viewBudget: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },

    title: {
        marginTop: 0, // Limpamos as margens para o flex alinhar
        fontSize: 20,
        color: "#6A46EB",
        fontWeight: 'bold'
    },

    titleBudget: {
        color: "#000",
        fontSize: 20
    },
    
    divider: {
        height: 1,
        backgroundColor: "#eaeaea",
        width: "100%", 
    },
})