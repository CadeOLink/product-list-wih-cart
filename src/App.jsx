import React, { useEffect, useState } from "react";
import Itens from "./components/Itens";
import "@radix-ui/themes/styles.css";
import { Box, Card, Container, Flex, Grid, Heading } from "@radix-ui/themes";
import { stringify } from "postcss";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch('../data.json')
    .then((res) => res.json())
    .then((json) => setData(json))
    .catch((error) => console.log(`Erro encontrado: `+error))
  });

  return (
    <div>
      <Flex className="bg-rose-50"> 
        <Container size="3">
          <Heading className="py-6 text-6xl">Desserts</Heading>
            <Flex wrap="wrap" justify="between">
              {
                data.map((dados) => (<Itens
                  key={JSON.stringify(dados)} /* A falta do key gera o erro (child in a list should have a unique "key" prop) */
                  productName={dados.name} 
                  productCategory={dados.category} 
                  productPrice={dados.price}
                  productImgDesktop={dados.image.desktop}
                />))
              }
            </Flex>
        </Container>
        <Container size="1">
          <Card className="my-12">
            <Grid>
              <Heading className="text-red-700 py-6 text-2xl font-extrabold">Your Cart ({/* Quantia do carinho */})</Heading>
                <Box className="place-self-center">
                  <img src="../../images/illustration-empty-cart.svg" className="place-self-center"/>
                  <p>Your added items will appear here</p>
                </Box>
            </Grid>
          </Card>
      </Container>
      </Flex>
    </div>    
  )
}

