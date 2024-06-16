import { FunctionComponent } from 'react';
import styles from './RegisterForm.module.css';


const RegisterForm:FunctionComponent = () => {
    return (
        <div className={styles.property1signin}>
            <b className={styles.signIn}>SIGN IN</b>
            <img className={styles.frameIcon} alt="" src="Frame.svg" />
            <div className={styles.inputField}>
                <div className={styles.enterInputWrapper}>
                    <div className={styles.enterInput}>Login...</div>
                </div>
                <div className={styles.additionalInfo}>Additional Info</div>
            </div>
            <div className={styles.inputField}>
                <div className={styles.enterInputWrapper}>
                    <div className={styles.enterInput}>Mail Address...</div>
                </div>
                <div className={styles.additionalInfo}>Additional Info</div>
            </div>
            <div className={styles.inputField}>
                <div className={styles.enterInputWrapper}>
                    <div className={styles.enterInput}>Password...</div>
                </div>
                <div className={styles.additionalInfo}>Additional Info</div>
            </div>
            <div className={styles.inputField3}>
                <div className={styles.frameDiv}>
                    <div className={styles.enterInput}>Confirm Password...</div>
                </div>
                <div className={styles.additionalInfo}>Additional Info</div>
            </div>
            <div className={styles.buttons}>
                <b className={styles.text}>Sign In</b>
            </div>
        </div>);
};

export default RegisterForm;
