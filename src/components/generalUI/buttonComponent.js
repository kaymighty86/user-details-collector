import styles from "./buttonComponent.module.css";
/**
 * A custom styled button.
 * Button Properties >> type, onClick, className
 * @param {*} Props 
 * @returns 
 */
export default function ButtonComponent(Props){
    const classes = `${styles.customButton} ${Props.className != undefined? Props.className : ""}`
    const buttonType = Props.type != undefined? Props.type : "";//if a type is specified, set the atribute

    const clickHandler = (event) => {//handle the click event
        if(Props.onClick != undefined){
            Props.onClick(event);//any function assinged to this will be executed and the event parameter will be passed to the function to use
        }
    }

    return (
        <button type={buttonType} className={classes} onClick={clickHandler}>{Props.children}</button>
    );
}