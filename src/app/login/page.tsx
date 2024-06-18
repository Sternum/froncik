import LoginForm from "@/Components/LoginForm/LoginForm";
import styles from "./page.module.css";
import {redirect} from "next/navigation";

const LoginPage = () => {

    return (
        <div className={styles.loginFormContainer}>
            <LoginForm />
        </div>
    )
}

export default LoginPage;