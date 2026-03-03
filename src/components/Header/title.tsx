import { Text, TextProps } from "react-native";
import { styles } from "@/components/Header/style"
import { View } from "react-native";

export function Title({ ...rest }: TextProps) {
    return (
        <View>
            <Text style={styles.title}  {...rest}>
                Orçamentos
            </Text>
            <Text style={styles.subTitle}>Você tem dois itens em rascunho</Text>
        </View>
    )
}