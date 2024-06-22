import styles from "./usersListDisplayer.module.css";
import SectionComponent from "../generalUI/sectionComponent";
import UserDetailsItem from "./userDetails";

export default function UsersListDisplay({usersData, onDeleteItem}){
    return(
        <SectionComponent className={styles.listDisplayer}>
            {
                usersData.map((data)=>(<UserDetailsItem key={data.id} id={data.id} username={data.username} age={data.age} onClick={()=>onDeleteItem(data.id)}/>))
            }
        </SectionComponent>
    );
}