import { FunctionComponent } from 'react';
import styles from './Posts.module.css';

export interface PostData {
    pid: number,
    postDate: Date,
    editDate: Date,
    postDescription: string,
    uid: number,
    user: {
        name: string,
        lastName: string,
        login: string,
        userGroupId: number
    }
}

interface PostProps {
    postData: PostData
}

const Posts:FunctionComponent<PostProps> = ({postData}) => {

    return (<>
        <div className={styles.posts}>
            <div className={styles.profilepicture} />
            <div className={styles.groupParent}>
                <div className={styles.nazwaUytkownikaParent}>
                    <div className={styles.nazwaUytkownika}>{postData.user.login}</div>
                    <div className={styles.ileCzasuTemu}>{new Date(postData.postDate).toDateString()}</div>
                </div>
                {/*<div className={styles.buttons} onClick={() => {}}>*/}
                {/*    <b className={styles.text}>...</b>*/}
                {/*</div>*/}
            </div>
            <div className={styles.postsInner}>
                <div className={styles.tytuNewsaParent}>
                    {/*<b className={styles.tytuNewsa}>Tytuł Newsa</b>*/}
                    <div className={styles.witajcieWMagicznym}>{postData.postDescription}</div>
                </div>
            </div>
        </div>
    </>);
};

export default Posts;
