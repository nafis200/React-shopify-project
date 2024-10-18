
import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomHeader from "components/ui/CustomHeader";
import OrderList from "./OrderList";

const Productorder = () => {
  return (
    <View>
      <CustomHeader title="checkout" />
      <ScrollView contentContainerStyle={styles.scrollContainer} >
         <OrderList/>
      </ScrollView>
    </View>
  );
};

export default Productorder;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    scrollContainer:{
        backgroundColor:'silver',
        padding:10,
        paddingBottom: 250
    },
    text:{
        color:'black'
    }
});


