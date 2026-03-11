import { View, Text,StyleSheet } from "react-native";
import { Header } from "@/components/Header/header"


export function Home() {
    return (
        <View style = { styles.container}>
            <Header title="Orçamentos" subTitle="teste"  isActive =  {false} />
            
        </View>

    )
}

// Criamos o estilo da Home aqui embaixo
const styles = StyleSheet.create({
    container: {
      
       
    }
});