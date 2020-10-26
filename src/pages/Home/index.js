import React from 'react';
import { View, ImageBackground } from 'react-native';
import Button from '../../components/Buttons';
import Background from '../../../public/assets/images/barber-background.jpg';

const Home = ({ navigation }) => (
  <ImageBackground style={{ flex: 1 }} source={Background}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        text="Barbeiros"
        onPress={() => navigation.navigate('Barber')}
        icon="scissors"
        style={{ padding: 30 }}
      />
      <Button
        text="Produtos/Serviços"
        onPress={() => navigation.navigate('Product')}
        icon="inbox"
        style={{ padding: 30, marginTop: 20 }}
      />
      <Button
        text="Agenda"
        onPress={() => navigation.navigate('Schedule')}
        icon="calendar"
        style={{ padding: 30, marginTop: 20 }}
      />
    </View>
  </ImageBackground>
);

export default Home;
