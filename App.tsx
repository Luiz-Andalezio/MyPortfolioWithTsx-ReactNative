// src/App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/components/Home';
import ItinerarioFormativo from './src/components/ItinerarioFormativo';
import AtuacaoProfissional from './src/components/AtuacaoProfissional';
import Projetos from './src/components/Projetos';
import FamiliaAmigosHobby from './src/components/FamiliaAmigosHobby';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Itinerário Formativo" component={ItinerarioFormativo} />
        <Tab.Screen name="Atuação Profissional" component={AtuacaoProfissional} />
        <Tab.Screen name="Projetos" component={Projetos} />
        <Tab.Screen name="Família/Amigos/Hobby" component={FamiliaAmigosHobby} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
