
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

import Icon from 'react-native-vector-icons/Ionicons'

const LiveHeader = ({ title,type, secondTitle }) => {

    const isCustomer = type === 'Customer'

    return (
        <SafeAreaView>

            <View style={styles.headerContainer}>

                <Pressable>
                  <Icon name='chevron-back' color={isCustomer ? '#fff' : '#000'} />
                </Pressable>

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
