
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Icon from 'react-native-vector-icons/Ionicons'
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "components/ui/CustomText";

const ActionButton = ({ icon, label, onPress }) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <View style={styles.iconContainer}>
                <Icon name={icon} color='black' size={RFValue(14)} />
            </View>
            
           <CustomText variant="h7" style={styles.text}>
              {label}
           </CustomText> 

        </TouchableOpacity>
    );
};

export default ActionButton;

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginVertical: 10
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        borderRadius: 100
    }
});
