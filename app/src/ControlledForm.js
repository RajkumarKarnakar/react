import React, { useEffect, useState } from 'react';

export const ControlledForm = () => {
    const [nameInputError, setNameInputError] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [hairColor, setHairColor] = useState('');

    useEffect(() => {
        if (name.length < 2) {
            setNameInputError('Name must be 2 or more characters long');
        }else setNameInputError('')
    }, [name]);

    const errorStyle = {
        color: 'red',
        // Add other CSS properties here if needed
    };

    return (
        <form>
            {nameInputError && <p style={errorStyle}>{nameInputError}</p>}
            <input
                name="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                name="age"
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <input
                name="hairColor"
                type="text"
                placeholder="HairColor"
                value={hairColor}
                onChange={(e) => setHairColor(e.target.value)}
            />
            <button>I love you bro</button>
        </form>
    );
};
