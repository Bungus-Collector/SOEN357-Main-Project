import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import SignupStyles from './SignupStyles';
import LogoStyles from '../../static/images/LogoStyles';
import { Routes } from '../../navigation/routes';
import { UserContext } from '../../contexts/UserContext';

const SignupPage = ({navigation}) => {
  const { setUser } = useContext(UserContext);
  const [usernameInput, setUsernameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');

  const handleSubmit = () => {
    if(usernameInput === ''){
      Alert.alert('Incomplete signup', 'Please enter a username!', [
        {
          text: 'Ok',
        },
      ],
      { cancelable: true });
      return null;
    }
    if(emailInput === ''){
      Alert.alert('Incomplete signup', 'Please enter an email!', [
        {
          text: 'Ok',
        },
      ],
      { cancelable: true });
      return null;
    }
    if(passwordInput === ''){
      Alert.alert('Incomplete signup', 'Please enter a password!', [
        {
          text: 'Ok',
        },
      ],
      { cancelable: true });
      return null;
    }
    if(confirmPasswordInput !== passwordInput){
      Alert.alert('Signup error', 'Passwords dont match!', [
        {
          text: 'Ok',
        },
      ],
      { cancelable: true });
      return null;
    }

    setUser(prev => ({
      ...prev,
      username: usernameInput,
      email: emailInput,
    }));
    navigation.navigate(Routes.Home);
  };
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
                value={usernameInput}
                onChangeText={setUsernameInput}
            />
            <TextInput
                style={SignupStyles.TextInput}
                placeholder="Email"
                value={emailInput}
                onChangeText={setEmailInput}
            />
            <TextInput
                style={SignupStyles.TextInput}
                placeholder="Password"
                secureTextEntry={true}
                value={passwordInput}
                onChangeText={setPasswordInput}
            />
            <TextInput
                style={SignupStyles.TextInput}
                placeholder="Confirm Password"
                secureTextEntry={true}
                value={confirmPasswordInput}
                onChangeText={setConfirmPasswordInput}
            />
            {/* I was gonna put a checkbox here but it turns out thats actually a huge pain, so I didn't */}
            <Text style={SignupStyles.Label}>Accept terms and conditions</Text>
            <View style={SignupStyles.ContainerCenter}>
                <TouchableOpacity style={SignupStyles.ButtonDefault} title="Sign Up" onPress={handleSubmit}>
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
