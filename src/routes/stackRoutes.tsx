import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import { Home } from '@/app/Home/home';
import { CreateBudget } from '@/app/createBudget/createBudget';


// Aqui eu simplesmente estou colocando todas as minhas telas que vai ter aqui, e esse undefined serve justamente para que eu avise que não vou passar nenhum dado, como um ID de usuário
export type StackRouteList = {
    home: undefined,
    createBudget: undefined,
}

// Aqui eu estou criando as rotas e além disso, estou falando que só vai poder pegar as rotas que estão nessa "StackRouteList"
const Stack = createNativeStackNavigator<StackRouteList>()

export type StackRoutesProps<T extends keyof StackRouteList> = NativeStackScreenProps<StackRouteList, T>

export function StackRoutes() {
    return (
        <Stack.Navigator

            initialRouteName="home" // Fixa a 'home' como a primeira tela a ser carregada
            screenOptions={{ headerShown: false }} // Remove o header padrão de TODAS as telas
        >


            <Stack.Screen
                name='home'
                component={Home}
            />

            <Stack.Screen
                name='createBudget'
                component={CreateBudget}
            />



        </Stack.Navigator>
    )
}