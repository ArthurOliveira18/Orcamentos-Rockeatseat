import { Text, TextProps, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


import { Button } from "@/components/Button/Button"
import { styles } from "@/components/Header/style"
import { use } from "react";


type Props = TextProps & {
    title: string,
    subTitle: string,
    isActive: boolean,
    showBotton: boolean,
    showBackButton: boolean,
    isNotHome: boolean,

}

export function Header({ title, subTitle, isActive, showBotton, showBackButton, isNotHome, ...rest }: Props) {

    const navigation = useNavigation()

    return (
        <View style={styles.viewHeader}>

            <View style={styles.viewBudget}>
                {showBackButton && (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons name="arrow-back-ios" size={24} />
                    </TouchableOpacity>
                )}

                
                <Text 
                style = 
                {[styles.titleBudget, 
                    //  Aqui estou fazendo uma verificação junto ao estilo, se for true o isNotHome, então vai mostrar o estilo da página budget 
                    isNotHome ? styles.titleBudget : styles.title
                ]}>  

                {title}
                   
                </Text>

            </View>



            {isActive && (
                <Text style={styles.subTitle}>
                    {subTitle}

                </Text>


            )}

            {showBotton && (
                <Button />
            )}




        </View>
    )
}