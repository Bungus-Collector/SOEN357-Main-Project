import React, { useContext } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import ReminderTemplateStyles from './ReminderTemplateStyles';
import { UserContext } from '../../contexts/UserContext';
import { Routes } from '../../navigation/routes';

const ReminderTemplate = ({navigation, name, description, time, day, reminderType, isReoccuring}) => {
  const { user, setUser } = useContext(UserContext);

  const handleReminderPress = () => {
    navigation.navigate(Routes.NewReminder, { reminderType, name, description, time, day, isReoccuring });
  };

  return (
    <TouchableOpacity style={ReminderTemplateStyles.ReminderOuter} onPress={handleReminderPress}>
      {isReoccuring ? (
        <Text style={ReminderTemplateStyles.ReminderOuterText}>Every {day}</Text>
      ) : (
        <Text style={ReminderTemplateStyles.ReminderOuterText}>{day}</Text>
      )}
      <Text style={ReminderTemplateStyles.ReminderOuterTextBigger}>{time}</Text>
      <View style={ReminderTemplateStyles.ReminderInner}>
        <Text style={ReminderTemplateStyles.ReminderInnerTextBigger}>{name}</Text>
        <Text style={ReminderTemplateStyles.ReminderInnerText}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ReminderTemplate;
