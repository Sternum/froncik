import LoginForm from "@/Components/LoginForm/LoginForm";
import styles from "./page.module.css";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

const LoginPage = () => {

    const login = async () => {
        'use server'
        const response = await fetch('https://sanproject.azurewebsites.net/Auth/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: 'test997',
                password: 'haslo123'
            })
        });
        throw new Error('dupa');
        const result = await response.text();
        redirect('/auth/main');
    }

    return (
        <div className={styles.loginFormContainer}>
            <LoginForm onLogin={login} />
        </div>
    )
}

export default LoginPage;