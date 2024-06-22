import styles from "./errorModal.module.css";
import ButtonComponent from "./buttonComponent";
import { Fragment } from "react";
import ReactDOM from "react-dom";

function Backdrop(Props){
    return (
        <div className={styles.mainBackground} onClick={Props.onWindowClose}></div>/*when the user clicks anywhere outside the error window, it should close the window*/
    );
}

function ModalWindow(Props){
    return (
        <div className={styles.windowWrapper}>
            <div className={styles.errorWindow}>
                <header>{Props.subject}</header>
                <p>{Props.message}</p>
                <ButtonComponent onClick={Props.onWindowClose} className={styles.windowCloseButton}>Okay</ButtonComponent>
            </div>
        </div>
    );
}

//this kind of component is also known as a "modal". i.e any component that serves as an added component which usually covers the whole screen e.g. alert windows
export default function ErrorModal({subject, message, onWindowClose}){
    
    
    return(
        <Fragment>{/*for frangment components, you can just write empty tags like so <></> */}
            {ReactDOM.createPortal(<Backdrop onWindowClose={onWindowClose}/>, document.getElementById("backdrop-root"))/*this tells reactDom to not render this component here but rather render it in the stated container*/}
            
            {ReactDOM.createPortal(<ModalWindow subject={subject} message={message} onWindowClose={onWindowClose}/>, document.getElementById("modal-root"))/*this tells reactDom to not render this component here but rather render it in the stated container*/}
        </Fragment>
    )
}