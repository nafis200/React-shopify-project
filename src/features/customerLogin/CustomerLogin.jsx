

import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomSafeAreaView from "../../components/CustomSafeAreaView.jsx/CustomSafeAreaView";
import ProductSlider from "../../components/login/ProductSlider";

const CustomerLogin = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <CustomSafeAreaView>
         <ProductSlider/>
      </CustomSafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})

export default CustomerLogin;
