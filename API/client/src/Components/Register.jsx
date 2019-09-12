import React from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

const registerForm = () => {
   return (
      <Segment style={{margin: "15rem auto", background: "rgba(0,0,0,0)", width: "25%"}}>
         <Form>
            <Form.Input 
               placeholder='Username' 
               name="username" 
               value=""/>
            <Form.Input 
               placeholder='Name' 
               name="name" 
               value="" />
            <Form.Input 
               type='email' 
               placeholder='Email' 
               name="email" 
               value=""/>
            <Form.Input 
               placeholder='Password' 
               name="password" 
               value="" />
            <Button name="title" type='submit' content='Create' style={{width: "100%", background: "rgb(240, 156, 96)"}}/>
         </Form>
      </Segment>
   );
};

export default registerForm;
