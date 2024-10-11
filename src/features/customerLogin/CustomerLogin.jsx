

import { View, Text, StyleSheet, Animated } from "react-native";
import React, { useState } from "react";
import { GestureHandlerRootView, PanGestureHandler, State } from "react-native-gesture-handler";
import CustomSafeAreaView from "../../components/CustomSafeAreaView.jsx/CustomSafeAreaView";
import ProductSlider from "../../components/login/ProductSlider";
import { resetAndNavigate } from "../../utils/NavigationUtils";

const CustomerLogin = () => {

  const [gestureSequence, setGestureSequence] = useState([])

  const handleGesture = ({ nativeEvent }) => {


    if (nativeEvent.state === State.END) {
      const { translationX, translationY } = nativeEvent
      let direction = ''
      if (Math.abs(translationX) > Math.abs(translationY)) {
        direction = translationX > 0 ? 'right' : 'left'
      }
      else {
        direction = translationY > 0 ? 'down' : 'up'
      }

      console.log(translationX, translationY, direction);

      const newSequence = [...gestureSequence, direction].slice(-5)
      setGestureSequence(newSequence)

      if (newSequence.join(' ') === 'up up down left right') {
        setGestureSequence([])
        resetAndNavigate('DeliveryLogin')
      }

    }
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <CustomSafeAreaView>
          <ProductSlider />
          <PanGestureHandler onHandlerStateChange={handleGesture}>
            <Animated.ScrollView
              bounces={false}
              keyboardDismissMode='on-drag'
              keyboardShouldPersistTaps='handled'
              contentContainerStyle={styles.subContainer}
            >



            </Animated.ScrollView>
          </PanGestureHandler>
        </CustomSafeAreaView>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  subContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20
  }
})

export default CustomerLogin;
