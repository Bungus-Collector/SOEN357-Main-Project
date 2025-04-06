/**
 * SOEN 357 Main Project Code Prototype
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';
import { UserProvider } from './contexts/UserContext';

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
