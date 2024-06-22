import './App.css';
import {useState} from "react";
import appIcon from "./assets/dataCollectorIcon.png";
import SectionComponent from './components/generalUI/sectionComponent';
import { DataCollectionForm } from './components/dataCollectionForm';
import UsersListDisplay from './components/listingComponents/usersListDisplayer';
import ErrorModal from './components/generalUI/errorModal';

function App() {

  const [allUsersData, saveUsersData] = useState(
    [
      {
        id: Math.random() * 122,
        username: "HaloKing",
        age: 29
      },
      {
        id: Math.random() * 122,
        username: "OnionKnight",
        age: 19
      },
      {
        id: Math.random() * 122,
        username: "BumJar",
        age: 32
      }
    ]
  );

  //this state holds any error thats passed to this component to display
  const [currentError, newError] = useState({
    subject: "",
    message: ""
  });

  //function for adding to the list of users
  const addToUsersData = (data) => {
    //assign an id to the user data before saving
    const newData = {
      ...data,
      id: Math.random() * 122
    }

    saveUsersData(prevUsersData=>(
      [newData, ...prevUsersData]
    ));
  }
  
  //function for removing user from the list of users
  const removeUserdata = (id) => {
    saveUsersData(prevUsersData=>(
      prevUsersData.filter(data=>(data.id != id))
    ));
  }

  //function for showing any error message. This can be passed to any component that needs to return error when required
  const showError = (subject, message) => {
    newError({subject, message});
  }

  //this function clears the current saved error message by setting an object with empty attribute values
  const clearError = () => {
    newError({    
      subject: "",
      message: ""
    })
  }

  return (
    <div className="App">
      <SectionComponent className="headerSection">
        <img src={appIcon} alt="Data Collector App Icon"/>
        <h2>Data Collector</h2>
      </SectionComponent>

      <DataCollectionForm onSubmit={addToUsersData} onErrorTriggered={showError} />
      <UsersListDisplay usersData={allUsersData} onDeleteItem={removeUserdata}/>

      {/* if there is any error message in the currentError state variable, displaay the error window*/}
      {currentError.subject != "" && <ErrorModal subject={currentError.subject} message={currentError.message} onWindowClose={clearError}/>}
    </div>
  );
}

export default App;
