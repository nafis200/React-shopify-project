
import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useCartStore } from "state/cartStore";
import CustomText from "components/ui/CustomText";

const OrderList = () => {
    const cartItem = useCartStore(state => state.cart)
    const totalItem = cartItem.reduce((acc,cart)=> acc + cart?.count,0)
    return (
        <View style={styles.container}>
            <View style={styles.flexRow}>

                <View style={styles.imgContainer}>
                    <Image source={require('@assets/icons/clock.png')} />
                </View>

                <View>
                    <CustomText style={styles.text} variant="h8">Delivery in 8 min</CustomText>
                    <CustomText style={styles.text} variant="h8">Shipment of {totalItem || 0} item </CustomText>
                </View>

            </View>
        </View>
    );
};

export default OrderList;

const styles = StyleSheet.create({
    text: {
        color: 'black'
    },
    container: {
        backgroundColor: '#fff',
        borderRadius: 15,
        marginBottom: 15
    },
    imgContainer: {
         padding:10,
         borderRadius:15
    },
    flexRow: {
    alignItems:'center',
    flexDirection:'row',
    gap:12,
    paddingHorizontal:10,
    paddingVertical:12
    },
    img:{
       width:30,
       height:30
    } 
});
