import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import { View } from 'react-native';
import Home from './src/pages/Home';
import Schedule from './src/pages/Schedule';
import NewSchedule from './src/pages/Schedule/New';
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
          headerStyle: {
            backgroundColor: colors.dark,
          },
          headerTitleStyle: {
            color: colors.white,
            alignSelf: 'center',
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: '',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: 'Criar nova conta',
            headerRight: () => <View />,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Barber Admin',
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="Schedule"
          component={Schedule}
          options={({ navigation }) => ({
            title: 'Agenda',
            headerRight: () => (
              <View style={{ width: 50, paddingTop: 3 }}>
                <Icon
                  style={{ alignSelf: 'center' }}
                  name="plus-circle"
                  type="font-awesome"
                  onPress={() => navigation.navigate('NewSchedule')}
                  size={30}
                  color={colors.white}
                />
              </View>
            ),
          })}
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
                  color={colors.white}
                />
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="NewBarber"
          options={({ route }) => ({
            title: route?.params?.readOnly
              ? 'Editar Barbeiro'
              : 'Novo Barbeiro',
            headerRight: () => <View />,
          })}
          component={NewBarber}
        />

        <Stack.Screen
          name="Product"
          component={Product}
          options={({ navigation }) => ({
            title: 'Produtos/Serviços',
            headerRight: () => (
              <View style={{ width: 50, paddingTop: 3 }}>
                <Icon
                  style={{ alignSelf: 'center' }}
                  name="plus-circle"
                  type="font-awesome"
                  onPress={() => navigation.navigate('NewProduct')}
                  size={30}
                  color={colors.white}
                />
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="NewProduct"
          options={({ route }) => ({
            title: route?.params?.readOnly
              ? 'Editar Produto/Serviço'
              : 'Novo Produto/Serviço',
            headerRight: () => <View />,
          })}
          component={NewProduct}
        />
        <Stack.Screen
          name="NewSchedule"
          options={{
            title: 'Criar agendamento',
            headerRight: () => <View />,
          }}
          component={NewSchedule}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BarberAdmin;
