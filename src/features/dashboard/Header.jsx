
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import CustomText from "../../components/ui/CustomText";
import { RFValue } from "react-native-responsive-fontsize";
import { AuthContext } from "../../provider/Authprovider";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Header = ({ showNotice }) => {
    const { user } = useContext(AuthContext)
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

                <View style={styles.flexRow}>
                    <CustomText variant="h8" numberOfLines={1} style={styles.text2} >
                        {
                            user?.email || 'Knowwhere,Somewhere 😊'
                        }

                    </CustomText>

                    <Icon name='menu-down' color="white" size={RFValue(20)} style={{ bottom: -1, marginTop: -4 }} />

                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <Icon name='account-circle-outline' size={RFValue(36)} color="white" />
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
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    noticeBtn: {
        backgroundColor: '',
        borderRadius: 100,
        paddingHorizontal: 8,
        paddingVertical: 2,
        bottom: -2
    },
    flexRow: {
        // justifyContent:'center',
        // alignItems:'center',
        flexDirection: 'row',
        gap: 2,
        width: '70%'
    },
    text2: {
        color: '#fff',
        // width:'90%',
        // textAlign:'center'
    }
});
