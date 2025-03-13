import { Children } from "react"

function App() {
  return <div>
    <CardWrapper>
      hey buddy
    </CardWrapper>
    <CardWrapper>
      wassup man!
    </CardWrapper>
  </div>
}



function CardWrapper({children}){
  return <div style={{border : "7px solid red", padding : 10, margin : 10}}>  
   {children}
  </div>
}



export default App
