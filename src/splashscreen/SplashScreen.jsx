
import React from 'react'
import { View,Text,StyleSheet,Image } from 'react-native';
import { screenHeight, screenWidth } from '../utils/Scaling';
import Logo from '../assets/image/1728492791384.png'
const SplashScreen = () => {

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logoImage}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:"yellow",
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logoImage:{
        height: screenHeight * 0.7,
        width: screenWidth * 0.7,
        resizeMode: 'contain'
    }
})

export default SplashScreen;