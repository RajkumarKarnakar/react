import { useDataSource } from "./useDataSource.js";
import axios from "axios";
const serverResource = resourceUrl => async () => {
    const response = await axios.get(resourceUrl);
    return response.data;
};

// const localStorageResource = key => () => {
//     // Wrap the value in a promise
//     return Promise.resolve(localStorage.getItem(key));
// };

export const UserInfo = ({ userId }) => {
    const user = useDataSource(serverResource(`/users/${userId}`));
    //const message = useDataSource(localStorageResource('message'));

    console.log("Hi"); // This will log only once

    const { name, age, hairColor, hobbies } = user || {};

    return user ? (
        <>
            <h2>{name}</h2>
            <p>Age: {age} years</p>
            <p>Hair Color: {hairColor}</p>
            <h3>Hobbies:</h3>
            <ul>
                {hobbies.map(hobby => (
                    <li key={hobby}>{hobby}</li>
                ))}
            </ul>
        </>
    ) : (
        <p>Loading...</p>
    );
};