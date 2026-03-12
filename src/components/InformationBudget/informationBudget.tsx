import { View, Text, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";


import { Header } from "../Header/header";
import { styles } from "./style"

export function InformationBudget() {
    return (
        <View style={styles.viewInfo}>
            <View style={styles.viewInfoIcon}>
                <MaterialIcons name="storefront" size={15} style={{ color: "#6A46EB" }} />
                <Text style={styles.textInfo}> Informações gerais</Text>
            </View>
            
            <View style={styles.divider} />

            <View style={styles.viewInput}>
                <TextInput style={styles.textInput} placeholder="Titulo do orçamento" />
                <TextInput style={styles.textInput} placeholder="Cliente" />
            </View>
        </View>
    )
}