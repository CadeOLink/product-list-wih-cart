import { createContext, useEffect, useState } from 'react'
export const Context = createContext()

export const ContextProvider =({children}) => {
   const [Data, setData] = useState()
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

   useEffect(()=>{
      const getDados = async() => {
         try{
            const Ids = [0,1,2,3,4,5,6,7,8]
   
            const resposta = await Promise.all(Ids.map(IdsMap => fetch(`http://localhost:3000/${IdsMap}`)))
   
            resposta.forEach(resposta => {
               if (!resposta.ok) {  
                 throw new Error(`Erro na requisição`);
               }
             });
            
            const data = await Promise.all(resposta.map(respostaMap => respostaMap.json()))
            setData(data)
         }
         catch (Error){
            console.log(Error)
         }
      } 
      getDados()
   },[])
   
   return(
      <Context.Provider value={
         {Cart, setCart, Mostrar, setMostrar, Data, setData, OrderTotal, toggle, clearItenCart, Quantity, clearDados}}>
            {children}
      </Context.Provider>
   )
}