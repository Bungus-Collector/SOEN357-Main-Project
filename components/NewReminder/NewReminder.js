import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import NewReminderStyles from './NewReminderStyles';
import { UserContext } from '../../contexts/UserContext';
import BottomNav from '../BottomNav/BottomNav';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import { Routes } from '../../navigation/routes';

const NewReminder = ({navigation, route}) => {
  const { reminderType, name, description, time, day, isReoccuring } = route.params;
  const { user, setUser } = useContext(UserContext);
  const [nameInput, setNameInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [dayInput, setDayInput] = useState('');
  const [timeInput, setTimeInput] = useState('');
  const [isreoccuringInput, setIsReoccuringInput] = useState('');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const createNewReminder = () => {
    const updatedReminders = [...user.reminders, {name: nameInput, description: descriptionInput, reminderType: reminderType, day: day, time: time}];

    setUser(prev => ({
        ...prev,
        reminders: updatedReminders,
    }));

    redirect();
  };

  const redirect = () => {
    if (reminderType === 'workout') {
      navigation.navigate(Routes.Workouts);
    } else {
      navigation.navigate(Routes.Meals);
    }
  };

  return (
    <SafeAreaView style={NewReminderStyles.AndroidSafeArea}>
      <ProfileIcon navigation={navigation}/>
      <View style={NewReminderStyles.HeaderArea}>
        <Text style={NewReminderStyles.HeaderText}>My {reminderType === 'workout' ? 'Workout' : 'Meal'} Reminder</Text>
      </View>
      <View style={NewReminderStyles.BodyArea}>
        <TextInput
            style={NewReminderStyles.TextInput}
            placeholder={reminderType === 'workout' ? 'Workout name' : 'Meal name'}
            value={nameInput}
            onChangeText={setNameInput}
        />
        <TextInput
            style={NewReminderStyles.TextInput}
            placeholder="Description"
            value={descriptionInput}
            onChangeText={setDescriptionInput}
        />
        <ScrollView horizontal contentContainerStyle={NewReminderStyles.container}>
            {days.map((dayIteration, index) => (
                <TouchableOpacity
                key={index}
                style={
                    dayInput === dayIteration
                    ? NewReminderStyles.boxSelected
                    : NewReminderStyles.box
                }
                onPress={() => setDayInput(dayIteration)}
                >
                <Text style={NewReminderStyles.text}>{dayIteration}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
        <View style={NewReminderStyles.InfoRow}>
            <Text style={NewReminderStyles.RowItem}>Time:</Text>
            <TextInput
                style={NewReminderStyles.TextInput}
                placeholder="e.g. 3:00 PM"
                value={timeInput}
                onChangeText={setTimeInput}
            />
        </View>
        <View style={NewReminderStyles.InfoRow}>
            <Text style={NewReminderStyles.RowItem}>Reoccuring:</Text>
            <TextInput
                style={NewReminderStyles.SmallTextInput}
                value={isreoccuringInput}
                onChangeText={setIsReoccuringInput}
            />
        </View>
        <View style={NewReminderStyles.ButtonsVerticalFlexContainer}>
            <TouchableOpacity style={NewReminderStyles.CancelButton} onPress={redirect}>
                <Text style={NewReminderStyles.TypeButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={NewReminderStyles.ConfirmButton} onPress={createNewReminder}>
                <Text style={NewReminderStyles.TypeButtonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
      </View>
      <BottomNav navigation={navigation}/>
    </SafeAreaView>
  );
};

export default NewReminder;
