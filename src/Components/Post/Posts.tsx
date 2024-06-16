import { FunctionComponent, useState, useCallback } from 'react';
// import MenuPostOptions from "../components/MenuPostOptions";
// import PortalPopup from "../components/PortalPopup";
import styles from './Posts.module.css';


const Posts:FunctionComponent = () => {
    // const [isMenuPostOptionsOpen, setMenuPostOptionsOpen] = useState(false);

    // const openMenuPostOptions = useCallback(() => {
    //     setMenuPostOptionsOpen(true);
    // }, []);
    //
    // const closeMenuPostOptions = useCallback(() => {
    //     setMenuPostOptionsOpen(false);
    // }, []);

    return (<>
        <div className={styles.posts}>
            <div className={styles.profilepicture} />
            <div className={styles.groupParent}>
                <div className={styles.nazwaUytkownikaParent}>
                    <div className={styles.nazwaUytkownika}>Nazwa Użytkownika</div>
                    <div className={styles.ileCzasuTemu}>ile czasu temu</div>
                </div>
                {/*<div className={styles.buttons} onClick={() => {}}>*/}
                {/*    <b className={styles.text}>...</b>*/}
                {/*</div>*/}
            </div>
            <div className={styles.postsInner}>
                <div className={styles.tytuNewsaParent}>
                    <b className={styles.tytuNewsa}>Tytuł Newsa</b>
                    <div className={styles.witajcieWMagicznym}>Witajcie w magicznym świecie słów i idei, gdzie każde zdanie układa się w  niepowtarzalną opowieść. Podążając za strumieniem myśli, odkrywamy  niezbadane zakamarki ludzkiego umysłu. Jak wędrowcy w krainie marzeń,  stąpamy po ścieżkach wyobraźni, gdzie rzeczywistość splata się z  fantazją. W tej nieskończonej podróży literackiej, każde zdanie staje  się mostem między światami, łącząc nas w fascynującej sieci słów. Witajcie w magicznym świecie słów i idei, gdzie każde zdanie układa się w  niepowtarzalną opowieść. Podążając za strumieniem myśli</div>
                </div>
            </div>
        </div>
        {/*{isMenuPostOptionsOpen && (*/}
        {/*    <PortalPopup*/}
        {/*        overlayColor="rgba(113, 113, 113, 0.3)"*/}
        {/*        placement="Centered"*/}





        {/*        onOutsideClick={closeMenuPostOptions}*/}
        {/*    >*/}
        {/*        <MenuPostOptions onClose={closeMenuPostOptions} />*/}
        {/*    </PortalPopup>*/}
        {/*)}*/}
    </>);
};

export default Posts;
