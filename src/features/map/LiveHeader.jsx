
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import Icon from 'react-native-vector-icons/Ionicons'
import { RFValue } from "react-native-responsive-fontsize";
import { navigate } from "utils/NavigationUtils";
import CustomText from "components/ui/CustomText";

const LiveHeader = ({ title,type, secondTitle }) => {

    const isCustomer = type === 'Customer'
    const [deliverd,setDeliverd] = useState('deliverd')
    return (
        <SafeAreaView>

            <View style={styles.headerContainer}>

                <Pressable style={styles.backButton} onPress={()=>{
                    if(isCustomer){
                        navigate('ProductDashboard')
                        // clear order database or else
                        return
                    }
                    navigate('DeliveryDashboard')
                }}>
                  <Icon size={RFValue(16)} name='chevron-back' color={isCustomer ? '#fff' : '#000'} />
                </Pressable>

                <CustomText variant="h5" style={isCustomer ? styles.titleTextWhite : styles.titleTextBlack} >
                    {title}
                </CustomText>
                <CustomText style={isCustomer ? styles.titleTextWhite : styles.titleTextBlack}>
                    {secondTitle}
                </CustomText>

            </View>

        </SafeAreaView>
    );
};

export default LiveHeader;

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'center',
        paddingVertical: 10,
        alignItems: 'center'
    },
    backButton: {
        position: 'absolute',
        left: 20
    },
    titleTextBlack: {
        color: 'black'
    },
    titleTextWhite: {
        color: 'white'
    }
});
