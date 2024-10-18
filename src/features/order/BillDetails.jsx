
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "components/ui/CustomText";

const BillDetails = ({totalItemPrice}) => {
  return (
    <View style={styles.container}>
      <CustomText style={[styles.colors,styles.text]} >Bill details</CustomText>
       
      <View style={styles.billContainer}>
        
        
     </View> 

     <View style={[styles.flexRowBetween,{marginBottom:15}]}>
       
      <CustomText variant="h7" style={[styles.text,styles.colors]}>Grand Total</CustomText> 

     </View>

    </View>
  );
};

export default BillDetails;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 15,
        marginBottom: 15
    },
    colors:{
        color:'black'
    },
    text:{
        marginHorizontal:'10',
        marginTop:15
    },
    billContainer:{
        padding: 10,
        paddingBottom:0,
        borderBottomWidth: 0.7
    },
    flexRowBetween:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    flexRow:{
        flexDirection:'row',
        alignItems:'center',
        gap:5
    }
});
