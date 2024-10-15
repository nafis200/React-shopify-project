
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CustomText from "../../components/ui/CustomText";
import { RFValue } from "react-native-responsive-fontsize";

const Header = ({ showNotice }) => {
    return (
        <View style={styles.subContainer}>
            <TouchableOpacity activeOpacity={0.8}>

                <CustomText variant="h5" style={styles.text}>
                    Delivery In
                </CustomText>

                <View style={styles.flexRowGap}>

                    <CustomText variant="h2" style={styles.text}>
                        10 Minutes
                    </CustomText>
                    <TouchableOpacity style={styles.noticeBtn}
                    onPress={showNotice}
                    >
                        <CustomText fontSize={RFValue(14)}>🌧️Shownotice</CustomText>
                    </TouchableOpacity>
                </View>

             


            </TouchableOpacity>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 10,
        justifyContent: 'space-between',

    },
    text: {
        color: 'white'
    },
    flexRowGap: {
       flexDirection:'row',
       alignItems:'center',
       gap:5
    },
    noticeBtn:{
        backgroundColor:'',
        borderRadius:100,
        paddingHorizontal:8,
        paddingVertical:2,
        bottom:-2
    }
});
