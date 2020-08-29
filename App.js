import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home';
import Agenda from './src/pages/Agenda';
import Barbeiros from './src/pages/Barbeiros';
import Produtos from './src/pages/Produtos';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Barber Admin',
            headerTitleStyle: {
              alignSelf: 'center',
            },
          }}
        />
        <Stack.Screen name="Agenda" component={Agenda} />
        <Stack.Screen name="Barbeiros" component={Barbeiros} />
        <Stack.Screen name="Produtos" component={Produtos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
