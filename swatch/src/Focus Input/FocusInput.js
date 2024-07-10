import { useEffect, useRef } from "react"

export const FocusInput = ()=>{
    const focusedInput = useRef(null)
    useEffect(()=>{
        focusedInput.current.focus();
    },[])
    return (
        <div>
            <label htmlFor="focused-input">Focus me on the page load!</label>
            <input name="focused-input" ref={focusedInput}/>
        </div>
    )
}