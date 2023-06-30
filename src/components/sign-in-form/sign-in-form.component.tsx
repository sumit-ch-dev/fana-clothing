import { useState, FormEvent, ChangeEvent } from "react"
import { useDispatch } from "react-redux";


import FormInput from "../form-input/form-input.component"

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";
import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";

const formInitialState = {
    email: "",
    password: ""
}

const SignInForm = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState(formInitialState)
    const { email, password } = form


    const clearForm = () => {
        setForm(formInitialState)
    }
    const signInWithGoogle = async () => {
        dispatch(googleSignInStart())
    }


    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            dispatch(emailSignInStart(email, password))
            clearForm()
        } catch (error) {
            console.log('user sign in failed', error)

        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }
    return (
        <div>
            <SignInContainer>
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
                    <ButtonsContainer>
                        <Button type="submit">Sign In</Button>
                        <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Sign In With Google</Button>
                    </ButtonsContainer>

                </form>
            </SignInContainer>
        </div>
    )
}


export default SignInForm