import styles from "./sectionComponent.module.css";

export default function SectionComponent(Props){
    //combine the original class with the additional style class passed (if there is any)
    const classes = `${styles.sectionStyle} ${Props.className != undefined? Props.className : ""}`
    
    return(
        <div className={classes}>
            {Props.children}
        </div>
    );
}