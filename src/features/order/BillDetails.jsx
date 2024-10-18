
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "components/ui/CustomText";

const BillDetails = ({totalItemPrice}) => {
  return (
    <View style={styles.container}>
      <CustomText style={[styles.colors,styles.text]} >Bill details</CustomText>
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
    }
});
