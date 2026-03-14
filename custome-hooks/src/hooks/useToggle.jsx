import { useState } from "react"

export const useToggle=(initialVal=false)=>{
    const [isVisible, setisVisible] = useState(initialVal)

    const toggle=()=>{
        setisVisible((prev)=>!prev)
    }
    return [isVisible,toggle] 
};