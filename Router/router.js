//router.js
import React from 'react';
import { createStackNavigator,createDrawerNavigator ,createBottomTabNavigator,createSwitchNavigator} from 'react-navigation';
import SignInScreen from "../Component/SignInScreen";
import SignUpScreen from '../Component/SignUpScreen';
import HomScreen from '../Component/HomeScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Component/HomeScreen';

const Register =  createStackNavigator(
    {
       
        SignIn:{
        screen:SignInScreen,
        navigationOptions: {
            title: "Sign Up ",
            header:null
          }
        },
        SignUp: {
            screen:SignUpScreen, 
            navigationOptions: {
                title: "Sign In",
                header:null
              }
        },
        HomScreen1: {
            screen:HomScreen,
            navigationOptions: {
                title: "Sign In",
                header:null
              }
        }
    });

const AppStack = createStackNavigator({
    
        Home:{
            screen:HomeScreen
        }
    
})

const Route = createSwitchNavigator(
    {
    Authentication:Register,
    App:AppStack
    
},
{
    initialRouteName: 'Authentication',
  }
  )






export default  Route