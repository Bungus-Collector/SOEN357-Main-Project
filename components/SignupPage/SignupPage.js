import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import SignupStyles from './SignupStyles';
import LogoStyles from '../../static/images/LogoStyles';
import { Routes } from '../../navigation/routes';

const SignupPage = ({navigation}) => {
  return (
    <SafeAreaView style={SignupStyles.AndroidSafeArea}>
      <View style={SignupStyles.HeaderArea}>
        {/* The logo isnt showing up any I have no idea why */}
        <View style={SignupStyles.Container}>
          <Image source={require('../../static/images/logo.png')} style={LogoStyles.BigLogo} />
        </View>
        <Text style={SignupStyles.HeaderText}>Join FitHealth</Text>
      </View>
      <View style={SignupStyles.BodyArea}>
        <Text style={SignupStyles.BodyText}>Sign up to continue </Text>
            <TextInput
                style={SignupStyles.TextInput}
                placeholder="Username"
            />
            <TextInput
                style={SignupStyles.TextInput}
                placeholder="Email"
            />
            <TextInput
                style={SignupStyles.TextInput}
                placeholder="Password"
                secureTextEntry={true}
            />
            <TextInput
                style={SignupStyles.TextInput}
                placeholder="Confirm Password"
                secureTextEntry={true}
            />
            {/* I was gonna put a checkbox here but it turns out thats actually a huge pain, so I didn't */}
            <Text style={SignupStyles.Label}>Accept terms and conditions</Text>
            <View style={SignupStyles.ContainerCenter}>
                <TouchableOpacity style={SignupStyles.ButtonDefault} title="Sign Up" onPress={() => {navigation.navigate(Routes.Home);}}>
                    <Text style={SignupStyles.ButtonDefaultText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={SignupStyles.ButtonDefault} title="Go back" onPress={() => {navigation.navigate(Routes.Landing);}}>
                    <Text style={SignupStyles.ButtonDefaultText}>Back to Login</Text>
                </TouchableOpacity>
            </View>
      </View>
      <View style={SignupStyles.FooterArea}>
        <Text style={SignupStyles.FooterText}>FitHealth 0.0.1 Prototype{'\n'}Thank you for participating in our demo!</Text>
      </View>
    </SafeAreaView>
  );
};

export default SignupPage;
