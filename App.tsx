import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// 1. Importamos o DefaultTheme aqui
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { StackRoutes } from '@/routes/stackRoutes';

// 2. Criamos o nosso tema customizado
const meuTema = {
  ...DefaultTheme, 
  colors: {
    ...DefaultTheme.colors, 
    background: '#fafafa',
  },
};

export default function App() {
  return (
    // 3. Passamos o nosso tema para o navegador
    <NavigationContainer theme={meuTema}>
      
      <StackRoutes />

    </NavigationContainer>
  );
}