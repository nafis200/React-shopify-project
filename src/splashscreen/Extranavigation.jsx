

import { View, Text } from "react-native";
import { resetAndNavigate } from '../utils/NavigationUtils';
import { useQuery } from "@tanstack/react-query";
import useAxiospublic from '../provider/hooks/useAxiospublic';
import { AuthContext } from '../provider/Authprovider';
import React, { useContext, useEffect } from 'react';

const Extranavigation = () => {
const { user} = useContext(AuthContext);  
  const axiosPublic = useAxiospublic();
    const { data: users = [],isLoading,refetch} = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
          const res = await axiosPublic.get(`/users/${user?.email}`);
          return res.data;
        },
        enabled: !!user?.email,
      });
      if(isLoading){
        return <Text style={{color:'black'}}>Loading......</Text>
      }

      if(users?.role === 'customer'){
         resetAndNavigate('ProductDashboard')
        
      }
      else{
          resetAndNavigate('DeliveryLogin')
          
      }
      
  return (
    <View>
      
    </View>
  );
};

export default Extranavigation;
