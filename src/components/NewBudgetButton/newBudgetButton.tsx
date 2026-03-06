import { TouchableOpacity , TouchableOpacityProps, View, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from "./style";

export function NewBudgetButton(){
    return(
        <View style = {styles.viewButton}>
            <TouchableOpacity style = {styles.NewBudget}>
                <MaterialIcons name="add" size={20} color="#FFFFFF" />
                <Text style = {styles.titleButton}> Novo </Text>
            </TouchableOpacity>
        </View>
    )
}