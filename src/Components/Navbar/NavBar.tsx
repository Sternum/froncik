import styles from './Navbar.module.css';
import {redirect} from "next/navigation";
import Link from "next/link";

const Navbar = () => {

    return (
        <div className={styles.rectangleDiv}>
            <div>
                <img className={styles.logoIcon} src="/logo.png" />
            </div>
            <div className={styles.menuContainer}>
                <Link className={styles.navButton} href={"/auth/add_post"}>
                    <img className={styles.navButtonIcon} src={"/Plus.png"} />
                </Link>
                <Link className={styles.navButton} href={"auth/profile"}>
                    <img className={styles.navButtonIcon}  src={"/Vector.png"} />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
