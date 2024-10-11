import { View, Text, StyleSheet, Animated, Image, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { GestureHandlerRootView, PanGestureHandler, State } from "react-native-gesture-handler";
import CustomSafeAreaView from "../../components/CustomSafeAreaView.jsx/CustomSafeAreaView";
import ProductSlider from "../../components/login/ProductSlider";
import { navigate, resetAndNavigate } from "../../utils/NavigationUtils";
import CustomText from "../../components/ui/CustomText";
import CustomInput from "../../components/ui/CustomInput";
import CustomButton from "../../components/ui/CustomButton";
import { AuthContext } from "../../provider/Authprovider";
import { NavigationContainer } from '@react-navigation/native';


const CustomerLogin = () => {
  const [Email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [gestureSequence, setGestureSequence] = useState([])

  const { signInUser } = useContext(AuthContext)

  const handleLogin = async () => {
    try {
      await signInUser(Email, password);
      console.log('User logged in successfully');
    } catch (error) {
      console.log('Login Error:', error);
    }
  };


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
                <CustomText variant="h2" style={{ color: 'black', fontWeight: 'bold' }}>Login or signup</CustomText>
                <CustomInput
                  onChangeText={(text) => { setEmail(text) }}
                  onClear={() => setEmail('')}
                  value={Email}
                  left={
                    <CustomText
                      style={styles.phoneText}
                      variant="h6"
                    >
                    </CustomText>}
                  placeholder="enter your Email"
                />
                <CustomInput
                  onChangeText={(text) => { setPassword(text) }}
                  onClear={() => setPassword('')}
                  value={password}
                  left={
                    <CustomText
                      style={styles.phoneText}
                      variant="h6"
                    >
                    </CustomText>}
                  placeholder="enter your password"

                />

                <CustomButton title='Login' disabled={password.length < 6}
                  loading={loading}
                  onPress={() => handleLogin()}
                />

                <TouchableOpacity onPress={() => resetAndNavigate('Register') }>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{color:'black',marginRight:10}}>Have not any Accout Please</Text>
                    <Text style={styles.link}>Register</Text>
                    </View>
                </TouchableOpacity>

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
  logo: {
    height: 50,
    width: 50,
    borderRadius: 20,
    marginVertical: 20
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
  phoneText: {
    marginLeft: 10,
    color: 'black'
  },
  link: {
    color: 'blue', // Make it look like a link
    textDecorationLine: 'underline',
  },
})

export default CustomerLogin;
