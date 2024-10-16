
import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated";

const Scalepress = ({ onPress, children, style }) => {
  const scaleValue = useSharedValue(1);

  const onPressIn = () => {
    scaleValue.value = withSpring(0.92);
  };

  const onPressOut = () => {
    scaleValue.value = withSpring(1);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scaleValue.value }],
    };
  });

  return (
    <TouchableOpacity
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      activeOpacity={1}
      style={style}
    >
      <Animated.View style={[animatedStyle, { width: '100%' }]}>
        {children}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Scalepress;

const styles = StyleSheet.create({});
