import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity,Alert } from "react-native";
import React, { useState } from "react";
import CustomHeader from "components/ui/CustomHeader";
import OrderList from "./OrderList";
import Icon from 'react-native-vector-icons/FontAwesome';
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "components/ui/CustomText";
import { useCartStore } from "state/cartStore";
import BillDetails from "./BillDetails";
import Arrowbutton from "components/ui/Arrowbutton";
import { navigate } from "utils/NavigationUtils";

const Productorder = () => {
  const { getItemCount, getTotalPrice, cart, clearCart } = useCartStore();

  const totalPrice = getTotalPrice();

  const [loading,setLoading] = useState(false)



  const handlePlaceOrder = async()=>{
       console.log("hellow");
       
       if(getItemCount === null){
          Alert.alert('Let your first order to be delivered')
          return
       }

       const formattedData = cart.map(item=>({
          id: item._id,
          item: item._id,
          count: item.count,
          name: item?.item?.name,
          image: item?.item?.image,
          price:item?.item?.price,
          discountPrice:item?.item?.discountPrice
       }))

       if(formattedData.length == 0){
        Alert.alert('Add any Item place order')
        return
       }
       setLoading(true)

       if(formattedData != null){
         clearCart()
         navigate('OrderSuccess',{... formattedData})
       }

       setLoading(false)
       
  }

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
          <View style={{ width: '75%', flexDirection:'row',justifyContent:'space-between' }}>
            <CustomText style={[styles.text,{marginLeft:-40}]}>Delivery to home</CustomText>
            <TouchableOpacity>
              <CustomText style={[{marginLeft:30,backgroundColor:'green',padding:2,width:70,textAlign:'center'}]}>Charge</CustomText>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.paymentGateway,{width:'70%'}]}>
               <Arrowbutton 
               loading={loading}
               price={totalPrice}
               title="place order"
               onPress = {async()=>{
                    await handlePlaceOrder()
               }}
               />
           </TouchableOpacity>
          </View>
        </View>
        <View style={{width:'30%'}}>
                <CustomText style={styles.text} fontSize={RFValue(10)}>Pay Using</CustomText>
                <CustomText variant="h9" style={[styles.text, {marginTop:2}]} fontSize={RFValue(10)}>Cash on delivery</CustomText>
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
  paymentGateway:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:14
  } 
});
