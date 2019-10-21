import React, { useState } from 'react';
import Form from './Form.js'; 

const initialTeamList = [
    { name: 'john', email: 'john@email.com', password: '' },
    { name: 'mary', email: 'mary@email.com', password: '' },
    { name: 'alison', email: 'alison@email.com', password: '' },
  ];
  
  const initialTeamForm = {
    name: '',
    email: '',
    password: '', 
  };
  
  export default function App(props) {
    const [teamList, setTeamList] = useState(initialTeamList); 
    const [teamForm, setTeamForm] = useState(initialTeamForm); 

    const onNameChange = e => {
        // we have the new value for the name input inside e.target.value
        setTeamForm({
          name: e.target.value,
          email: teamForm.email, 
          password: teamForm.role
        });
      };
    
      const onEmailChange = e => {
        // we have the new value for the email input inside e.target.value
        setTeamForm({
          name: teamForm.name,
          email: e.target.value, 
          password: teamForm.role
        });
      };
    
      const onPasswordChange = e => {
        // we have the new value for the password input inside e.target.value
        setTeamForm({
          name: teamForm.name,
          email: teamForm.email, 
          password: e.target.value
        });
      };
    
      const onFormSubmit = e => {
        // we DO need the event object
        e.preventDefault();
        const newTeamMember = {
          name: teamForm.name,
          email: teamForm.email,
          password: teamForm.password
        };
        const newTeamList = teamList.concat(newTeamMember);
        setTeamList(newTeamList);
        setTeamForm(initialTeamForm);
      };