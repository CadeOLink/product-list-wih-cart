import { Heading, Button, Flex } from "@radix-ui/themes"
import { useContext } from "react"
import { Context } from "../context/Context";

export default function ProductCart(props){
   const { Cart, setCart} = useContext(Context);
   
   function clearItenCart(Name){
      // Cart.map((CartMap) => (CartMap.productName === x ? {...Cart, value: 0} : console.log("erro")))
      setCart((Cart) => (Cart.map((CartMap) => (CartMap.productName === Name ? {...CartMap, productquantity: 0} : CartMap))))
   }

   return(
      <>
         <Heading className="text-xl font-extrabold">{props.productName}</Heading>
            <Flex className="justify-between">
               <Flex className="w-3/4 my-2 gap-5">
                  <span className="text-red-700 font-semibold text-lg">{props.quantity}</span>
                  <span className="text-gray-900 opacity-50 text-lg">@ {props.total/props.quantity}</span>
                  <span className="text-amber-900 opacity-70 text-lg">${props.total}</span>
               </Flex>
               <Button 
                  className="rounded-full bg-transparent text-black border-black border-solid border-2"
                  onClick={() => {clearItenCart(props.productName)}}
               >
                  X
               </Button>
            </Flex>  
      </>
   )
}