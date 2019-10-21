import React from 'react';

function Form(props) {

    const { onNameChange, onEmailChange, onPasswordChange, onFormSubmit } = props;
    const { name, email, password } = props.teamForm;
    
    
      return (
        <form>
          <label htmlFor='nameInput'>Name</label>
          <input 
          value={name}
          onChange={onNameChange}
          id='nameInput' 
          type='text' />
    
          <label htmlFor='emailInput'>Email</label>
          <input 
          value={email}
          onChange={onEmailChange}
          id='emailInput' 
          type='text' />
  
          <label htmlFor='passwordInput'>Role</label>
          <input 
          value={role}
          onChange={onPasswordChange}
          id='passwordInput' 
          type='text' /><br></br>
    
          <button className="buttonstyle"
            disabled={false}
            onClick={onFormSubmit}
          >
            submit
            </button>
        </form>
      );
    }
  
    export default Form; 