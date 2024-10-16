
import { StyleSheet, Text, View,Image } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "provider/hooks/useAxiospublic";
import Scalepress from "components/ui/Scalepress";
import { navigate } from "utils/NavigationUtils";
import CustomText from "components/ui/CustomText";

const CategoryContainer = () => {
  const axiosPublic = useAxiospublic();
  const { data: Data = [], isLoading, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await axiosPublic.get(`products`);
      return res.data;
    },
  });
  if (isLoading) {
    return <Text style={{ color: 'black' }}>Loading......</Text>
  }

  const renderItems = (items) => {
    return (
      <>
        {items.map((item, index) => {
          return (
            <Scalepress onPress={() => navigate('ProductCategory')} key={index} style={styles.item} >
              <View style={styles.imageContainer} >
                 <Image source={{ uri: item.image}} style={styles.image} />
              </View>
              <CustomText style={styles.text} variant="h8">{item.product_name}</CustomText>
            </Scalepress>
          );
        })}
      </>
    );
  };



  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {renderItems(Data?.slice(0,4))}
      </View>
      <View style={styles.row}>
      {renderItems(Data?.slice(4,8))}
      </View>
    </View>
  );
};

export default CategoryContainer;

const styles = StyleSheet.create({
  container: {
    marginVertical:25
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 25
  },
  imageContainer:{
      width:'100%',
      height:80,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      padding:6,
      backgroundColor:'#E5F3F3',
      marginBottom:8
  },
  item:{
      width:'22%',
      justifyContent:'center',
      alignItems:'center'
  },
  text:{
      textAlign:'center',
      color:'black'
  },
  image:{
     width:'100%',
     height:'100%',
     resizeMode:'contain',
     backgroundColor:'black'
  }
});
