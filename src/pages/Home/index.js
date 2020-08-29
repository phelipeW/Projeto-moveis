import React from 'react';
import { View } from 'react-native';
import Button from '../../components/Buttons';
// import { Container } from './styles';

const Home = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button text="Barbeiros" onPress={() => navigation.navigate('Barber')} />
    <Button text="Agenda" onPress={() => navigation.navigate('Schedule')} />
    <Button
      text="Produtos/Serviços"
      onPress={() => navigation.navigate('Product')}
    />
  </View>
);

export default Home;
