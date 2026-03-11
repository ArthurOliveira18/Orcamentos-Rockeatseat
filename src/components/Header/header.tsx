import { Text, TextProps } from "react-native";
import { styles } from "@/components/Header/style"

import { Button } from "@/components/Button/Button"
import { View } from "react-native";

type Props = TextProps & {
    title: string,
    subTitle: string,
    isActive: boolean
}

export function Header({ title, subTitle, isActive, ...rest }: Props) {
    return (
        <View style={styles.viewHeader}>
            <Text style={styles.title}  {...rest} >
                {title}
            </Text>

            {isActive && (
                <Text style={styles.subTitle}>
                    {subTitle}
                </Text>


            )}

            <Button/>
        </View>
    )
}