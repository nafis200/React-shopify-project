
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { screenHeight, screenWidth } from "utils/Scaling";

const Cartsummary = ({cartCount,cartImage}) => {
  return (
    <View style={styles.container}>
      <Text style={{color:'black'}}>Cartsummary</Text>
    </View>
  );
};

export default Cartsummary;

const styles = StyleSheet.create({
   container:{
     justifyContent:'space-between',
     alignItems:'center',
     flexDirection:'row',
     paddingHorizontal:screenHeight * 0.05,
     paddingBottom:screenHeight * 0.03,
     paddingTop:screenHeight * 0.014
   },

   flexRowGap:{
     alignItems:'center',
     flexDirection:'row',
     gap:screenWidth * 0.03,
   },
   image:{
      width:screenWidth * 0.1,
      height:screenWidth * 0.1,
      borderRadius: screenWidth * 0.025,
      borderWidth:1 
   },
   btn:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      paddingVertical:screenHeight * 0.01,
      borderRadius: screenWidth * 0.025,
      paddingHorizontal:screenWidth * 0.1
   }
});
