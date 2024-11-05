import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { useContext, useReducer, useState } from "react";
import { Context } from "../context/Context";

export default function Itens(props){
   const { Cart, setCart } = useContext(Context);

   function QuantityIncrement(id) {
      setCart((Cart) => Cart.map(
         (CartMap) => CartMap.productName === id ? {...CartMap, 
            productquantity: CartMap.productquantity + 1,
            priceTotal: CartMap.priceTotal + props.productPrice}
            : 
            CartMap))
   }

   function QuantityDencrement(id){
      setCart((Cart) => Cart.map(
         (CartMap) => CartMap.productName === id ? {...CartMap, 
            productquantity: CartMap.productquantity - 1,
            priceTotal: CartMap.priceTotal - props.productPrice}
            : 
            CartMap))
   }

   function Quantity(){
      const quantityTrue = Cart.find(CartFind => CartFind.productName === props.productName);
      return quantityTrue ? quantityTrue.productquantity : 0;
   }

   function ProductPriceValue(){
      const productPriceTotal = Cart.find(CartFind => CartFind.productName === props.productName);
      return productPriceTotal.priceTotal === 0 ? props.productPrice : productPriceTotal.priceTotal;
   }

   return (
       <Box width="30%" className="bg-red-50 pb-8">
                <Grid>
                  <img src={props.productImgDesktop} className="rounded-2xl" id={props.id}/>
                     <Flex className="justify-center">
                        { Quantity() == 0 ?
                           <>               
                           <Flex
                              className="text-black border border-solid border-gray-500 font-medium w-2/4 py-3.5 hover:text-red-600 hover:border-solid hover:border hover:border-red-600 hover:bg-white rounded-full justify-center hover:cursor-pointer"
                              onClick={() => {QuantityIncrement(props.productName)}} 
                           >
                              <img src="/images/icon-add-to-cart.svg" alt="icon-add-to-cart.svg" className="w-6"/>
                              Add to cart
                           </Flex>
                        </>
                        : 
                        <Box className="w-6/12 h-full">
                           <Flex
                              className="bg-red-700 text-black font-medium  rounded-full justify-around w-full py-3">
                              <img src="images/icon-decrement-quantity.svg" alt="icon-decrement-quantity" 
                              className="p-2 rounded-full border-white border-2 w-8 "
                              onClick={() => {QuantityDencrement(props.productName)}}/>
                                 <Box className="text-white">
                                    {
                                       Quantity()
                                    }
                                 </Box>
                                 <img src="images/icon-increment-quantity.svg" alt="icon-decrement-quantity" 
                                 className="p-2 rounded-full border-white border-2 w-8"
                                 onClick={() => {QuantityIncrement(props.productName)}}/>
                           </Flex>
                        </Box>
                        }
                     </Flex>
                </Grid>
                <Grid>
                  <Text className="opacity-50 font-bold text-base">{props.productCategory}</Text>
                  <Text className="font-black text-lg">{props.productName}</Text>
                  <Text className="text-red-700">${ProductPriceValue().toFixed(2)}</Text>
                </Grid>
       </Box>
   );   
}