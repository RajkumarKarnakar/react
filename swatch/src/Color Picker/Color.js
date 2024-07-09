const Color = ({hex, name, setBackgroundColor})=>{
    return(
        <div
            className="color-square" 
            style={{backgroundColor: hex}} 
            onClick={()=>setBackgroundColor(hex)}
        >
            <h1>{name}</h1>
        </div>
    )
}
export default Color;
