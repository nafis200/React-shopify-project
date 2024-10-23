
import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "provider/Authprovider";
import Icon from 'react-native-vector-icons/Ionicons'
import CustomText from "components/ui/CustomText";

const DeliveryDetails = () => {
    const { user } = useContext(AuthContext)
    return (
        <View style={styles.container}>

            <View style={styles.flexRow}>
                <View style={styles.iconContainer}>
                <Icon name="bicycle" size={30} color="#000" />
                </View>
                <View>
                   <CustomText style={[styles.text]}>Your delivery details</CustomText>
                   <CustomText style={[styles.text]}> details of your currentOrder</CustomText>
                </View>
            </View>

            <View style={styles.flexRow2}>
                <View style={styles.iconContainer}>
                <Icon name="location" size={30} color="#000" />
                </View>
                <View>
                   <CustomText style={[styles.text]}>Delivery at home</CustomText>
                   <CustomText style={[styles.text]}> details of your currentOrder</CustomText>
                </View>
            </View>

        </View>
    );
};

export default DeliveryDetails;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 15,
        marginVertical: 15,
        paddingVertical: 15,
        backgroundColor: '#fff'
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 10,
        borderBottomWidth: 0.7
    },
    flexRow2: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
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
