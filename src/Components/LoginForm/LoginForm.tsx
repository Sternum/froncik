'use client'
import { FunctionComponent } from 'react';
import styles from './LoginForm.module.css';
import {redirect} from "next/navigation";

interface LoginFormProps {
    onLogin: () => void;
}

const LoginForm:FunctionComponent<LoginFormProps> = ({onLogin}: LoginFormProps) => {

    // const login = async () => {
    //     const response = await fetch('https://sanproject.azurewebsites.net/Auth/Login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             "access-control-allow-origin" : "*",
    //         },
    //         body: JSON.stringify({
    //             username: 'test997',
    //             password: 'haslo123'
    //         })
    //     });
    //
    //     const result = await response.text();
    //     redirect('/auth/main');
    // }

    const dupa = async () => {
        try {
            onLogin();
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className={styles.loginoverlay}>
            <b className={styles.welcome}>WELCOME</b>
            <img className={styles.frameIcon} alt="" src="Frame.svg" />
            <div className={styles.inputField}>
                <div className={styles.enterInputWrapper}>
                    <div className={styles.enterInput}>Login...</div>
                </div>
                <div className={styles.additionalInfo}>Additional Info</div>
            </div>
            <div className={styles.inputField1}>
                <div className={styles.enterInputContainer}>
                    <div className={styles.enterInput}>Password...</div>
                </div>
                <div className={styles.additionalInfo}>Additional Info</div>
            </div>
            <button className={styles.buttons} onClick={() => dupa()}>
                <b className={styles.text}>Login</b>
            </button>
            <div className={styles.lineParent}>
                <img className={styles.groupChild} alt="" src="Line 4.svg" />
                <b className={styles.or}>OR</b>
                <div className={styles.buttons1}>
                    <b className={styles.text}>Sign In</b>
                </div>
            </div>
        </div>);
};

export default LoginForm;
