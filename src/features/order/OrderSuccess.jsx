import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { screenWidth } from "utils/Scaling";

const OrderSuccess = () => {
  return (
    <View>
      <Text>OrderSuccess</Text>
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
        opacity:0.8
    },
    text:{
        color:'black'
    }
});
