import React, { useState, useContext } from "react";
import Itens from "./components/Itens";
import "@radix-ui/themes/styles.css";
import { Box, Button, Card, Container, Flex, Grid, Heading } from "@radix-ui/themes";
import { Context } from "./context/Context";
import ProductCart from "./components/ProductCart";
import ConfirmScreen from "./components/ConfirmScreen";

export default function App() {
  const { Cart, Mostrar, Data, OrderTotal, toggle, Quantity} = useContext(Context);
  

  return (
    <div className="bg-rose-50 place-items-center">
      <Box className="w-11/12">
      <Flex className="gap-12"> 
        <Container className="basis-3/4">
          <Heading className="py-6 text-6xl">Desserts</Heading>
            <Flex wrap="wrap" className="justify-between">
              {
                Data.map((dados) => (<Itens
                  key={JSON.stringify(dados)} /* A falta do key gera o erro (child in a list should have a unique "key" prop) */
                  productName={dados.name} 
                  productCategory={dados.category} 
                  productPrice={dados.price}
                  productImgDesktop={dados.image.desktop}
                />))
              }
            </Flex>
        </Container>
        <Container className="basis-1/4">
            <Grid className="mt-6 bg-white rounded-xl py-6 px-6">
              <Heading className="text-red-700 text-2xl font-extrabold"> Your Cart ({Quantity}) </Heading>
                <Box>
                  {Quantity !== 0 ? 
                    Cart.map((dados) => (dados.productquantity === 0 ? 
                      null 
                      : 
                      <ProductCart
                        productName={dados.productName}
                        quantity={dados.productquantity}
                        total={dados.priceTotal}
                        id={dados.productName}
                      />))
                  : null}
                  {Quantity == 0 ?
                  <>
                    <img src="images/illustration-empty-cart.svg" className="place-self-center"/>
                    <p className="place-self-center">Your added items will appear here</p>
                  </>
                  : 
                  <>
                    <Flex className="justify-between py-3">
                      <span>Order Total</span>
                      <Heading>${OrderTotal()}</Heading> 
                    </Flex>
                    <Flex className="justify-center bg-red-100 py-5 rounded-lg">
                      <img src="images/icon-carbon-neutral.svg" alt="icon-carbon-neutral" />
                      <p>This is a <strong>caborn-neutral</strong> delivery</p>
                    </Flex>
                    <Grid className="justify-center pt-5">
                    <Button 
                      className="bg-red-700 text-white font-medium py-6 px-8 border-none rounded-full hover:bg-red-800 hover:cursor-pointer"
                      onClick={() => {toggle()}}>
                      Confirm Order
                    </Button>
                    </Grid>
                  </>
                  }
                </Box>
            </Grid>
      </Container>
      </Flex>
      </Box>
      {Mostrar && <ConfirmScreen/>}
    </div>    
  )
}

