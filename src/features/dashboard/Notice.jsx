
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { NoticeHeight } from "../../utils/Scaling";
import CustomText from "../../components/ui/CustomText";

const Notice = () => {
  return (
    <View style={{height:NoticeHeight}}>
      <View style={styles.container}>
            <View style={styles.noticeContainer}>
                <SafeAreaView style={{padding:20}}>
                    <CustomText style={styles.heading} variant="h8">
                        It's raining near this location
                    </CustomText>
                    <CustomText variant="h9" style={styles.textCenter}>
                        Our delivery partners may take longer to reach you
                    </CustomText>
                </SafeAreaView>
            </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#CCD5E4'
    },
    noticeContainer:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#CCD5E4'
    },
    textCenter:{
        textAlign:'center',
        marginBottom:8,
        color:'black'
    },
    heading:{
        color:'#2D3875',
        marginBottom:8,
        textAlign:'center',
    }
})

export default Notice;

