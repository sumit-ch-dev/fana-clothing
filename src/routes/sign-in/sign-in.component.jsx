import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";


const SignIn = () => {
    useEffect(() => {
        const response = async () => {
            const result = await getRedirectResult(auth)
            console.log(result)
        }
        response()

    }, [])
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
        const userRef = await createUserDocumentFromAuth(user);
        console.log(userRef)
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with google popup</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn