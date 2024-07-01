export const UserInfo = ({ user }: { user: { name: string; age: number; weight: number; hobbies: string[] } }) => {
    const { name, age, weight, hobbies } = user  || {};

    return user ? (
        <>
            <h2>{name}</h2>
            <p>Age: {age} years</p>
            <p>Weight: {weight} kg</p>
            <h3>Hobbies:</h3>
            <ul>
                {hobbies.map((h) => (
                    <li key={h}>{h}</li>
                ))}
            </ul>
        </>
    ):<p>Loading...</p>;
};
