

import { View, Text, StyleSheet, Animated, Image } from "react-native";
import React, { useState } from "react";
import { GestureHandlerRootView, PanGestureHandler, State } from "react-native-gesture-handler";
import CustomSafeAreaView from "../../components/CustomSafeAreaView.jsx/CustomSafeAreaView";
import ProductSlider from "../../components/login/ProductSlider";
import { resetAndNavigate } from "../../utils/NavigationUtils";
import CustomText from "../../components/ui/CustomText";

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
           <View style={styles.content}>
              <Image source={require('../../assets/image1/01.png')} style={styles.logo} />
              <CustomText variant="h2" style={{color:'black'}}>Ecommerce app</CustomText>
           </View>

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
  },
  logo:{
     height:50,
     width:50,
     borderRadius:20,
     marginVertical:20
  },
  content:{
     justifyContent:'center',
     alignItems:'center',
     width:'100%',
     paddingHorizontal:10
  }
})

export default CustomerLogin;
