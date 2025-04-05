import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LandingStyles from './LandingStyles';
import LogoStyles from '../../static/images/LogoStyles';
import { Routes } from '../../navigation/routes';

const LandingPage = ({navigation}) => {
  return (
    <SafeAreaView style={LandingStyles.AndroidSafeArea}>
      <View style={LandingStyles.HeaderArea}>
        <View style={LogoStyles.Container}>
          <Image source={require('../../static/images/logo.png')} style={LogoStyles.BigLogo} />
        </View>
        <Text style={LandingStyles.HeaderText}>Welcome to FitHealth</Text>
      </View>
      <View style={LandingStyles.BodyArea}>
        <Text style={LandingStyles.BodyText}>Log in or sign up to continue </Text>
        <TextInput
            style={LandingStyles.TextInput}
            placeholder="Email"
        />
        <TextInput
            style={LandingStyles.TextInput}
            placeholder="Password"
            secureTextEntry={true}
        />
        <Text style={LandingStyles.ForgotPassword} onPress={() => {navigation.navigate(Routes.ForgotPassword);}}>Forgot password</Text>
        <View style={LandingStyles.ContainerCenter}>
            <TouchableOpacity style={LandingStyles.ButtonDefault} title="Log in" onPress={() => null}>
                <Text style={LandingStyles.ButtonDefaultText}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={LandingStyles.ButtonDefault} title="Sign up" onPress={() => {navigation.navigate(Routes.Signup);}}>
                <Text style={LandingStyles.ButtonDefaultText}>Sign up</Text>
            </TouchableOpacity>
        </View>
      </View>
      <View style={LandingStyles.FooterArea}>
        <Text style={LandingStyles.FooterText}>FitHealth 0.0.1 Prototype{'\n'}Thank you for participating in our demo!</Text>
      </View>
    </SafeAreaView>
  );
};

export default LandingPage;
