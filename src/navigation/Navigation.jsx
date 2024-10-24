

import React from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../splashscreen/SplashScreen';
import { navigationRef } from './../utils/NavigationUtils';
import Deliveryogin from '../features/DeliveryLogin/Deliveryogin';
import CustomerLogin from '../features/customerLogin/CustomerLogin';
import Register from '../Register/Register';
import ProductDashboard from '../features/dashboard/ProductDashboard';
import Extranavigation from '../splashscreen/Extranavigation';
import DeliveryDashboard from '../features/dashboard/DeliveryDashboard';
import ProductCategory from 'features/category/ProductCategory';
import Productorder from 'features/order/Productorder';
import OrderSuccess from 'features/order/OrderSuccess';
import LiveTracking from 'features/map/LiveTracking';
import Profile from 'features/profile/Profile';

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
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Extra" component={Extranavigation} />
                <Stack.Screen name="ProductDashboard" component={ProductDashboard} />
                <Stack.Screen name="ProductCategory" component={ProductCategory} />
                <Stack.Screen name="DeliveryDashboard" component={DeliveryDashboard} />
                <Stack.Screen name="ProductOrder" component={Productorder} />
                <Stack.Screen name="OrderSuccess" component={OrderSuccess} />
                <Stack.Screen name="LiveTracking" component={LiveTracking} />
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