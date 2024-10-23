
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/Ionicons'
import CustomText from "components/ui/CustomText";

const OrderSummary = ({ data }) => {
    {/* {
           Object.values(data).map((item) => {
            console.log(`Item Name: ${item.name}, Price: ${item.price}, Discount Price: ${item.discountPrice}`);
          })
              
      } */}
    const totalPrice = Object.values(data).reduce((acc, item) => acc + item.price, 0);
    return (
        <View>
            <View style={styles.flexRow}>
                <View style={styles.iconContainer}>
                    <Icon name="bicycle" size={30} color="#000" />
                </View>
                <View>
                    <CustomText style={[styles.text]}>Order Summary</CustomText>
                    <CustomText style={[styles.text]}>totalPrice: {totalPrice}$</CustomText>
                </View>
            </View>

        </View>
    );
};

export default OrderSummary;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 15,
        marginVertical: 15,
        paddingVertical: 10,
        backgroundColor: '#fff'
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 10,
        borderBottomWidth: 0.7
    },
    iconContainer: {
        borderRadius: 100,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color:'black'
    }
});
