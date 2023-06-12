import { useState } from "react"

import {    
    userSignInWithEmailAndPassword,
    signInWithGooglePopup
} from "../../utils/firebase/firebase.utils"

import FormInput from "../form-input/form-input.component"

import "./sign-in-form.styles.scss"

import Button from "../button/button.component"


const formInitialState = {
    email: "",
    password: ""
}

const SignInForm = () => {

    const [form, setForm] = useState(formInitialState)
    const { email, password } = form


    const clearForm = () => {
        setForm(formInitialState)
    }
    const signInWithGoogle = async () => {
        await signInWithGooglePopup()
        
    }

    
    const handleSubmit = async e => {
        e.preventDefault()

        try {
            await userSignInWithEmailAndPassword(email, password)
            //console.log(response)
            clearForm()
        } catch (error) {
            switch (error.code) {
                case "auth/user-not-found":
                    alert("user not found")
                    break;
                case "auth/wrong-password":
                    alert("wrong password")
                    break;
                default:
                    console.log(error)

            }

        }
    }   

    const handleChange = e => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }
    return (
        <div>
            <div className="sign-up-container">
                <h2>Already have an account? </h2>
                <span>Sign in with your email and password</span>
                {/* use handleSubmit function in onSubmit  */}
                <form onSubmit={handleSubmit}>

                    <FormInput
                        label="Email"
                        type="text"
                        required
                        onChange={handleChange}
                        name="email"
                        value={email}
                    />
                    <FormInput
                        label="Password"
                        type="password"
                        required
                        onChange={handleChange}
                        name="password"
                        value={password}
                    />
                    <div className="buttons-container">
                        <Button type="submit">Sign In</Button>
                        <Button type='button    ' buttonType='google' onClick={signInWithGoogle}>Sign In With Google</Button>
                    </div>

                </form>
            </div>
        </div>
    )
}


export default SignInForm