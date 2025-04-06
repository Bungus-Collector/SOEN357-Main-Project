import React, { useContext } from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import { UserContext } from '../../contexts/UserContext';
import ProfileStyles from './ProfileStyles';
import BottomNav from '../BottomNav/BottomNav';

const ProfilePage = ({navigation}) => {
  const { user } = useContext(UserContext);
  return (
    <SafeAreaView style={ProfileStyles.AndroidSafeArea}>
      <View style={ProfileStyles.HeaderArea}>
        <Image source={require('../../static/images/profile.png')} style={ProfileStyles.ProfileImage}/>
        <Text style={ProfileStyles.HeaderText}>My Profile</Text>
      </View>
      <View style={ProfileStyles.BodyArea}>
        <View style={ProfileStyles.VerticalFlexContainer}>
          <View style={ProfileStyles.StatsArea}>
            <View style={ProfileStyles.StatsBox}>
              <Text style={ProfileStyles.StatsBoxText}>{user.streak} days</Text>
            </View>
            <Text style={ProfileStyles.StatsText}>Longest Streak</Text>
          </View>
          <View style={ProfileStyles.StatsArea}>
            <View style={ProfileStyles.StatsBox}>
              <Text style={ProfileStyles.StatsBoxText}>{user.fitpoints}</Text>
            </View>
            <Text style={ProfileStyles.StatsText}>Total Fit Points</Text>
          </View>
        </View>
        <View style={ProfileStyles.PersonalInformationArea}>
          <Text style={ProfileStyles.PersonalInformationText}>Personal Information:</Text>
          <View style={ProfileStyles.InfoRow}>
            <Text style={ProfileStyles.RowItem}>Username:</Text>
            <Text style={ProfileStyles.RowItem}>{user.username}</Text>
          </View>
          <View style={ProfileStyles.InfoRow}>
            <Text style={ProfileStyles.RowItem}>Email:</Text>
            <Text style={ProfileStyles.RowItem}>{user.email}</Text>
          </View>
        </View>
        <View style={ProfileStyles.VerticalFlexContainer}>
          <TouchableOpacity style={ProfileStyles.ButtonDefault} title="Change Email">
            <Text style={ProfileStyles.ButtonDefaultText}>Change Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ProfileStyles.ButtonDefault} title="Change Password">
            <Text style={ProfileStyles.ButtonDefaultText}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </View>
      <BottomNav navigation={navigation}/>
    </SafeAreaView>
  );
};

export default ProfilePage;
