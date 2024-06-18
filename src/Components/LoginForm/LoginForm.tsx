'use client'
import {FunctionComponent, useState} from 'react';
import styles from './LoginForm.module.css';
import {login} from "@/Actions/Login";
import {log} from "util";

const LoginForm:FunctionComponent = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(undefined);

    const onLoginHandle = async () => {
        setLoading(true);
        await login();
        setLoading(false);
    }

    return (
        <div className={styles.loginoverlay}>
            <b className={styles.welcome}>WELCOME</b>
            <img className={styles.frameIcon} alt="" src="Frame.svg" />
            {loading ? <div>Loading....</div> :
            <>
            <form action={onLoginHandle} className={styles.formContainer} >
                <input
                    name="login"
                    type={"text"}
                    className={[styles.enterInput, styles.inputField, styles.enterInputWrapper].join(' ')}
                    placeholder={"Login"}
                />
                <input
                    name="login"
                    type={"password"}
                    className={[styles.enterInput, styles.inputField, styles.enterInputWrapper].join(' ')}
                    placeholder={"Password"}
                />
                <input
                    name="login"
                    type={"submit"}
                    className={styles.buttons}
                    value={"Login"}
                />
            </form>
            <div className={styles.lineParent}>
                <img className={styles.groupChild} alt="" src="Line 4.svg" />
                <b className={styles.or}>OR</b>
                <div className={styles.buttons1}>
                    <b className={styles.text}>Sign In</b>
                </div>
            </div>
            </>
            }
        </div>);
};

export default LoginForm;
