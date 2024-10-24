
import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "provider/Authprovider";
import CustomHeader from "components/ui/CustomHeader";
import CustomText from "components/ui/CustomText";
import WallteSection from "./WallteSection";
import ActionButton from "./ActionButton";
import OrderItem from "./OrderItem";

const Profile = () => {
    const {user, logout} = useContext(AuthContext)

    const Order = [
        {
          "name": "Product A",
          "price": 100
        },
        {
          "name": "Product B",
          "price": 200
        }
      ]

      const renderHeader = ()=>{
        return(
            <View>
                <CustomText variant="h3" style={[styles.text]}>Your Account</CustomText>
                <CustomText variant="h3" style={[styles.text]}>{user?.email}</CustomText>

                <WallteSection />
                
                <CustomText variant="h8" style={[styles.text,styles.informativeText]}>Your Information</CustomText>

                <ActionButton icon='book-outline' label="Address Book" />
                

            </View>
        )
      }

    const renderOrders = ((item)=>{
        return(
            <OrderItem/>
        )
    })


  return (
    <View>
        <CustomHeader title="profile" style={[styles.text]} />
        <FlatList 
        data={Order}
        ListHeaderComponent={renderHeader}
        renderItem={renderOrders}
        keyExtractor={(item)=> item?.name}
        contentContainerStyle={styles.scrollViewContent}
        />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    scrollViewContent:{
        padding:10,
        paddingTop:20,
        paddingBottom:100
    },
    informativeText:{
        opacity:0.7,
        marginBottom:20
    },
    pastText:{
        marginVertical:20
    },
    text:{
        color:'black'
    }
});
