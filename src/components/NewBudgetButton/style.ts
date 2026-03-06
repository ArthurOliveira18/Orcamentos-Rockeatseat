import { StyleSheet } from "react-native";
import { NewBudgetButton } from "./newBudgetButton";

export const styles = StyleSheet.create({

    viewButton:{
        marginLeft: 15
    },

    NewBudget:{
        backgroundColor:"#7d35b9",
        width:100,
        justifyContent: "center",
        alignItems: "center",
        padding: 12,
        borderRadius: 40,
        flexDirection: "row",
        marginRight:15,
        marginBottom:5
    },

    titleButton:{
        color: "#fff",
        fontSize: 15
    }
})