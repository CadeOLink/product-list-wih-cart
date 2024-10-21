import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { useState } from "react";

export default function Itens(props){
   const [quantity, setQuantity] = useState(0);

   const quantityIncrement = () => {
      return setQuantity((quantity) => (quantity + 1));
   }

   const quantityDencrement = () => {
      return quantity > 0 ? setQuantity((quantity) => (quantity - 1)) : null; 
   }

   return (
       <Box width="290px">
          <Card>
                <Grid>
                  <img src={props.productImgDesktop} className="rounded-2xl" />
                     <Flex justify="center">
                        { quantity === 0 ?
                           <>               
                           <Button 
                              variant="outline"
                              radius="full"
                              className="text-black font-medium py-6 px-8"
                              onClick={quantityIncrement}
                           >
                              <img src="images/icon-add-to-cart.svg" alt="icon-add-to-cart.svg" />
                              Add to cart
                           </Button>
                        </>
                        :
                        <>
                        <Flex>
                           <Button onClick={quantityDencrement}>-</Button>
                              {quantity}
                           <Button onClick={quantityIncrement}>+</Button>
                        </Flex>
                        </>
                        }
                     </Flex>
                </Grid>
                <Grid>
                  <Text className="opacity-50 font-bold text-base">{props.productCategory}</Text>
                  <Text className="font-black text-lg">{props.productName}</Text>
                  <Text className="text-red-700">${props.productPrice}</Text>
                </Grid>
          </Card>
       </Box>
   );   
}