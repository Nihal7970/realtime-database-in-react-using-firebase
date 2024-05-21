import { useState } from "react";

function Obj(){
   const [new , setNew] = useState({name:'nihal',age:'21'},{name:'abc',age:'90'});
 

  function renew(){
   setNew(new{name:'ram'});
  }
  


   return(
   <>
   <p>hello</p>
   
   
   
   
   </>
   )




}



