
import { StyleSheet, Text, View,ScrollView } from "react-native";
import React, { useState } from "react";
import LiveHeader from "./LiveHeader";
import Livemap from "./Livemap";


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
      
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false} >

      <Livemap />

      </ScrollView>

    </View>
  );
};

export default LiveTracking;

const styles = StyleSheet.create({
  container:{
     flex:1,
     backgroundColor:'green'
  },
  scrollContent:{
    paddingBottom: 150,
    backgroundColor:'white',
    padding:15
  }
});
