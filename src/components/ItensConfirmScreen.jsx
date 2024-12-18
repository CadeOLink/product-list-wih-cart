import { Box, Button, Card, Container, Flex, Grid, Heading } from "@radix-ui/themes";
import { useContext, useEffect } from "react";
import { Context } from "../context/Context";


export default function ItensConfirmScreen(props){
   const { Data } = useContext(Context)

   const DadosItens = Data.find(dados => props.productName === dados.name)
   

   return(
      <Container>
         <Flex className="py-3 justify-between">
            <Flex>
               <img src={DadosItens.image.desktop} className="h-10 rounded-md"/>
                  <Grid className="px-4">
                     <p className="font-bold">{DadosItens.name}</p>
                     <Flex>
                        <p className="text-red-700 font-extrabold">{props.productQuantity}x</p>
                        <p className="text-gray-900 opacity-50 text-lg px-4">@{(props.productPriceTotal/props.productQuantity).toFixed(2)}</p>
                     </Flex>
                  </Grid>
            </Flex>
                  <p className="bg-red-50 font-bold">${props.productPriceTotal.toFixed(2)}</p>
         </Flex>
         <hr />
      </Container>
   )
}