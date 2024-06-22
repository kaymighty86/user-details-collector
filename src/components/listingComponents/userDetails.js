import styles from './userDetails.module.css';

export default function UserDetailsItem({id, username, age, onClick}){

    return (
        <div className={styles.userDetailsContainer} onClick={event=>onClick(id)}>
            <p>{username}</p>
            <p>{`${age} years old`}</p>
        </div>
    );
}