
import { ScrollView, StyleSheet, Text, View,Image } from "react-native";
import React from "react";
import CustomHeader from "components/ui/CustomHeader";
import OrderList from "./OrderList";
import Icon from 'react-native-vector-icons/FontAwesome';
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "components/ui/CustomText";
const Productorder = () => {
  return (
    <View>
      <CustomHeader title="checkout" />
      <ScrollView contentContainerStyle={styles.scrollContainer} >
         <OrderList/>
         
        <View style={styles.flexRowBetween}>
       
         <View style={styles.flexRow}>
           <Image source={require('@assets/icons/coupon.png')} style={{width:25, height:25}} />
           <CustomText style={styles.text}>Use Coupons</CustomText>
         </View>
          <Icon name="chevron-right" size={RFValue(16)} style={styles.text} />
        </View>

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
    },
    flexRowBetween:{
       backgroundColor:'#fff',
       alignItems:'center',
       justifyContent:'space-between',
       padding:10,
       flexDirection:'row',
       borderRadius:15
    },
    flexRow:{
      alignItems:'center',
      flexDirection:'row',
      gap:10
    }
});


