import React, { useContext } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import WorkoutsStyles from './WorkoutsStyles';
import BottomNav from '../BottomNav/BottomNav';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import HorizontalRule from '../HorizontalRule/HorizontalRule';
import { UserContext } from '../../contexts/UserContext';
import ReminderTemplate from '../ReminderTemplate/ReminderTemplate';
import { Routes } from '../../navigation/routes';

const WorkoutsPage = ({navigation}) => {
  const { user } = useContext(UserContext);

  return (
    <SafeAreaView style={WorkoutsStyles.AndroidSafeArea}>
      <ProfileIcon navigation={navigation}/>
      <View style={WorkoutsStyles.HeaderArea}>
        <Text style={WorkoutsStyles.HeaderText}>My Workout Reminders</Text>
      </View>
      <View style={WorkoutsStyles.BodyArea}>
      <HorizontalRule/>
        <View style={WorkoutsStyles.ContainerCenter}>
        {user.acceptedChallenges.length === 0
            ? <Text style={WorkoutsStyles.DisplayText}>No reminders to display.</Text>
            : <FlatList style={WorkoutsStyles.FlatList}
              data={user.reminders}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <ReminderTemplate
                  name={item.name}
                  description={item.description}
                  day={item.day}
                  time={item.time}
                  isReoccuring={item.isReoccuring}
                  reminderType={item.reminderType}
                  />
              )}
            />}
          <TouchableOpacity style={WorkoutsStyles.AddNewButton} onPress={() => navigation.navigate(Routes.NewReminder, {reminderType: 'workout'})}>
            <Text style={WorkoutsStyles.Plus}>+</Text>
            <Text style={WorkoutsStyles.AddNewButtonText}>New reminder</Text>
          </TouchableOpacity>
        </View>
      </View>
      <BottomNav navigation={navigation}/>
    </SafeAreaView>
  );
};

export default WorkoutsPage;
