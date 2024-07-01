export const ProductInfo = ({product}:{product:{name:string;price:number;description:string;rating:number}})=>{
    const {name,price,description,rating} = product ||{};

    return product?(
        <>
        <h2>{name}</h2>
        <p>Price: {price}</p>
        <h3>Description:</h3>
        <p>{description}</p>
        <p>Avarage Rating: {rating}</p>
        </>
    ):<p>Loading...</p>
}