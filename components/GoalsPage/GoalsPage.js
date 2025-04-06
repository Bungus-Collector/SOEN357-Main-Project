import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import GoalsStyles from './GoalsStyles';
import BottomNav from '../BottomNav/BottomNav';
import ProfileIcon from '../ProfileIcon/ProfileIcon';

const GoalsPage = ({navigation}) => {
  return (
    <SafeAreaView style={GoalsStyles.AndroidSafeArea}>
      <ProfileIcon navigation={navigation}/>
      <View style={GoalsStyles.HeaderArea}>
        <Text style={GoalsStyles.HeaderText}>My Progress</Text>
      </View>
      <View style={GoalsStyles.BodyArea}>
        <Text style={GoalsStyles.BodyText}>Body </Text>
      </View>
      <BottomNav navigation={navigation}/>
    </SafeAreaView>
  );
};

export default GoalsPage;
