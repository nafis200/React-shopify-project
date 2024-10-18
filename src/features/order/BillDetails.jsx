
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "components/ui/CustomText";
import Icon from 'react-native-vector-icons/FontAwesome';
import { RFValue } from "react-native-responsive-fontsize";


const ReportItem = ({ iconName, underline, title, price }) => {

    return (
        <View style={[styles.flexRowBetween, { marginBottom: 10 }]}>

            <View style={styles.flexRow}>
                <Icon
                    name={iconName}
                    size={RFValue(12)}
                    style={{ opacity: 0.7, color: 'black' }}
                />
                <CustomText
                    style={{
                        textDecorationLine: underline ? 'underline' : 'none',
                        color: 'black'
                    }}
                    variant="h8"
                >
                    {title}
                </CustomText>
            </View>
            <CustomText style={styles.colors}>
                ${price}
            </CustomText>
        </View>
    )

}


const BillDetails = ({ totalItemPrice }) => {
    return (
        <View style={styles.container}>
            <CustomText style={[styles.colors, styles.text]} >Bill details</CustomText>

            <View style={styles.billContainer}>
                <ReportItem iconName='article' title="Items total" price={totalItemPrice} />
                <ReportItem iconName='pedal-bike' title="delivery Charge" price={29} />
                <ReportItem iconName='shopping bag' title="Items total" price={2} />
                <ReportItem iconName='cloudy-snowing' title="Items total" price={3} />
            </View>

            <View style={[styles.flexRowBetween, { marginBottom: 15 }]}>

                <CustomText variant="h7" style={[styles.text, styles.colors]}>Grand Total</CustomText>
                <CustomText variant="h7" style={[styles.text, styles.colors]}>${totalItemPrice + 34}</CustomText>

            </View>

        </View>
    );
};

export default BillDetails;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 15,
        marginBottom: 15
    },
    colors: {
        color: 'black'
    },
    text: {
        marginHorizontal: '10',
        marginTop: 15
    },
    billContainer: {
        padding: 10,
        paddingBottom: 0,
        borderBottomWidth: 0.7
    },
    flexRowBetween: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    }
});
