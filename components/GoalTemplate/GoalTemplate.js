import React, { useContext } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import GoalTemplateStyles from './GoalTemplateStyles';
import { UserContext } from '../../contexts/UserContext';
import { Routes } from '../../navigation/routes';

const GoalTemplate = ({navigation, id, name, description, reward, type, challenge, buttonType}) => {
    const { user, setUser } = useContext(UserContext);

    const buttonPressHandler = () => {
        if(buttonType === 'challenge'){
            acceptChallenge();
        }
        if(buttonType === 'check'){
            // Do nothing, for now...
        }
    };

    const acceptChallenge = () => {
        Alert.alert('Challenge Accepted!', '', [
        {
            text: 'Its on!',
        },
        ],
        { cancelable: true });

        const updatedOfferedChallenges = user.offeredChallenges.filter(offeredChallenges => offeredChallenges.id !== id);
        const updatedAcceptedChallenges = [...user.acceptedChallenges, {id: id, name: name, description: description, reward: reward, type: type, challenge: challenge}];

        setUser(prev => ({
            ...prev,
            acceptedChallenges: updatedAcceptedChallenges,
            offeredChallenges: updatedOfferedChallenges,
          }));
    };

  return ( // TODO add redirect for the edit button
    <View style={GoalTemplateStyles.GoalOuter}>
        <View style={GoalTemplateStyles.GoalInner}>
            {!challenge
                ? <TouchableOpacity><Image source={require('../../static/images/edit.png')} style={GoalTemplateStyles.EditIcon}/></TouchableOpacity>
                : <></>}
            <Text style={GoalTemplateStyles.GoalNameText}>{name}</Text>
            <Text style={GoalTemplateStyles.GoalText}>{description}</Text>
            {challenge
                ? <Text style={GoalTemplateStyles.GoalText}>+<Text style={GoalTemplateStyles.GoalRewardText}>{reward}</Text> Fit Points</Text>
                : <></>}
            <TouchableOpacity style={GoalTemplateStyles.GoalButton} onPress={buttonPressHandler}>
                {buttonType === 'challenge'
                    ? <Text style={GoalTemplateStyles.GoalButtonText}>Accept the challenge!!!</Text>
                    : <Text style={GoalTemplateStyles.GoalButtonText}>Check progress</Text>}
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default GoalTemplate;
