import { createContext, useState } from 'react'

export const Context = createContext()

export const ContextProvider =({children}) => {
   const [Cart, setCart] = useState(
     [ 
      {productName:"Waffle with Berries", productquantity:0, priceTotal:0},
      {productName:"Vanilla Bean Crème Brûlée", productquantity:0, priceTotal:0},
      {productName:"Macaron Mix of Five", productquantity:0, priceTotal:0},
      {productName:"Classic Tiramisu", productquantity:0, priceTotal:0},
      {productName:"Pistachio Baklava", productquantity:0, priceTotal:0},
      {productName:"Lemon Meringue Pie", productquantity:0, priceTotal:0},
      {productName:"Red Velvet Cake", productquantity:0, priceTotal:0},
      {productName:"Salted Caramel Brownie", productquantity:0, priceTotal:0},
      {productName:"Vanilla Panna Cotta", productquantity:0, priceTotal:0},
   ]);

   return(
      <Context.Provider value={{Cart, setCart}}>
         {children}
      </Context.Provider>
   )
}