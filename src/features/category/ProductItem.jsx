
import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { screenHeight } from "utils/Scaling";
import CustomText from "components/ui/CustomText";
import { RFValue } from "react-native-responsive-fontsize";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";
import UniversalAdd from "components/ui/UniversalAdd";

const ProductItem = ({ item, index }) => {
    const isSecondColumn = index % 2 != 0
    return (
        <View style={[styles.container, {
            marginRight: isSecondColumn ? 10 : 0
        }]}>

            <View style={styles.imageContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
            </View>
            <View style={styles.content}>
                <View style={styles.flexRow}>
                    <Image source={require('../../assets/icons/clock.png')} style={styles.clockIcon} />
                    <CustomText fontSize={RFValue(6)} style={{ color: 'black' }}>8 min</CustomText>
                </View>
            </View>
            <CustomText style={{ color: 'black', marginLeft: 2 }} variant="h8" numberOfLines={2} >
                {item.name}
            </CustomText>

            <View style={styles.priceContainer}>
                <View>
                    <CustomText variant="h8" style={{ color: 'black' }}>
                        ${item.price}
                    </CustomText>
                    <CustomText variant="h8" style={{ color: 'black', opacity: 0.5 }}>
                        ${item.discountPrice}
                    </CustomText>
                    <UniversalAdd item={item} />
                </View>
            </View>
        </View>
    );
};

export default ProductItem;

const styles = StyleSheet.create({
    container: {
        width: '45%',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 10,
        marginLeft: 10,
        overflow: 'hidden',
        borderWidth: 2,

    },
    imageContainer: {
        height: screenHeight * 0.14,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5
    },
    image: {
        height: '100%',
        width: '100%',
        aspectRatio: 1 / 1,
        resizeMode: 'contain'
    },
    flexRow: {
        flexDirection: 'row',
        padding: 2,
        borderRadius: 4,
        alignItems: 'center',
        gap: 2,
        alignSelf: 'flex-start'
    },
    clockIcon: {
        height: 15,
        width: 15
    },
    content: {
        flex: 1,
        paddingHorizontal: 10
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        marginTop: 'auto'
    }
});
