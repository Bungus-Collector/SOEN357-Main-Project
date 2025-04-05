import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './routes';
import LandingPage from '../components/LandingPage/LandingPage';
import SignupPage from '../components/SignupPage/SignupPage';
import ForgotPassword from '../components/ForgotPasswordPage/ForgotPasswordPage';

const Stack = createStackNavigator();

const MainNavigation = () => {
    return(
        <Stack.Navigator screenOptions={{header: () => null, headerShown: false}} initialRouteName={Routes.Landing}>
            <Stack.Screen name={Routes.Landing} component={LandingPage} />
            <Stack.Screen name={Routes.Signup} component={SignupPage} />
            <Stack.Screen name={Routes.ForgotPassword} component={ForgotPassword} />
        </Stack.Navigator>
    );
};

export default MainNavigation;
