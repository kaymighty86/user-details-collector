import styles from "./dataCollectionForm.module.css";
import SectionComponent from "./generalUI/sectionComponent";
import ButtonComponent from "./generalUI/buttonComponent";
import {useState, useRef} from "react";

/**
 * Custom component for collecting user inputs. The onSubmit function passes the collected data as function parameter. The onErrorTriggered function is executed when the user inputs invalid data
 * @param {function} onSubmit 
 * @param {function} onErrorTriggered 
 */
export function DataCollectionForm({onSubmit, onErrorTriggered}){
    // const [inputedData, setInputedData] = useState({
    //     username: "",
    //     age: ""
    // });

    //i'm using a single event listener here to check input change in both textboxes hence i need an extra paramter in the function to know which component triggered the function
    // const onInputChangeHandler = (event, inputtedDataType) => {//NOTE: inputtedDataType is either "username" or "age"
    //     setInputedData(prevInputedData => ({...prevInputedData, [inputtedDataType]: event.target.value.trim()}));
    // }

    const nameInputRef = useRef();//refs allow us have access to a dom element after it has been rendered for the first time. Just insert the name of this created reference (or ref) inside the "ref" property of the element you want to have access to
    const ageInputRef = useRef();

    const onSubmitClicked = (event) => {
        event.preventDefault();

        //the "current" attribute of the nameInputRef object represents the element we have created access to. Its kinda similar to "event.target" where "target" is the element that triggered an event
        const inputedUsername = nameInputRef.current.value;//we can access any html attribute of the referenced element for example the "value" of the element, the "id", etc.
        const inputedAge = ageInputRef.current.value;

        if(inputedUsername === ""){//check if username inputted is valid
            onErrorTriggered("Invalid Username","Username cannot be blank.");
            return;//Escape the function here.
        }
        
        if(inputedAge === "" || parseInt(inputedAge) < 0){//check if age inputted is valid
            onErrorTriggered("Invalid Age", "Age cannot be bank or less than 0");
            return;//Escape the function here.
        }

        //Submit data
        onSubmit({username: inputedUsername, age: inputedAge});

        //since we already have reference to the input elements, we can change any property of the element. However, it is strongly advised not to do that (do not manipulate elements anyhow) but to allow react do that by itself
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
    }

    return(
        <SectionComponent>
            <div className={styles.formContainer}>
                <form onSubmit={onSubmitClicked}>
                    <input ref={nameInputRef} type="text" name="username" placeholder="Username" className={styles.dataInputBox}/>
                    <input ref={ageInputRef}  type="number" name="age" step="1" placeholder="Age (years)" className={styles.dataInputBox}/>
                    <ButtonComponent type="submit" className={styles.submissionButton}>Add Data</ButtonComponent>
                </form>
            </div>
        </SectionComponent>
    );
}