import { useEffect } from "react"

function Counter(){
  
   useEffect(()=>{
      console.log("Component Mounted")
      const timer= setInterval(()=>{
         console.log("Counter is running")
   },1000)

   //cleanup
   return()=>{
      console.log("Component Unmounted")
      clearInterval(timer)
   }
   },[])
   
return(
    <>  
     <h1>time console </h1>
     <h1>console</h1>
    </>
)
}
export default Counter;