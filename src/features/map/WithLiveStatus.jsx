import { useNavigationState } from "@react-navigation/native"
import CustomText from "components/ui/CustomText"
import { AuthContext } from "provider/Authprovider"
import { useContext, useEffect, useRef, useState } from "react"
import { StyleSheet, View, Image, TouchableOpacity } from "react-native"
import { useCartStore } from "state/cartStore"
import { hocStyles } from "styles/globalStyles"
import { navigate } from "utils/NavigationUtils"


const withLiveStatus = (WrappedComponent) => {
    const WithLiveStatusComponent = (props) => {

        const currentOrder = true
        const routeName = useNavigationState(state => state.routes[state.index]?.name)

        return (
            <View style={styles.container}>
                <WrappedComponent {...props} />
                {
                    currentOrder && routeName === 'ProductDashboard' && (
                        <View style={[hocStyles.cartContainer, { flexDirection: 'row', alignItems: 'center' }]}>
                            <View style={styles.flexRow}>

                                <View style={styles.img}>
                                    <Image source={require('@assets/icons/bucket.png')} style={{ width: 20, height: 20 }} />
                                </View>

                                <View style={{ width: '68%', color: 'black' }}>
                                    <CustomText style={{ color: 'red' }}>Order is</CustomText>
                                    <CustomText style={{ color: 'black' }}>Order is backend</CustomText>
                                </View>

                            </View>

                            <TouchableOpacity onPress={() => navigate('LiveTracking', {})} style={styles.btn} >
                                <CustomText variant="h5" style={{ color: 'blue' }}>View</CustomText>
                            </TouchableOpacity>

                        </View>
                    )
                }
            </View>
        )
    }
    return WithLiveStatusComponent
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flexRow: {
       
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        borderRadius:15,
        marginBottom:15,
        paddingVertical:10,
        padding:10

    },
    img: {
      borderRadius:100,
      padding:10,
      justifyContent:'center',
      alignItems:'center'
    },
    btn:{
        paddingHorizontal:10,
        paddingVertical:2,
        borderWidth:0.7,
        borderRadius:5
    }
})

export default withLiveStatus