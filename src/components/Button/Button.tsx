import { TouchableOpacity , TouchableOpacityProps, View, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

// 1. Importamos o hook e o tipo genérico de navegação
import { useNavigation, NavigationProp } from '@react-navigation/native'; 

// Muito importante pegar a lista de rotas, pois sem ela não vai dar pra saber exatamente  qual das páginas seria pra ir
import { StackRouteList } from '@/routes/stackRoutes';

import { styles } from "./style";

export function Button(){

    const navigation = useNavigation<NavigationProp<StackRouteList>>();

    function handlenavigationBudget(){
        navigation.navigate("createBudget")
    }

    return(
        <View style = {styles.viewButton}>
            <TouchableOpacity style = {styles.NewBudget} onPress={() => handlenavigationBudget()}>
                <MaterialIcons name="add" size={20} color="#FFFFFF" />
                <Text style = {styles.titleButton}> Novo </Text>
            </TouchableOpacity>
        </View>
    )
}