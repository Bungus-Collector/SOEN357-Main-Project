import React, { useContext } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import GoalTemplateStyles from './GoalTemplateStyles';
import { UserContext } from '../../contexts/UserContext';

const GoalTemplate = ({id, name, description, reward, buttonType}) => {
    const { user, setUser } = useContext(UserContext);

    const buttonPressHandler = () => {
        if(buttonType === 'challenge'){
            acceptChallenge();
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
        const updatedAcceptedChallenges = [...user.acceptedChallenges, {id: id, name: name, description: description, reward: reward}];

        setUser(prev => ({
            ...prev,
            acceptedChallenges: updatedAcceptedChallenges,
            offeredChallenges: updatedOfferedChallenges,
          }));
    };

  return (
    <View style={GoalTemplateStyles.GoalOuter}>
        <View style={GoalTemplateStyles.GoalInner}>
            <Text style={GoalTemplateStyles.GoalNameText}>{name}</Text>
            <Text style={GoalTemplateStyles.GoalText}>{description}{'\n'}+<Text style={GoalTemplateStyles.GoalRewardText}>{reward}</Text> Fit Points</Text>
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
