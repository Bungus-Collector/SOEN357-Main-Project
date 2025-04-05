/**
 * SOEN 357 Main Project Code Prototype
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import LandingPage from './components/LandingPage/LandingPage';
import MainNavigation from './navigation/MainNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
