
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/Ionicons'
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "components/ui/CustomText";

const WalletItem = ({icon,label}) => {
  return (
    <View>
      <Icon  name={icon} color='' size={RFValue(20)} />
      <CustomText variant="h8" style={[styles.text]} >
        {label}
      </CustomText>
    </View>
  );
};

export default WalletItem;

const styles = StyleSheet.create({
     walletItemContainer:{
        alignItems:'center'
     },
     text:{
        color:'black'
     }
});
