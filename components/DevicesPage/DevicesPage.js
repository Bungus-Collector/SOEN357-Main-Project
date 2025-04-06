import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import DevicesStyles from './DevicesStyles';
import BottomNav from '../BottomNav/BottomNav';

const ProfilePage = ({navigation}) => {
  return (
    <SafeAreaView style={DevicesStyles.AndroidSafeArea}>
      <View style={DevicesStyles.HeaderArea}>
        <Text style={DevicesStyles.HeaderText}>My Devices</Text>
      </View>
      <View style={DevicesStyles.BodyArea}>
        <Text style={DevicesStyles.BodyText}>Body </Text>
      </View>
      <BottomNav navigation={navigation}/>
    </SafeAreaView>
  );
};

export default ProfilePage;
