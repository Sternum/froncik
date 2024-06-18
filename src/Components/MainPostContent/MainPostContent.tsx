import styles from './MainPostContent.module.css';
import Posts, {PostData} from "@/Components/Post/Posts";
import {cookies} from "next/headers";


const MainPostContent = async () => {
    const token = cookies().get('token');
    if(!token) {
        throw new Error("Unauthorized");
    }

    const resposnse = await fetch("https://sanproject.azurewebsites.net/Posts", {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        method: 'GET',
        next: {revalidate: 600}
    });
    let posts = [];
    if(resposnse.status === 200){
        posts = await resposnse.json();

        posts = await Promise.all(posts.map(async (post: PostData) => {
            const response = await fetch(`https://sanproject.azurewebsites.net/Users/${post.uid}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'GET',
                next: {revalidate: 600}
            });

            const user = await response.json();
            return {...post, user};
        }));
    }

    return (<>
        <div className={styles.content}>
            {posts && posts.map((post: PostData) => <Posts postData={post} />)}
        </div>
        </>);
};

export default MainPostContent;
