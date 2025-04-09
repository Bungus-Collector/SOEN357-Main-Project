/**
 * Component for the profile icon which
 * redirects to the profile page.
 */

import React from 'react';
import {
  Image,
  TouchableOpacity,
} from 'react-native';
import ProfileIconStyles from './ProfileIconStyles';
import { Routes } from '../../navigation/routes';

const ProfileIcon = ({navigation}) => {
  return (
    <TouchableOpacity style={ProfileIconStyles.TouchableIcon} onPress={() => {navigation.navigate(Routes.Profile);}}>
        <Image source={require('../../static/images/profile.png')} style={ProfileIconStyles.IconImage}/>
    </TouchableOpacity>
  );
};

export default ProfileIcon;
