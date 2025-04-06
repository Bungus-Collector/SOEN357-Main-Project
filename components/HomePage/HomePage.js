import React, { useContext } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import HomeStyles from './HomeStyles';
import { UserContext } from '../../contexts/UserContext';
import BottomNav from '../BottomNav/BottomNav';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import { Routes } from '../../navigation/routes';

const HomePage = ({navigation}) => {
  const { user } = useContext(UserContext);

  return (
    <SafeAreaView style={HomeStyles.AndroidSafeArea}>
      <ProfileIcon navigation={navigation}/>
      <View style={HomeStyles.HeaderArea}>
        <Text style={HomeStyles.HeaderText}>Welcome, {user.username}!</Text>
      </View>
      <View style={HomeStyles.BodyArea}>
        <View style={HomeStyles.ContainerCenter}>
          <TouchableOpacity style={HomeStyles.ButtonDefault} title="My Workout" onPress={() => navigation.navigate(Routes.Workouts)}>
            <Image source={require('../../static/images/clock.png')} style={HomeStyles.ButtonIcon}/>
            <Text style={HomeStyles.ButtonDefaultText}>My Workout</Text>
          </TouchableOpacity>
          <TouchableOpacity style={HomeStyles.ButtonDefault} title="My Meal Plan" onPress={() => navigation.navigate(Routes.Meals)}>
            <Image source={require('../../static/images/food.png')} style={HomeStyles.ButtonIcon}/>
            <Text style={HomeStyles.ButtonDefaultText}>My Meal Plan</Text>
          </TouchableOpacity>
        </View>
        <View style={HomeStyles.ReminderArea}>
          {user.reminders.length
            ? <Text style={HomeStyles.ReminderText}>Under construction: this is where upcoming reminders will go</Text>
            : <Text style={HomeStyles.ReminderText}>No upcoming reminders!</Text>}
        </View>
      </View>
      <BottomNav navigation={navigation}/>
    </SafeAreaView>
  );
};

export default HomePage;
