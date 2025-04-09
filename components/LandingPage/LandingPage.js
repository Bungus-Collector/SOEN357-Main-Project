/**
 * Component for the sign in page.
 */

import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import LandingStyles from './LandingStyles';
import LogoStyles from '../../static/images/LogoStyles';
import { Routes } from '../../navigation/routes';
import { UserContext } from '../../contexts/UserContext';

const LandingPage = ({navigation}) => {
  const { setUser } = useContext(UserContext);
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleSubmit = () => {
    if(usernameInput === ''){
      Alert.alert('Incomplete login', 'Please enter your username!', [
        {
          text: 'Ok',
        },
      ],
      { cancelable: true });
      return null;
    }
    if(passwordInput === ''){
      Alert.alert('Incomplete login', 'Please enter your password!', [
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
    }));
    navigation.navigate(Routes.Home);
  };

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
            placeholder="Username"
            value={usernameInput}
            onChangeText={setUsernameInput}
        />
        <TextInput
            style={LandingStyles.TextInput}
            placeholder="Password"
            secureTextEntry={true}
            value={passwordInput}
            onChangeText={setPasswordInput}
        />
        <Text style={LandingStyles.ForgotPassword} onPress={() => {navigation.navigate(Routes.ForgotPassword);}}>Forgot password</Text>
        <View style={LandingStyles.ContainerCenter}>
            <TouchableOpacity style={LandingStyles.ButtonDefault} title="Log in" onPress={handleSubmit}>
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
