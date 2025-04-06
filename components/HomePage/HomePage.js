import React, { useContext } from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import HomeStyles from './HomeStyles';
import { UserContext } from '../../contexts/UserContext';
import BottomNav from '../BottomNav/BottomNav';
import ProfileIcon from '../ProfileIcon/ProfileIcon';

const HomePage = ({navigation}) => {
  const { user } = useContext(UserContext);

  return (
    <SafeAreaView style={HomeStyles.AndroidSafeArea}>
      <ProfileIcon navigation={navigation}/>
      <View style={HomeStyles.HeaderArea}>
        <Text style={HomeStyles.HeaderText}>Welcome, {user.username}!</Text>
      </View>
      <View style={HomeStyles.BodyArea}>
        <Text style={HomeStyles.BodyText}>Body </Text>
      </View>
      <BottomNav navigation={navigation}/>
    </SafeAreaView>
  );
};

export default HomePage;
