

import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../../provider/Authprovider";
import { resetAndNavigate } from "../../utils/NavigationUtils";
import CustomButton from "../../components/ui/CustomButton";

const DeliveryDashboard = () => {
  const {logout,user} = useContext(AuthContext)
  const handlelogot = async()=>{
     await logout()
     resetAndNavigate('DeliveryLogin')
  }
  return (
    <View>
      <Text style={{color:'black'}}>DeliveryDashboard</Text>
      <CustomButton title='logout' onPress={handlelogot} >

      </CustomButton>
    </View>
  );
};

export default DeliveryDashboard;

const styles = StyleSheet.create({});
