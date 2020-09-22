import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import { View } from 'react-native';
import Home from './src/pages/Home';
import Schedule from './src/pages/Schedule';
import Barber from './src/pages/Barber';
import NewBarber from './src/pages/Barber/New';
import Product from './src/pages/Product';
import NewProduct from './src/pages/Product/New';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import { colors } from './src/styles';

const Stack = createStackNavigator();

const BarberAdmin = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          cardStyle: {
            backgroundColor: colors.white,
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: '',
            headerTitleStyle: {
              alignSelf: 'center',
            },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: 'Criar nova conta',
            headerTitleStyle: {
              alignSelf: 'center',
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Barber Admin',
            headerTitleStyle: {
              alignSelf: 'center',
            },
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="Schedule"
          component={Schedule}
          options={{
            title: 'Agenda',
          }}
        />

        <Stack.Screen
          name="Barber"
          component={Barber}
          options={({ navigation }) => ({
            title: 'Barbeiros',
            headerRight: () => (
              <View style={{ width: 50, paddingTop: 3 }}>
                <Icon
                  style={{ alignSelf: 'center' }}
                  name="plus-circle"
                  type="font-awesome"
                  onPress={() => navigation.navigate('NewBarber')}
                  size={30}
                />
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="NewBarber"
          options={({ route }) => ({
            title: route.params?.readOnly ? 'Editar Barbeiro' : 'Novo Barbeiro',
          })}
          component={NewBarber}
        />

        <Stack.Screen
          name="Product"
          component={Product}
          options={({ navigation }) => ({
            title: 'Produtos',
            headerRight: () => (
              <View style={{ width: 50, paddingTop: 3 }}>
                <Icon
                  style={{ alignSelf: 'center' }}
                  name="plus-circle"
                  type="font-awesome"
                  onPress={() => navigation.navigate('NewProduct')}
                  size={30}
                />
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="NewProduct"
          options={({ route }) => ({
            title: route.params?.readOnly ? 'Editar Produto' : 'Novo Produto',
          })}
          component={NewProduct}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BarberAdmin;
