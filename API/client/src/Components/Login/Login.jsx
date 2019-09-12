import React from 'react';
import { NavLink } from 'react-router-dom';
import { Segment, Form, Button } from 'semantic-ui-react';

const loginForm = () => {
   return (
      <Segment style={{margin: "15rem auto", background: "rgba(0,0,0,0)", width: "25%"}}>
         <Form>
            <Form.Input 
               placeholder='Username' 
               name="username" 
               value=""/>
            <Form.Input 
               placeholder='Password' 
               name="password" 
               value="" />
            <Button name="login" type='submit' content='Login' style={{width: "100%", background: "rgb(240, 156, 96)"}}/>
         </Form>
      </Segment>
   );
};

export default loginForm;
