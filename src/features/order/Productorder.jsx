import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import CustomHeader from "components/ui/CustomHeader";
import OrderList from "./OrderList";
import Icon from 'react-native-vector-icons/FontAwesome';
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "components/ui/CustomText";
import { useCartStore } from "state/cartStore";
import BillDetails from "./BillDetails";

const Productorder = () => {
  const { getItemCount, getTotalPrice, cart, clearCart } = useCartStore();

  const totalPrice = getTotalPrice();

  return (
    <View style={styles.container}>
      <CustomHeader title="checkout" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
            <CustomText variant="h8" style={[styles.text, styles.cancelText]}>Orders can't be cancelled once packed for delivery.</CustomText>
          </View>
        </View>
      </ScrollView>

      {/* Cart Container */}
      <View style={styles.cartContainer}>
        <View style={styles.addressContainer}>
          <View style={styles.flexRow}>
            <Image source={require('@assets/icons/home.png')} style={{ width: 20, height: 20 }} />
          </View>
          <View style={{ width: '75%' }}>
            <CustomText style={styles.text}>Delivery to home</CustomText>
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
    backgroundColor: '#fff',
  },
  scrollContainer: {
    backgroundColor: 'silver',
    padding: 10,
    paddingBottom: 250,
  },
  text: {
    color: 'black',
  },
  flexRowBetween: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 15,
  },
  flexRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  cancelText: {
    marginTop: 4,
    opacity: 0.6,
  },
  // Updated cart container style
  cartContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomWidth: 0.7,
  },
});
