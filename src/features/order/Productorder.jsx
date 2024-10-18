
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import CustomHeader from "components/ui/CustomHeader";
import OrderList from "./OrderList";
import Icon from 'react-native-vector-icons/FontAwesome';
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "components/ui/CustomText";
import { useCartStore } from "state/cartStore";
import BillDetails from "./BillDetails";
import { hocStyles } from "styles/globalStyles";
const Productorder = () => {

  const { getItemCount, getTotalPrice, cart, clearCart } = useCartStore()

  const totalPrice = getTotalPrice()



  return (
    <View>
      <CustomHeader title="checkout" />
      <ScrollView contentContainerStyle={styles.scrollContainer} >
        <OrderList />

        <View style={styles.flexRowBetween}>

          <View style={styles.flexRow}>
            <Image source={require('@assets/icons/coupon.png')} style={{ width: 25, height: 25 }} />
            <CustomText variant="h6" style={styles.text}>Use Coupons</CustomText>
          </View>
          <Icon name="chevron-right" size={RFValue(16)} style={styles.text} />
        </View>

        <BillDetails totalItemPrice={totalPrice} />

        <View style={styles.flexRowBetween}>
          <View>
            <CustomText variant="h8" style={styles.text}>Cancellation Policy</CustomText>
            <CustomText variant="h8" style={[styles.text, styles.cancelText]}>Orders cant be cancelled once packed for delivery.</CustomText>

          </View>
        </View>


      </ScrollView>

      <View style={[hocStyles.cartContainer
      ]}>

        <View style={styles.absoluteContainer}>

          <View style={styles.addressContainer}>
            <View style={styles.flexRow}>
              <Image source={require('@assets/icons/home.png')} style={{width:20, height:20}} />
            </View>
            <View style={{width:'75%'}}>
               <CustomText style={styles.text}>Delivery to home</CustomText>
            </View>
          </View>

        </View>

      </View>

    </View>
  );
};

export default Productorder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollContainer: {
    backgroundColor: 'silver',
    padding: 10,
    paddingBottom: 250
  },
  text: {
    color: 'black'
  },
  flexRowBetween: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 15
  },
  flexRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10
  },
  cancelText: {
    marginTop: 4,
    opacity: 0.6
  },
  absoluteContainer: {
    marginVertical: 15,
    marginBottom: 10
  },
  addressContainer:{
       justifyContent:'space-between',
       alignItems:'center',
       flexDirection:'row',
       paddingHorizontal:10,
       paddingBottom:10,
       borderBottomWidth:0.7
  }
});


