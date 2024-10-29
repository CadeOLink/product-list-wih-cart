import React, { useState, useContext } from "react";
import Itens from "./components/Itens";
import "@radix-ui/themes/styles.css";
import { Box, Button, Card, Container, Flex, Grid, Heading } from "@radix-ui/themes";
import data from "/public/data.json"
import { Context } from "./context/Context";
import ProductCart from "./components/ProductCart";

export default function App() {
  const { Cart, setCart } = useContext(Context);
  const Quantity  =  Cart.reduce((ac, CartReduce) => ac + CartReduce.productquantity, 0)

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
            <Grid >
              <Heading className="text-red-700 py-6 text-2xl font-extrabold"> Your Cart ({Quantity}) </Heading>
                <Box>
                  {Quantity !== 0 ? 
                    Cart.map((dados) => (dados.productquantity === 0 ? 
                      null 
                      : 
                      <ProductCart
                        productName={dados.productName}
                        quantity={dados.productquantity}
                        total={dados.priceTotal}
                      />))
                  : null}
                  {Quantity == 0 ?
                  <>
                    <img src="images/illustration-empty-cart.svg" className="place-self-center"/>
                    <p className="place-self-center">Your added items will appear here</p>
                  </>
                  : 
                  <>
                    <span>Order Total</span>
                    <Heading>${1}</Heading> 
                    <p>This is a <strong>caborn-neutral</strong> delivery</p>
                    <Button className="bg-red-700 text-white font-medium py-6 px-8 border-none">Confirm Order</Button>
                  </>
                  }
                </Box>
            </Grid>
          </Card>
      </Container>
      </Flex>
    </div>    
  )
}

