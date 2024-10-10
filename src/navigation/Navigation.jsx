

import React from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../splashscreen/SplashScreen';
import { navigationRef } from './../utils/NavigationUtils';

const Stack = createNativeStackNavigator();



const Navigation = () => {
    return (
        <NavigationContainer ref={navigationRef} >
            <Stack.Navigator
            initialRouteName='SplashScreen'
            screenOptions={{
                 headerShown:false
            }}
            >
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    );
};

export default Navigation;