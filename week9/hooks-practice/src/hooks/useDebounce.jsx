// debouncing hook

import { useEffect, useState } from "react";

export function useDebounce(value,timeout){
    const [debouncedValue,setDebouncedValue] = useState(value);
    useEffect(()=>{
        let timer = setTimeout(()=>{
            setDebouncedValue(value);
        },timeout)

        return ()=>{
            clearTimeout(timer);
        }
        
 
    },[value]);

    return debouncedValue;
}