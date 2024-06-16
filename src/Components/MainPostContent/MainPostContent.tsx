import styles from './MainPostContent.module.css';
import Posts from "@/Components/Post/Posts";


const MainPostContent = () => {

    return (<>
        <div className={styles.content}>
            <Posts />
            <Posts />
            <Posts />
        </div>
        </>);
};

export default MainPostContent;
