import { Box, Button, Card, Container, Flex, Grid, Heading } from "@radix-ui/themes";
import { useContext, useEffect } from "react";
import { Context } from "../context/Context";


export default function ItensConfirmScreen(props){
   const { Cart, setCart, Data } = useContext(Context)

   const DadosItens = Data.find(dados => props.productName === dados.name)
   

   return(
      <Box className="py-2">
         <Flex>
            <img src={DadosItens.image.desktop} className="h-10" />
               <Grid>
                  <p>{DadosItens.name}</p>
                     <Flex>
                     <span>{props.productQuantity}</span>
                     <span>{DadosItens.price}</span>
                     </Flex>
               </Grid>
               <p>{props.productPriceTotal}</p>
         </Flex>
         <hr />
      </Box>
   )
}