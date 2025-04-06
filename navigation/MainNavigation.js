import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './routes';
import LandingPage from '../components/LandingPage/LandingPage';
import SignupPage from '../components/SignupPage/SignupPage';
import ForgotPassword from '../components/ForgotPasswordPage/ForgotPasswordPage';
import Home from '../components/HomePage/HomePage';
import Profile from '../components/ProfilePage/ProfilePage';
import Progress from '../components/ProgressPage/ProgressPage';
import Devices from '../components/DevicesPage/DevicesPage';
import Goals from '../components/GoalsPage/GoalsPage';
import Workouts from '../components/WorkoutsPage/WorkoutsPage';
import NewReminder from '../components/NewReminder/NewReminder';
import Meals from '../components/MealsPage/MealsPage';

const Stack = createStackNavigator();

const MainNavigation = () => {
    return(
        <Stack.Navigator screenOptions={{header: () => null, headerShown: false}} initialRouteName={Routes.Landing}>
            <Stack.Screen name={Routes.Landing} component={LandingPage} />
            <Stack.Screen name={Routes.Signup} component={SignupPage} />
            <Stack.Screen name={Routes.ForgotPassword} component={ForgotPassword} />
            <Stack.Screen name={Routes.Home} component={Home} />
            <Stack.Screen name={Routes.Profile} component={Profile} />
            <Stack.Screen name={Routes.Progress} component={Progress} />
            <Stack.Screen name={Routes.Devices} component={Devices} />
            <Stack.Screen name={Routes.Goals} component={Goals} />
            <Stack.Screen name={Routes.Workouts} component={Workouts} />
            <Stack.Screen name={Routes.NewReminder} component={NewReminder} />
            <Stack.Screen name={Routes.Meals} component={Meals} />
        </Stack.Navigator>
    );
};

export default MainNavigation;
