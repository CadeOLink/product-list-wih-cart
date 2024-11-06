import { createContext, useEffect, useState } from 'react'
import data from "../../public/data.json"
export const Context = createContext()

export const ContextProvider =({children}) => {
   const [Data, setData] = useState([])
   const [Mostrar, setMostrar] = useState(false)
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

  const getDados = async (endpoint, id) => {
      try{
         const resquest = await fetch(endpoint+id);
         
         if(!resquest.ok){
            throw new Error(response.error);
         }

         const response = await resquest.json();

         return [response]

      } catch(error) {
         console.error("Error ao buscar dados: ", error);
      }
   } 
   // ? getDados('http://localhost:3000/', 4).then(dados => console.log(dados))
   // ? Exemplo de como usar a função para buscar dados 

   const Quantity = Cart.reduce((ac, CartReduce) => ac + CartReduce.productquantity, 0)

   const OrderTotal = () => {
      const quantityTotal = Cart.reduce((ac, CartReduce) => ac + CartReduce.priceTotal,0)
      return quantityTotal.toFixed(2)
    }
    
   const toggle = () => {
      setMostrar(!Mostrar);
   }
      
   const clearItenCart = (Name) => {
      setCart(Cart.map((CartMap) => 
         (CartMap.productName === Name ? {...CartMap, productquantity: 0, priceTotal: 0} : CartMap)))
   }

   const clearDados = () => {
      setCart((Cart) => Cart.map((CartMap) => CartMap ? {...CartMap, productquantity: 0, priceTotal: 0}: null))
      alert("Thanks for buying")
   }

  useEffect(() => {
   return setData(data.map(dados => dados))
  },[])

   return(
      <Context.Provider value={{Cart, setCart, Mostrar, setMostrar, Data, setData, OrderTotal, toggle, clearItenCart, Quantity, clearDados, getDados}}>
         {children}
      </Context.Provider>
   )
}