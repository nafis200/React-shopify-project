
import { View, Text, StyleSheet, ScrollView,Alert } from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/Authprovider";
import CustomSafeAreaView from "../../components/CustomSafeAreaView.jsx/CustomSafeAreaView";
import { screenHeight } from "../../utils/Scaling";
import LottieView from 'lottie-react-native';
import CustomText from "../../components/ui/CustomText";
import Icon from 'react-native-vector-icons/Ionicons'
import CustomInput from "../../components/ui/CustomInput";
import { RFValue } from "react-native-responsive-fontsize";
import CustomButton from "../../components/ui/CustomButton";
import { resetAndNavigate } from "../../utils/NavigationUtils";

const Deliveryogin = () => {

  const [Email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState('')
  const { signInUser,user,logout} = useContext(AuthContext)
  console.log(user);

  const handlelogout = async()=>{
      await logout()
  }
  
  const handleLogin = async () => {
    setLoading(true)
    try {
      await signInUser(Email, password);
      Alert.alert(
        "Alert Title",
        "Login successfully",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
      resetAndNavigate('DeliveryDashboard')
    } catch (error) {
      Alert.alert(
        "Alert Title",
        "Email password dont match",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }
    finally {
      setLoading(false)
    }
  };

  return (
    <CustomSafeAreaView>
      <ScrollView keyboardShouldPersistTaps='handled' keyboardDismissMode="on-drag" >

         <View style={styles.container}>

          <View style={styles.lottieContainer}>
            <LottieView  autoPlay loop style={styles.lottie} source={require('../../assets/jsondata/delivery_man.json')} />
          </View>

          <CustomText variant="h6" style={[styles.textColor,{fontWeight:'bold'}]} >
             Delivery Partner portal
          </CustomText>

          <CustomInput 
          onChangeText = {setEmail}
          value={Email}
          left={<Icon 
            name="mail" 
            color="#F8898E"
            style={{marginLeft:10}} 
            size={RFValue(18)} />}
            placeholder="Email" 
            inputMode="email"
            right={false}
          />
          <CustomInput 
          onChangeText = {setPassword}
          value={password}
          left={<Icon 
            name="key-sharp" 
            color="#F8898E"
            style={{marginLeft:10}} 
            size={RFValue(18)} />}
            placeholder="password" 
            inputMode="password"
            right={false}
          />
 
          <CustomButton 
          title='Login'
          loading={loading}
          onPress={handleLogin}
          disabled={!Email || password.length < 6}
          
          />

          <CustomButton title='logout' onPress={handlelogout}>

          </CustomButton>

          </View>
      </ScrollView>
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
    container:{
      flex:1,
      padding:20,
      alignItems:'center'
    },
    lottie:{
      height:'100%',
      width:'100%'
    },
    lottieContainer:{
       height:screenHeight * 0.12,
       width:'100%'
    },
    text:{
       marginTop:2,
       marginBottom:25,
       opacity:0.8
    },
    textColor:{
       color:'black'
    }
})

export default Deliveryogin;
