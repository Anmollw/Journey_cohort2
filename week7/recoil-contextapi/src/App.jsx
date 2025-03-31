import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";


function App() {;
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>  
  )
}

function Count(){
  return <div>
    <CountRenderer />
    <Button  />
  </div>
}


function CountRenderer(){
  const count = useRecoilValue(countAtom);
  return <div>
    <b>{count}</b>
    <EvenCountRenderer />
  </div>
}



function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelector);
  
  if (isEven % 2 ==0){
    return <div>
      It is even
  </div>
  }
}


function Button(){
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={()=>{
      setCount(count => count + 1)
    }}>Increase Count</button>

   <button onClick={()=>{
    setCount(count => count - 1)
   }}>Decrease Count</button>
  </div>

}

export default App