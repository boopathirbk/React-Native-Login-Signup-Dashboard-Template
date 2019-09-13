import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack'; 
import LoginUser from './pages/auth/LoginScreen';
import SignupUser from './pages/auth/SignupScreen';
import ForgotUser from './pages/auth/ForgotScreen'
import ProfileUser from './pages/main/ProfileScreen';
import { Button, Text } from 'native-base';
import DashboardUser from './pages/main/DashboardScreen';

const App = createStackNavigator({
 
  Login: {
    screen: LoginUser,
    headerMode: 'none',
    navigationOptions: {
      header: null,
    },
  },
  Signup: {
    screen: SignupUser,
    navigationOptions: {
      title: 'Signup',
      headerStyle: { backgroundColor: '#6c2ef2' },
      headerTintColor: '#ffffff',
    },
  },
  Forgot: {
    screen: ForgotUser,
    navigationOptions: {
      title: 'Forgot Password',
      headerStyle: { backgroundColor: '#6c2ef2' },
      headerTintColor: '#ffffff',
    },
  },
  Profile: {
    screen: ProfileUser,
    navigationOptions: {
      title: 'Register Profile ',
      headerTitleStyle: { flex: 1, textAlign: 'center'},
      headerStyle: { backgroundColor: '#6c2ef2' },
      headerTintColor: '#ffffff',
      header: null,    
    }
    },  

    Dashboard: {
      screen: DashboardUser,
      navigationOptions: {
        title: 'Dashboard',
        headerTitleStyle: { flex: 1, textAlign: 'center'},
        headerStyle: { backgroundColor: '#6c2ef2' },
        headerTintColor: '#ffffff',
        header: null,
      },
    }, 
  
});
export default createAppContainer(App);