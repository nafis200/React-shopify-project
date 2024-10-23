import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { screenWidth } from "utils/Scaling";
import LottieView from "lottie-react-native";
import CustomText from "components/ui/CustomText";

const OrderSuccess = () => {
  return (
    <View style={[styles.container]}>
       <LottieView
       source={require('@assets/jsondata/confirm.json')}
       autoPlay
       duration={2000}
       loop={false}
       speed={1}
       style={styles.lottieView}
       enableMergePathsAndroidForKitKatAndAbove 
       hardwareAccelerationAndroid
       >
       </LottieView>
      
       <CustomText variant="h5" style={styles.addressText}>
            Order Placed
       </CustomText>

    </View>
  );
};

export default OrderSuccess;

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1 
    },
    lottieView:{
        width: screenWidth * 0.5,
        height:150
    },
    orderPlaceText:{
        opacity:0.4
    },
    deliveryContainer:{
        borderBottomWidth:2,
        paddingBottom:4,
        marginBottom:5
    },
    deliveryText:{
        marginTop:15
    },
    addressText:{
        opacity:0.8,
        color:'black'
    },
    text:{
        color:'black'
    }
});
