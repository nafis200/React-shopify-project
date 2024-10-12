
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import useAxiosSecure from "../../provider/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../provider/Authprovider";
const ProductDashboard = () => {
  const {logout} = useContext(AuthContext)
  const axiosSecure = useAxiosSecure()
  const { data: users = [],isLoading,refetch} = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    }
  });

  

  return (
    <View>
      <Text style={{color:'black'}}>ProductDashboard</Text>
      <Text style={{color:'black'}}>ProductDashboard</Text>
      <Text style={{color:'black'}}>ProductDashboard</Text>
      <Text style={{color:'black'}}>ProductDashboard</Text>
    </View>
  );
};

export default ProductDashboard;

const styles = StyleSheet.create({});
