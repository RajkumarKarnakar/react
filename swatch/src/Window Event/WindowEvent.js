import { useEffect } from "react"

export const WindowEvent = () =>{
    useEffect(()=>{
        const doubleClick = () => alert('mouse pressed twice');

        window.addEventListener('dblclick',doubleClick)

        return () => window.removeEventListener('dblclick',doubleClick)
    },[])
    return (
        <h2>Window event active</h2>
    )
}