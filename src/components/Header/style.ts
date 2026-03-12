import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    title:{
        marginTop:45,
        marginLeft: 15,
        fontSize: 20,
        color:"#6A46EB",
        marginBottom:5,
    },
    subTitle:{
        marginLeft:30,
        color:"#0000008b"
    },

    viewHeader:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"flex-end",
        height:100,
       
    },

    viewBudget:{
        flexDirection: "row",
        alignItems:"center",
        gap: 15,
        marginLeft: 15
    },

    titleBudget:{
        color: "#000",
        fontSize: 20
    }
})