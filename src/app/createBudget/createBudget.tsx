import { View, Text, TextProps } from "react-native";

import { Header } from "@/components/Header/header";
import { InformationBudget } from "@/components/InformationBudget/informationBudget";



export function CreateBudget(){
    return(
        <View>
            <Header title="Orçamentos" subTitle="Não vai aparecer mesmo" isActive = {false} showBotton = {false} showBackButton={true} isNotHome = {true} />

            <InformationBudget/>
        </View>
    )
}