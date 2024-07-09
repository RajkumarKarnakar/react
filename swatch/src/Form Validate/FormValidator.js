import { useState } from "react";

export const FormValidator = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const [message, setMessage] = useState('')
    const findErrors = () =>{
        const errors = []
        if(!email || !password || !passwordConfirm) 
            errors.push('All field must be filled in')
        if([...email].filter(i => i ==='@').length !== 1)
            errors.push('An email must have one @ sign')
        if(password.length < 8 ) 
            errors.push('Password must be 8 characters or longer')
        if(password !== passwordConfirm) 
            errors.push('Password must match')

        return errors 
    }

    const handleSubmit = e => {
        e.preventDefault()
        
        const errors = findErrors()
        setMessage(errors.length ? errors.join(', '): 'User created successfully')
    }
        return (
            <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
              <h2>Sign Up!</h2>
              <label htmlFor='email'>Email</label>
              <input
                type='text' name='email'
                onChange={e => setEmail(e.target.value)}
              />
              <label htmlFor='password'>Password</label>
              <input
                type='password' name='password'
                onChange={e => setPassword(e.target.value)}
              />
              <label htmlFor='password-confirm'>Confirm Password </label>
              <input
                type='password' name='password-confirm'
                onChange={e => setPasswordConfirm(e.target.value)}
              />
              <p style={{color:'deeppink'}}>{message}</p>
              <input type='submit' value='Submit' />
            </form>
          )
        
    }