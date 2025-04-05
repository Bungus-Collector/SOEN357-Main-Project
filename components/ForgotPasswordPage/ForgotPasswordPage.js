import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import ForgotPasswordStyles from './ForgotPasswordStyles';
import { Routes } from '../../navigation/routes';

const SignupPage = ({navigation}) => {
  return (
    <SafeAreaView style={ForgotPasswordStyles.AndroidSafeArea}>
        <View style={ForgotPasswordStyles.HeaderArea}>
            <Text style={ForgotPasswordStyles.HeaderText}>Too bad</Text>
        </View>
        <View style={ForgotPasswordStyles.HeaderArea}>
            <TouchableOpacity style={ForgotPasswordStyles.ButtonDefault} title="Go back" onPress={() => {navigation.navigate(Routes.Landing);}}>
                <Text style={ForgotPasswordStyles.ButtonDefaultText}>Go back</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

export default SignupPage;
