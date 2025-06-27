import React from "react"

export default function({ children } : {
    children : React.ReactNode
}){
    return <div>
        <div className="border-b text-center p-1">
        20% of the next 3 days , Join Now!
    </div>
    {children}
    </div>
}