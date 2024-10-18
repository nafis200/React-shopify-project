
import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "components/ui/CustomText";
import UniversalAdd from "components/ui/UniversalAdd";

const OrderItem = ({item}) => {
  
  return (
    <View style={styles.flexRow}>
    
     <View style={styles.imgContainer}>
         <Image source={{uri: item?.item?.image}} style={styles.img} />
     </View>

     <View style={{width:'55%'}}>
         <CustomText style={styles.text} variant="h8">
            {item?.item?.name}
         </CustomText>
         <CustomText style={styles.text} variant="h9">
            {item?.item?.quantity}
         </CustomText>
     </View>

     <View style={{width:'20%', alignItems:'flex-end'}}>
         <UniversalAdd item={item?.item} />
         <CustomText style={[styles.text]} variant="h9">
            ${item?.item?.price * item?.count}
         </CustomText>
     </View>

    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
    img:{
        width:40,
        height:40
    },
    imgContainer:{
       padding:10,
       borderRadius:15,
       width:'17%'   
    },
    flexRow:{
         alignItems:'center',
         flexDirection:'row',
         gap:12,
         paddingHorizontal:10,
         paddingVertical:12,
         borderTopWidth:0.6
    },
    text:{
        color:'black'
    }
});
