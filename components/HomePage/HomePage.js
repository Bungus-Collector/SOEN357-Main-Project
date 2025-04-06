import React, { useContext } from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import HomeStyles from './HomeStyles';
import { Routes } from '../../navigation/routes';
import { UserContext } from '../../contexts/UserContext';
import BottomNav from '../BottomNav/BottomNav';

const HomePage = ({navigation}) => {
  const { username } = useContext(UserContext);

  return (
    <SafeAreaView style={HomeStyles.AndroidSafeArea}>
      <View style={HomeStyles.HeaderArea}>
        <Text style={HomeStyles.HeaderText}>Welcome, {username}!</Text>
      </View>
      <View style={HomeStyles.BodyArea}>
        <Text style={HomeStyles.BodyText}>Body </Text>
      </View>
      <BottomNav navigation={navigation}/>
    </SafeAreaView>
  );
};

export default HomePage;
