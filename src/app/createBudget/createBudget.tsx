import { View, Text, TextProps } from "react-native";

import { Header } from "@/components/Header/header";



export function CreateBudget(){
    return(
        <View>
            <Header title="Criar novo orçamento" subTitle="Não vai aparecer mesmo" isActive = {false} />
        </View>
    )
}