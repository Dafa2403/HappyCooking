import * as React from 'react';
import {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import add from './sc/tambah';
import profile from './sc/profile';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SS from './sc/splashScreen';
import HomeScreen from './sc/HomeScreen';
import Detail from './sc/Detail';
import Login from './sc/Login';
import SignUp from './sc/SignUp';
import Camera from './sc/camera';
import Edit from './sc/editProfile';


const HomeStack = createNativeStackNavigator();

function HomeStackScreen(){
  return(
    <HomeStack.Navigator initialRouteName='splash'>
      
      <HomeStack.Group screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="splash" component={SS}/>
        <HomeStack.Screen name="Home" component={MyTabs}/>
       
      </HomeStack.Group>
      <HomeStack.Screen name="Login" component={Login}/>
      <HomeStack.Screen name="SignUp" component={SignUp}/>
      <HomeStack.Screen name="Detail" component={Detail}/>
      <HomeStack.Screen name="Camera" component={Camera}/>
      <HomeStack.Screen name="Edit" component={Edit}/>
    </HomeStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarIcon: ({focused,color,size}) =>{
        if (route.name === 'HomeScreen'){
          return(
            <FontAwesome5 name={
              focused ? 'home' : 'home'}
                size={size}
                color={color}
              />
          );
        }
        else if (route.name === 'Tambah Resep'){
          return(
            <FontAwesome5 name={focused ? 'plus-circle' : 'plus-circle'}
            size={size}
            color={color}
            />
          );
        }
        else if (route.name === 'Profile'){
          return(
            <FontAwesome5 name={focused ? 'user-circle' : 'user-circle'}
            size={size}
            color={color}
            />
          );
        }
      },
      tabBarInactiveTintColor: '#000',
      tabBarActiveTintColor: '#FF8A01',
    })}
    >
      <Tab.Group screenOptions={{ headerShown: false }}>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
      </Tab.Group>
      <Tab.Screen name="Tambah Resep" component={add}/>
      <Tab.Screen name="Profile" component={profile}/>
    </Tab.Navigator>
  );
}



const styles = require('./style');

export default function App() {
  return (
    <NavigationContainer>
      <HomeStackScreen />
    </NavigationContainer>
  );
}
