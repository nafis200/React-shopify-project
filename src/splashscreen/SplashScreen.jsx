import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Alert, PermissionsAndroid, Linking } from 'react-native';
import { screenHeight, screenWidth } from '../utils/Scaling';
import Logo from '../assets/image/1728492791384.png';
import GeoLocation from '@react-native-community/geolocation';

GeoLocation.setRNConfiguration({
  skipPermissionRequests: false,
  enableBackgroundLocationUpdates: true,
  locationProvider: 'auto',
});

const SplashScreen = () => {
  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'We need access to your location for a better experience.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          GeoLocation.getCurrentPosition(
            (position) => {
              console.log('User location:', position);
            },
            (error) => {
              Alert.alert('Error', 'Unable to retrieve location.');
            }
          );
        } else {
          Alert.alert(
            'Permission Denied',
            'You need to enable location services from settings.',
            [
              { text: 'Cancel', style: 'cancel' },
              { 
                text: 'Open Settings', 
                onPress: () => Linking.openSettings()
              }
            ]
          );
        }
      } catch (err) {
        console.warn('Error requesting location permission:', err);
      }
    };
    requestLocationPermission();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logoImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    height: screenHeight * 0.7,
    width: screenWidth * 0.7,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
