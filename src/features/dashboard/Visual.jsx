
import { StyleSheet, Text, View,Animated, Image } from "react-native";
import React from "react";

import { darkWeatherColors } from "../../utils/Constants";
import { screenHeight, screenWidth } from "../../utils/Scaling";
import  LinearGradient from "react-native-linear-gradient";
import LottieView from "lottie-react-native";

const Visual = () => {
  return (
    <Animated.View style={[styles.container]}>
      <LinearGradient colors={darkWeatherColors} style={styles.gradient} />
      <Image source={require('../../assets/image/cloud.png')} style={styles.cloud} />
     <LottieView  autoPlay={true} enableMergePathsAndroidForKitKatAndAbove={true}
     loop={true}
     style={styles.lottie}
     source={require('../../assets/jsondata/raining.json')}
     />
    </Animated.View>
  );
};

export default Visual;

const styles = StyleSheet.create({
    container:{
        position:'absolute'
    },
    lottie:{
        width:'100%',
        height:150,
        position:'absolute',
        transform: [{scaleX: -1}]
    },
    gradient:{
        width:'100%',
        height:screenHeight * 0.4,
        position:'absolute'
    },
    cloud:{
        width:screenWidth,
        resizeMode:'stretch',
        height:100,
        
    }
});



