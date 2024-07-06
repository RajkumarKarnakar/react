import { useUser } from "./useUser.js";

export const UserInfo = ({userId}) =>{
    const user = useUser(userId);
    const {name, age, hairColor, hobbies} = user || {};

    return user ? (
    <>
    <h2>{name}</h2>
    <p>Age: {age} years</p>
    <p>Hair Color: {hairColor}</p>
    <h3>Hobbies:</h3>
    <ul>
        {hobbies.map(hobby=><li key={hobby}>{hobby}</li>)}
    </ul>
    </>
    ): <p>Loading...</p>
}