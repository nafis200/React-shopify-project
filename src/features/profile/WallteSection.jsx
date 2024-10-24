
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import WalletItem from "./WalletItem";

const WallteSection = () => {
    return (
        <View style={styles.walletContainer}>
            <WalletItem icon='wallet-outline' label="Wallet" />
            <WalletItem icon='chatbubble-outline' label="Support" />
            <WalletItem icon='card-outline' label="Payments" />
        </View>
    );
};

export default WallteSection;

const styles = StyleSheet.create({
    walletContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 15,
        marginVertical: 20,
    }
});
