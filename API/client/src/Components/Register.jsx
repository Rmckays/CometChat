import React from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import {v4 as uuid} from "uuid";
import axios from 'axios';

const registerForm = () => {

   const handleOnSubmit = () => {}

   const handleOnInputChange = () => {}

   return (
      <Segment style={{margin: "15rem auto", background: "rgba(0,0,0,0)", width: "25%"}}>
         <Form onSubmit={handleOnSubmit}>
            <Form.Input 
               onChange={handleOnInputChange}
               placeholder='Username' 
               name="username" 
               value=""/>
            <Form.Input 
               onChange={handleOnInputChange}
               placeholder='Name' 
               name="name" 
               value="" />
            <Form.Input 
               onChange={handleOnInputChange}
               type='email' 
               placeholder='Email' 
               name="email" 
               value=""/>
            <Form.Input 
               onChange={handleOnInputChange}
               placeholder='Password' 
               name="password" 
               value="" />
            <Button name="title" type='submit' content='Create' style={{width: "100%", background: "rgb(240, 156, 96)"}}/>
         </Form>
      </Segment>
   );
};

export default registerForm;
