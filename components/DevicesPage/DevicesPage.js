import React, { useContext } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DevicesStyles from './DevicesStyles';
import BottomNav from '../BottomNav/BottomNav';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import { UserContext } from '../../contexts/UserContext';

const ProfilePage = ({navigation}) => {
  const { user } = useContext(UserContext);

  return (
    <SafeAreaView style={DevicesStyles.AndroidSafeArea}>
      <ProfileIcon navigation={navigation}/>
      <View style={DevicesStyles.HeaderArea}>
        <Text style={DevicesStyles.HeaderText}>My Devices</Text>
      </View>
      <View style={DevicesStyles.BodyArea}>
        <View style={DevicesStyles.ContainerCenter}>
          {user.devices.length
            ? <Text style={DevicesStyles.DisplayText}>Under construction: Devices will be displayed here</Text>
            : <Text style={DevicesStyles.DisplayText}>No devices to display.</Text>}
          <TouchableOpacity style={DevicesStyles.AddNewButton}>
            <Text style={DevicesStyles.Plus}>+</Text>
            <Text style={DevicesStyles.AddNewButtonText}>Link new device</Text>
          </TouchableOpacity>
        </View>
      </View>
      <BottomNav navigation={navigation}/>
    </SafeAreaView>
  );
};

export default ProfilePage;
