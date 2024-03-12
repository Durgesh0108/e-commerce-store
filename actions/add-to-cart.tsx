import { OrderItem } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/orderItems`;

const addProductToCart = async (id: string) => {
  const res = await axios.post(`${URL}/${id}`, data: {
    id
  });
  
  console.log(res.json());
	// return res.json();
};

export default addProductToCart;
