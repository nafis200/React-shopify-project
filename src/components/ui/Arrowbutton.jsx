
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Arrowbutton = ({title,onPress,price,loading}) => {
  return (
    <View>
      <Text style={{color:'black'}}>Arrowbutton</Text>
    </View>
  );
};

export default Arrowbutton;

const styles = StyleSheet.create({
    btn:{
        backgroundColor:'gray',
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        borderRadius:12,
        marginVertical:10,
        marginHorizontal:15
    },
    flexRow:{
        flexDirection:'row',
        justifyContent:'center'
    }
});
