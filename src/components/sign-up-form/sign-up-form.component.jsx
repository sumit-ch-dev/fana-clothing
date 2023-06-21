import { useState } from "react"


import FormInput from "../form-input/form-input.component"

import { useDispatch } from "react-redux"
import { signUpStart } from "../../store/user/user.action"

import { SignUpContainer } from "./sign-up-form.styles"

import Button from "../button/button.component"



const formInitialState = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = () => {

    const [form, setForm] = useState(formInitialState)
    const { displayName, email, password, confirmPassword } = form
    const dispatch = useDispatch()

    const clearForm = () => {
        setForm(formInitialState)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert("passwords don't match")
            return
        }
        try {
            dispatch(signUpStart(email, password, displayName))
            clearForm()
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("email already in use")
            } else {
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
            <SignUpContainer>
                <h2>Don't have an Account?</h2>
                <span>Sign Up with your email and password</span>
                {/* use handleSubmit function in onSubmit  */}
                <form onSubmit={handleSubmit}>
                    <FormInput
                        label="Display Name"
                        type="text"
                        required
                        onChange={handleChange}
                        name="displayName"
                        value={displayName}
                    />
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
                    <FormInput
                        label="Confirm Password"
                        type="password"
                        required
                        onChange={handleChange}
                        name="confirmPassword"
                        value={confirmPassword}
                    />
                    <Button type="submit">Sign Up</Button>
                </form>
            </SignUpContainer>
        </div>
    )
}


export default SignUpForm