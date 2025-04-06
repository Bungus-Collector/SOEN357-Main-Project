/* eslint-disable react/self-closing-comp */
import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import BottomNavStyles from './BottomNavStyles';
import { Routes } from '../../navigation/routes';

const BottomNav = ({navigation}) => {
  return (
    <>
        <View style={BottomNavStyles.FlexPadding}></View>
        <View style={BottomNavStyles.BottomNav}>
            <View style={BottomNavStyles.Icon}>
                <TouchableOpacity style={BottomNavStyles.TouchableIcon} onPress={() => {navigation.navigate(Routes.Home);}}>
                    <Image source={require('../../static/images/home.png')} style={BottomNavStyles.IconImage}/>
                    <Text style={BottomNavStyles.BottomNavText}>Home</Text>
                </TouchableOpacity>
            </View>
            <View style={BottomNavStyles.Icon}>
                <TouchableOpacity style={BottomNavStyles.TouchableIcon} onPress={() => {navigation.navigate(Routes.Goals);}}>
                    <Image source={require('../../static/images/progress.png')} style={BottomNavStyles.IconImage}/>
                    <Text style={BottomNavStyles.BottomNavText}>My Progress</Text>
                </TouchableOpacity>
            </View>
            <View style={BottomNavStyles.Icon}>
                <TouchableOpacity style={BottomNavStyles.TouchableIcon} onPress={() => {navigation.navigate(Routes.Devices);}}>
                    <Image source={require('../../static/images/devices.png')} style={BottomNavStyles.IconImage}/>
                    <Text style={BottomNavStyles.BottomNavText}>My Devices</Text>
                </TouchableOpacity>
            </View>
        </View>
    </>
  );
};

export default BottomNav;
