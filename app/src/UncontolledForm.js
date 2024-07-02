import React from "react";

export const  UncontolledForm = () =>{
        const nameInput = React.createRef();
        const ageInput = React.createRef();
        const haircolorInput = React.createRef();

    const handleSubmit = e =>{
        console.log(nameInput.current.value);
        console.log(ageInput.current.value);
        console.log(haircolorInput.current.value);
        e.preventDefault();
        

    }
    return(
        <form  onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="please enter your name" ref={nameInput}/>
            <input name="age" type="number" placeholder="please enter your age" ref={ageInput}/>
            <input name="haircolor" type="text" placeholder="please enter your hair color" ref={haircolorInput}/>
            <input type="submit" value="Submit"/>
        </form>
    )
}