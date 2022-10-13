import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Incompleted from '../screens/pending';
import Completed from '../screens/complete';

const Tab = createMaterialTopTabNavigator();

const Tabnav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
   
    >
        <Tab.Screen name="Pending" component={Incompleted} />
        <Tab.Screen name="Completed" component={Completed} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Tabnav;
