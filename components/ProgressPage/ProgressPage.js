import React, { useContext } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ProgressStyles from './ProgressStyles';
import BottomNav from '../BottomNav/BottomNav';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import HorizontalRule from '../HorizontalRule/HorizontalRule';
import { UserContext } from '../../contexts/UserContext';
import GoalTemplate from '../GoalTemplate/GoalTemplate';
import { Routes } from '../../navigation/routes';

const ProgressPage = ({navigation}) => {
  const { user } = useContext(UserContext);

  return (
    <SafeAreaView style={ProgressStyles.AndroidSafeArea}>
      <ProfileIcon navigation={navigation}/>
      <View style={ProgressStyles.HeaderArea}>
        <Text style={ProgressStyles.HeaderText}>My Progress</Text>
      </View>
      <View style={ProgressStyles.BodyArea}>
        <Text style={ProgressStyles.BodyText}>Goals </Text>
        <HorizontalRule/>
        <View style={ProgressStyles.ContainerCenter}>
          {user.acceptedChallenges.length === 0
            ? <Text style={ProgressStyles.DisplayText}>No goals to display. Create one or accept one now!</Text>
            : <FlatList style={ProgressStyles.FlatList}
              data={user.acceptedChallenges}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <GoalTemplate
                  navigation={navigation}
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  reward={item.reward}
                  challenge={item.challenge}
                  buttonType={'check'}
                  />
              )}
            />}
          <TouchableOpacity style={ProgressStyles.AddNewButton} onPress={() => navigation.navigate(Routes.Goals, {name: '', description: '', type: 'weightloss'})}>
            <Text style={ProgressStyles.Plus}>+</Text>
            <Text style={ProgressStyles.AddNewButtonText}>New Goal</Text>
          </TouchableOpacity>
        </View>
        <Text style={ProgressStyles.BodyText}>Weekly Challenges </Text>
        <HorizontalRule/>
        <View style={ProgressStyles.ContainerCenter}>
          {user.offeredChallenges.length === 0
            ? <Text style={ProgressStyles.DisplayText}>You've accepted all the challenges for this week!</Text>
            : <FlatList style={ProgressStyles.WeeklyChallengesFlatList}
              data={user.offeredChallenges}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <GoalTemplate
                  navigation={navigation}
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  reward={item.reward}
                  challenge={item.challenge}
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

export default ProgressPage;
