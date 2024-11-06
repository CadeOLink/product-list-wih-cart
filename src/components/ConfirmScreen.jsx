import { Box, Button, Card, Container, Flex, Grid, Heading } from "@radix-ui/themes";
import { Context } from "../context/Context";
import { useContext } from "react";
import ItensConfirmScreen from "./ItensConfirmScreen";

export default function ConfirmScreen(){
   const { Cart, setCart, Mostrar, setMostrar, OrderTotal, toggle, clearDados} = useContext(Context);

   return(
      <Container className="bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/12 py-10 px-4 rounded-xl">
         <img src="../../public/images/icon-order-confirmed.svg" className="w-10" />
            <Grid>
               <Box className="py-4">
                  <Heading>
                     Order Confirmed
                  </Heading>
                  <span>We hope you enjoy your food!</span>
               </Box>
                  <Box className="bg-red-50 rounded-lg py-4 px-4">
                     <Box>
                        {Cart.map((CartMap) => CartMap.productquantity > 0 ? 
                        <ItensConfirmScreen 
                        productName={CartMap.productName} 
                        productQuantity={CartMap.productquantity} 
                        productPriceTotal={CartMap.priceTotal}/> 
                        : null)}
                     </Box>
                     <Flex className="py-4 justify-between">
                        <p>Order Total</p>
                        <h1 className="bg-red-50 font-bold">${OrderTotal()}</h1>
                     </Flex>
                  </Box>
               <Button  
               className="bg-red-700 text-white font-medium py-6 px-8 mt-6 border-none rounded-full hover:bg-red-800 hover:cursor-pointer"
               onClick={() => {toggle(); clearDados()}}>
                  Start New Order
               </Button>
            </Grid>
      </Container>
   )
}