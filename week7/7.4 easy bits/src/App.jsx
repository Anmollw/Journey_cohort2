import { useState } from 'react'
import './App.css'

import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalnotificationSelector } from "./atoms";
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';

function App() {
  return <RecoilRoot>
    <Mainapp />
  </RecoilRoot>

}

function Mainapp(){
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobAtomCount= useRecoilValue(jobsAtom);
  const messagingAtomCount= useRecoilValue(messagingAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);

  const totalnotificationcount = useRecoilValue(totalnotificationSelector);

  return (
    <>
     <button>Home</button>

     <button>My Network ({networkNotificationCount>=100 ? "99+" : networkNotificationCount})</button>
     <button>Jobs ({jobAtomCount})</button>
     <button>Messaging ({messagingAtomCount})</button>
     <button>Notifications ({notificationAtomCount})</button>
     
     <button>Me ({totalnotificationcount})</button>
    
    </>
  )
}

export default App
