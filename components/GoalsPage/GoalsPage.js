/**
 * Component for the goals page where
 * users create and track new goals.
 */

import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import GoalsStyles from './GoalsStyles';
import { UserContext } from '../../contexts/UserContext';
import BottomNav from '../BottomNav/BottomNav';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import { Routes } from '../../navigation/routes';

const GoalsPage = ({navigation, name, description, type, current, value}) => {
  const { user, setUser } = useContext(UserContext);
  const [nameInput, setNameInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [typeInput, setTypeInput] = useState('');
  const [currentInput, setCurrentInput] = useState('');
  const [valueInput, setValueInput] = useState('');

  const createNewGoal = () => {
    const updatedAcceptedChallenges = [...user.acceptedChallenges, {id: 'u', name: nameInput, description: descriptionInput, type: typeInput, current: currentInput, value: valueInput, challenge: false}];

    setUser(prev => ({
        ...prev,
        acceptedChallenges: updatedAcceptedChallenges,
    }));

    navigation.navigate(Routes.Progress);
  };

  return (
    <SafeAreaView style={GoalsStyles.AndroidSafeArea}>
      <ProfileIcon navigation={navigation}/>
      <View style={GoalsStyles.HeaderArea}>
        <Text style={GoalsStyles.HeaderText}>My Goal</Text>
      </View>
      <View style={GoalsStyles.BodyArea}>
        <View style={GoalsStyles.VerticalFlexContainer}>
            <TouchableOpacity style={(typeInput === 'weightloss' || typeInput === '') ? GoalsStyles.TypeButtonSelected : GoalsStyles.TypeButton} onPress={() => {setTypeInput('weightloss');}}>
                <Text style={GoalsStyles.TypeButtonText}>Weight loss</Text>
            </TouchableOpacity>
            <TouchableOpacity style={typeInput === 'calories' ? GoalsStyles.TypeButtonSelected : GoalsStyles.TypeButton} onPress={() => {setTypeInput('calories');}}>
                <Text style={GoalsStyles.TypeButtonText}>Calories burned</Text>
            </TouchableOpacity>
            <TouchableOpacity style={typeInput === 'exercise' ? GoalsStyles.TypeButtonSelected : GoalsStyles.TypeButton} onPress={() => {setTypeInput('exercise');}}>
                <Text style={GoalsStyles.TypeButtonText}>Exercises</Text>
            </TouchableOpacity>
        </View>
        <TextInput
            style={GoalsStyles.TextInput}
            placeholder="Goal name"
            value={nameInput}
            onChangeText={setNameInput}
        />
        <TextInput
            style={GoalsStyles.BigTextInput}
            placeholder="Description"
            value={descriptionInput}
            onChangeText={setDescriptionInput}
        />
        <View style={GoalsStyles.InfoRow}>
            <Text style={GoalsStyles.RowItem}>Current:</Text>
            <TextInput
                style={GoalsStyles.SmallTextInput}
                value={currentInput}
                onChangeText={setCurrentInput}
            />
        </View>
        <View style={GoalsStyles.InfoRow}>
            <Text style={GoalsStyles.RowItem}>Target:</Text>
            <TextInput
                style={GoalsStyles.SmallTextInput}
                value={valueInput}
                onChangeText={setValueInput}
            />
        </View>
        <View style={GoalsStyles.ButtonsVerticalFlexContainer}>
            <TouchableOpacity style={GoalsStyles.CancelButton} onPress={() => {navigation.navigate(Routes.Progress);}}>
                <Text style={GoalsStyles.TypeButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={GoalsStyles.ConfirmButton} onPress={createNewGoal}>
                <Text style={GoalsStyles.TypeButtonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
      </View>
      <BottomNav navigation={navigation}/>
    </SafeAreaView>
  );
};

export default GoalsPage;
