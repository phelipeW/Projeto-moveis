import React from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

const Home = ({ navigation }) => (
  <View>
    <Text>Home </Text>
    <Button title="Agenda" onPress={() => navigation.navigate('Agenda')}>
      <Text>Agenda</Text>
    </Button>
  </View>
);

export default Home;
