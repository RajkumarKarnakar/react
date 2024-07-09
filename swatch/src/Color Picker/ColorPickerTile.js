import { createContext, useContext, useState } from "react";

const ColorContext = createContext({
    color: 'lightGrey',
    setColor: ()=>{}
})
export const ColorPickerTile = () =>{
    const colors = ['red','blue','yellow','green','black','white','purple'];
    const {setColor} = useContext(ColorContext);
    return(
        <div>
            <h1>Choose a color</h1>
            {colors.map(color => <button onClick={()=>setColor(color)}  key = {color} style={{backgroundColor: color}}/>)}
        </div>
    )
}
let Pixel = () =>{
    const { color} = useContext(ColorContext)
    const [pixelColor, setPixelColor] = useState('lightGrey')
    return <div  onClick={()=>setPixelColor(color)} style={{height:'20px', width:'20px', backgroundColor: pixelColor, margin: '1px'}}/>
}
let Pixels = ()=>{
    const pixels = [];
    for(let i = 0; i<100; i++)
        pixels.push(<Pixel />)
    return(
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', width: '210px', margin: '0 auto'}}>
            {pixels}
        </div>
    )
}
export default function PixelArt (){
    const [color, setColor] = useState('lightGrey')
    return(
        <ColorContext.Provider value={{color, setColor}}>
            <ColorPickerTile/>
            <Pixels/>
        </ColorContext.Provider>
    )
}