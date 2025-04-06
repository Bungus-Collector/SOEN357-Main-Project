import React, { useContext } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import MealsStyles from './MealsStyles';
import BottomNav from '../BottomNav/BottomNav';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import HorizontalRule from '../HorizontalRule/HorizontalRule';
import { UserContext } from '../../contexts/UserContext';
import ReminderTemplate from '../ReminderTemplate/ReminderTemplate';
import { Routes } from '../../navigation/routes';

const MealsPage = ({navigation}) => {
  const { user } = useContext(UserContext);

  return (
    <SafeAreaView style={MealsStyles.AndroidSafeArea}>
      <ProfileIcon navigation={navigation}/>
      <View style={MealsStyles.HeaderArea}>
        <Text style={MealsStyles.HeaderText}>My Meal Reminders</Text>
      </View>
      <View style={MealsStyles.BodyArea}>
      <HorizontalRule/>
        <View style={MealsStyles.ContainerCenter}>
        {user.acceptedChallenges.length === 0
            ? <Text style={MealsStyles.DisplayText}>No meals to display.</Text>
            : <FlatList style={MealsStyles.FlatList}
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
          <TouchableOpacity style={MealsStyles.AddNewButton} onPress={() => navigation.navigate(Routes.NewReminder, {reminderType: 'meal'})}>
            <Text style={MealsStyles.Plus}>+</Text>
            <Text style={MealsStyles.AddNewButtonText}>New reminder</Text>
          </TouchableOpacity>
        </View>
      </View>
      <BottomNav navigation={navigation}/>
    </SafeAreaView>
  );
};

export default MealsPage;
