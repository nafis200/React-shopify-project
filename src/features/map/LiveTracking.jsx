
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import LiveHeader from "./LiveHeader";

const LiveTracking = () => {

  let msg = "packing your order"
  let time = "arriving in 10 minutes"

  const [currentOrder,setCurrentOrder] = useState('confiremd')

  const [person,setPerson] = useState('Customer')

  if(currentOrder === 'confiremd'){
     msg = 'Arriving soon'
     time = 'Arriving in 8 min'
  }
  else if(currentOrder === 'arriving'){
        msg = 'Order Picked up'
        time = 'arriving in 6 min'
  }
  else if(currentOrder === 'delivered'){
    msg = 'Order Delivered'
    time = 'Fastest Delivery'
  }
  return (
    <View style={styles.container}>
      <LiveHeader type='Customer' title={msg} secondTitle={time}
       />
    </View>
  );
};

export default LiveTracking;

const styles = StyleSheet.create({
  container:{
     flex:1,
     backgroundColor:'green'
  }
});
