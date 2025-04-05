import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
} from 'react-native';
import SignupStyles from './SignupStyles';
import LogoStyles from '../../static/images/LogoStyles';
import { Routes } from '../../navigation/routes';

const SignupPage = ({navigation}) => {
  return (
    <SafeAreaView style={SignupStyles.AndroidSafeArea}>
      <View style={SignupStyles.HeaderArea}>
        <View style={SignupStyles.Container}>
          <Image source={require('../../static/images/logo.png')} style={LogoStyles.BigLogo} />
        </View>
        <Text style={SignupStyles.HeaderText}>Sign up to continue</Text>
      </View>
      <View style={SignupStyles.BodyArea}>
        <Text style={SignupStyles.BodyText}>Here is where the body will go</Text>
      </View>
      <View style={SignupStyles.FooterArea}>
        <Text style={SignupStyles.FooterText}>FitHealth 0.0.1 Prototype{'\n'}Thank you for participating in our demo!</Text>
      </View>
    </SafeAreaView>
  );
};

export default SignupPage;
