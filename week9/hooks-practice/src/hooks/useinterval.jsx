import { useEffect } from "react";
import { useState } from "react";

export function useInterval(cb,n){
  useEffect(()=>{
    setInterval(()=>{
        cb()
    }, n);

    return ()=>{

    }

  },[n]);
}