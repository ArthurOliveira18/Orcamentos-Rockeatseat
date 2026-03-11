import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// Importação de páginas de funcionalidade
import { Home } from '@/app/Home/home';

import { StackRoutes } from '@/routes/stackRoutes';

export default function App() {
  return (
    <NavigationContainer>
      
      <StackRoutes />

    </NavigationContainer>
  );

}
