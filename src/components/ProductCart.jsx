import { Heading, Button, Flex } from "@radix-ui/themes"
import { useContext } from "react"
import { Context } from "../context/Context";

export default function ProductCart(props){
   const { clearItenCart } = useContext(Context);
   
   return(
      <div className="py-2">
         <Heading className="text-xl font-extrabold">{props.productName}</Heading>
            <Flex className="justify-between">
               <Flex className="w-3/4 my-2 gap-5">
                  <span className="text-red-700 font-semibold text-lg">{props.quantity}x</span>
                  <span className="text-gray-900 opacity-50 text-lg">@ {(props.total/props.quantity).toFixed(2)}</span>
                  <span className="text-amber-900 opacity-70 text-lg">${props.total.toFixed(2)}</span>
               </Flex>
               <img src="images/icon-remove-item.svg" alt="icon-remove-item"  
                  className="border-2 border-gray-300 px-1 py-1 h-full rounded-full"
                  onClick={() => {clearItenCart(props.productName)}}
               />
            </Flex>  
            <hr />
      </div>
   )
}