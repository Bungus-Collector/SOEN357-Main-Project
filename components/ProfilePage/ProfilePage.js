import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import ProfileStyles from './ProfileStyles';
import BottomNav from '../BottomNav/BottomNav';

const ProfilePage = ({navigation}) => {
  return (
    <SafeAreaView style={ProfileStyles.AndroidSafeArea}>
      <View style={ProfileStyles.HeaderArea}>
        <Text style={ProfileStyles.HeaderText}>My Profile</Text>
      </View>
      <View style={ProfileStyles.BodyArea}>
        <Text style={ProfileStyles.BodyText}>Body </Text>
      </View>
      <BottomNav navigation={navigation}/>
    </SafeAreaView>
  );
};

export default ProfilePage;
