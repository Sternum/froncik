import {createContext, ReactNode, useState} from "react";

export interface PostContextProps {
    posts: any[];
    setPosts: (posts: any[]) => void;
}

export const PostContext = createContext<PostContextProps | undefined>(undefined);

const PostContextProvider = ({children}: {children: ReactNode}) => {
    const [posts, setPosts] = useState<any[]>([]);

    return (
        <PostContext.Provider value={{posts, setPosts}}>
            {children}
        </PostContext.Provider>
    )
}

export default PostContextProvider;