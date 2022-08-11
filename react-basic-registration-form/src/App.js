import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //Use useState hook to define a function called setFormValue to set the form field values
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  //state to handle submitted state - use ternary operator to display success message
  const[submitted,setSubmitted] = useState(false);

  //A state variable to handle validation

  const[isValid, setIsValid] = useState(true);

  //Function to handle changes made to first name field and save it in the formValues state
  const handleFirstNameChange = (event) => {
    //The speard operator will clone formValues in a temporary object and update the firstName property alone with the value from event
    //Then call the set function to set the updated formValue in the state
    setFormValues({...formValues, 'firstName': event.target.value});
  }

  const handleLastNameChange = (event) => {
    setFormValues({...formValues, 'lastName': event.target.value});
  }

  const handleEmailChange = (event) => {
    setFormValues({...formValues, 'email': event.target.value})
  }

  //Or define a generic method to handle any change to any form field

  const handleFormValueChange = (event, formField) => {
    let updatedFormValues = {...formValues};
    updatedFormValues[formField] = event.target.value;
    //Now call the useState hook method to set the updated form values
    setFormValues(updatedFormValues);
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsValid(formValues.firstName !== '' && formValues.lastName !== '' && formValues.email !== '');
    setSubmitted(true);
}
  //Method 1 - use a different handler function for each form field
  /*  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React basic form example
        </p>
      </div>
      
      <div className='registeration-form-container'>
          <h2>React Basic Registration Form example</h2>
          <form className='registeration-form'>
          
            <input type="text" placeholder='First Name' value={formValues.firstName} onChange={handleFirstNameChange}/> 
            <input type="text" placeholder='Last Name' value={formValues.lastName} onChange={handleLastNameChange}/>
            <input type="email" placeholder='Email' value={formValues.email} onChange={handleEmailChange}/>
           <button type="submit"> Register </button>
          </form>
        
      </div>
      
      </div>
      
    
  );*/

  //Method2: Use a common handler method for all the form fields by passing parameters to the handler function
  return(
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React basic form example
        </p>
      </div>
      
      <div className='registeration-form-container'>
          <h2>React Basic Registration Form example</h2>
          <form className='registeration-form' onSubmit={handleSubmit}>
            {submitted && isValid ? <div className='success'> Success! Thanks for registering!</div> : null}
            
            <input type="text" placeholder='First Name' value={formValues.firstName} onChange={event => handleFormValueChange(event,'firstName')}/> 
            {submitted && !formValues.firstName ? <div class="error"> First Name is required </div>: null}
            
            <input type="text" placeholder='Last Name' value={formValues.lastName} onChange={event => handleFormValueChange(event,'lastName')}/>
            {submitted && !formValues.lastName ? <div class="error"> Last Name is required </div>: null}

            <input type="email" placeholder='Email' value={formValues.email} onChange={event => handleFormValueChange(event,'email')}/>
            {submitted && !formValues.email ? <div class="error"> Email is required </div>: null}

           <button type="submit"> Register </button>
          </form>
        
      </div>
      
      </div>
    
  );
}

export default App;
