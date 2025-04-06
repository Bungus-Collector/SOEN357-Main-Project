import React, { useContext } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import GoalsStyles from './ProgressStyles';
import BottomNav from '../BottomNav/BottomNav';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import HorizontalRule from '../HorizontalRule/HorizontalRule';
import { UserContext } from '../../contexts/UserContext';
import GoalTemplate from '../GoalTemplate/GoalTemplate';

const GoalsPage = ({navigation}) => {
  const { user } = useContext(UserContext);

  return (
    <SafeAreaView style={GoalsStyles.AndroidSafeArea}>
      <ProfileIcon navigation={navigation}/>
      <View style={GoalsStyles.HeaderArea}>
        <Text style={GoalsStyles.HeaderText}>My Progress</Text>
      </View>
      <View style={GoalsStyles.BodyArea}>
        <Text style={GoalsStyles.BodyText}>Goals </Text>
        <HorizontalRule/>
        <View style={GoalsStyles.ContainerCenter}>
          {user.acceptedChallenges.length === 0
            ? <Text style={GoalsStyles.DisplayText}>No goals to display. Create one or accept one now!</Text>
            : <FlatList style={GoalsStyles.FlatList}
              data={user.acceptedChallenges}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <GoalTemplate
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  reward={item.reward}
                  buttonType={'goal'}
                  />
              )}
            />}
          <TouchableOpacity style={GoalsStyles.AddNewButton}>
            <Text style={GoalsStyles.Plus}>+</Text>
            <Text style={GoalsStyles.AddNewButtonText}>New Goal</Text>
          </TouchableOpacity>
        </View>
        <Text style={GoalsStyles.BodyText}>Weekly Challenges </Text>
        <HorizontalRule/>
        <View style={GoalsStyles.ContainerCenter}>
          {user.offeredChallenges.length === 0
            ? <Text style={GoalsStyles.DisplayText}>You've accepted all the challenges for this week!</Text>
            : <FlatList style={GoalsStyles.WeeklyChallengesFlatList}
              data={user.offeredChallenges}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <GoalTemplate
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  reward={item.reward}
                  buttonType={'challenge'}
                  />
              )}
              />
          }
        </View>
      </View>
      <BottomNav navigation={navigation}/>
    </SafeAreaView>
  );
};

export default GoalsPage;
