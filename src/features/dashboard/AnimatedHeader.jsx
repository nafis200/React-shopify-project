
import { StyleSheet, Text, View,Animated } from "react-native";
import React from "react";
import Header from "./Header";


const AnimatedHeader = ({showNotice}) => {


  return (
    <Animated.View style={styles.headerAnimatedStyle}>
      <Header showNotice={showNotice} />
    </Animated.View>
  );
};

export default AnimatedHeader;

const styles = StyleSheet.create({
    headerAnimatedStyle:{
       transform:[{translateY:20}],
    }
});
