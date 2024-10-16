import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "provider/hooks/useAxiospublic";
import { Text } from 'react-native'; 

const getAllCategories = () => {
  const axiosPublic = useAxiospublic(); // হুক React কম্পোনেন্ট বা কাস্টম হুকের মধ্যে হতে হবে

  const { data: Data = [], isLoading, error, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Text style={{ color: 'black' }}>Loading......</Text>;
  }

  if (error) {
    console.log("Error fetching categories", error);
    return <Text style={{ color: 'red' }}>Error occurred while fetching data.</Text>;
  }

  console.log(Data, 'product');

  return { Data};
};

export default getAllCategories;



