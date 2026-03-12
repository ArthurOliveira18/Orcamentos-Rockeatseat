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
      // 1. O container agora é uma coluna por padrão
        <View style={styles.viewHeader}>
            
            {/* 2. Criamos uma View para agrupar o que fica lado a lado */}
            <View style={styles.headerContent}>
                <View style={styles.viewBudget}>
                    {showBackButton && (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            {/* Dica: use 'chevron-left' do Feather para a seta fina */}
                            <MaterialIcons name="arrow-back-ios" size={24} color="#000" />
                        </TouchableOpacity>
                    )}

                    <Text style={[styles.title, isNotHome && styles.titleBudget]}>
                        {title}
                    </Text>
                </View>

                {showBotton && <Button />}
            </View>

            {/* 3. A linha agora fica embaixo de tudo com 100% de largura */}
            <View style={styles.divider} />
            
        </View>
    )
}