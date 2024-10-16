
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "provider/hooks/useAxiospublic";

const CategoryContainer = () => {
    const axiosPublic = useAxiospublic();
    const { data: users = [],isLoading,refetch} = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
          const res = await axiosPublic.get(`products`);
          return res.data;
        },
      });
      if(isLoading){
        return <Text style={{color:'black'}}>Loading......</Text>
      }
      console.log(users)
  return (
    <View>
      <Text>CategoryContainer</Text>
    </View>
  );
};

export default CategoryContainer;

const styles = StyleSheet.create({
    container:{
        marginVertical:15
    },
    row:{
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'baseline',
       marginBottom:25
    }
});
