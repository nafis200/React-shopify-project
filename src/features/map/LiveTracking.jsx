
import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import LiveHeader from "./LiveHeader";
import Livemap from "./Livemap";

import Icon from 'react-native-vector-icons/Ionicons'
import CustomText from "components/ui/CustomText";
import DeliveryDetails from "./DeliveryDetails";
import OrderSuccess from "features/order/OrderSuccess";
import OrderSummary from "features/order/OrderSummary";
import withLiveStatus from "./WithLiveStatus";


const LiveTracking = ({route}) => {
  // console.log(route.params,"i am liveTracking");
  
  let msg = "packing your order"
  let time = "arriving in 10 minutes"

  const [currentOrder, setCurrentOrder] = useState('confiremd')

  const [deliveryPartner, setDeliveryPartner] = useState(true)

  const [person, setPerson] = useState('Customer')

  if (currentOrder === 'confiremd') {
    msg = 'Arriving soon'
    time = 'Arriving in 8 min'
  }
  else if (currentOrder === 'arriving') {
    msg = 'Order Picked up'
    time = 'arriving in 6 min'
  }
  else if (currentOrder === 'delivered') {
    msg = 'Order Delivered'
    time = 'Fastest Delivery'
  }
  return (
    <View style={styles.container}>
      <LiveHeader type='Customer' title={msg} secondTitle={time}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false} >

        <Livemap />

        <View style={styles.flexRow}>

          <View style={styles.iconContainer}>

            <Icon name='call' color='black' size={30} />
          </View>

          <View style={{ width: '82%' }}>
            <CustomText numberOfLines={1} variant="h7" style={{ color: 'black' }}>
              {"Nafis ahamed"}
            </CustomText>

            <CustomText numberOfLines={1} variant="h7" style={{ color: 'black' }}>
              {"Delivery instruction you can instruct"}
            </CustomText>

          </View>
        </View>

        <DeliveryDetails/>
        <OrderSummary data={route.params} />

      </ScrollView>

    </View>
  );
};

export default withLiveStatus(LiveTracking);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green'
  },
  scrollContent: {
    paddingBottom: 150,
    backgroundColor: 'white',
    padding: 15
  },
  iconContainer: {
    borderRadius: 100,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    borderRadius: 15,
    marginTop: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 0.7
  }
});
