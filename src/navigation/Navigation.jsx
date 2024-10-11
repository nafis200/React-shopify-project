

import React from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../splashscreen/SplashScreen';
import { navigationRef } from './../utils/NavigationUtils';
import Deliveryogin from '../features/DeliveryLogin/Deliveryogin';
import CustomerLogin from '../features/customerLogin/CustomerLogin';
import Register from '../Register/Register';

const Stack = createNativeStackNavigator();



const Navigation = () => {
    return (
        <NavigationContainer ref={navigationRef} >
            <Stack.Navigator
                initialRouteName='SplashScreen'
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen
                    options={{
                        animation: 'fade'
                    }}
                    name="DeliveryLogin" component={Deliveryogin} />

                <Stack.Screen
                    options={{
                        animation: 'fade'
                    }}
                    name="CustomerLogin" component={CustomerLogin} />
                <Stack.Screen
                    options={{
                        animation: 'fade'
                    }}
                    name="Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>

    );
};

export default Navigation;