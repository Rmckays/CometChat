import React from 'react';
import style from './Login.module.css';

const loginForm = () => {
   return (
      <div className={style.showcase}>
         <form id='login-form' className='col-md-2 col-sm-4'>
            <h2 className='text-white text-center'>Welcome to CometChat</h2>
            <div id='form-group'>
               <label htmlFor='username' className='text-left text-white'>
                  Username:
               </label>
               <input type='text' className='form-control' />
            </div>
            <div className='form-group'>
               <label htmlFor='password' className='text-left text-white'>
                  Password:
               </label>
               <input type='password' className='form-control' />
            </div>
            <div className='form-group'>
               <button
                  id='login-btn'
                  type='button'
                  className='btn form-control text-white loginBtn'>
                  Login
               </button>
            </div>
         </form>
      </div>
   );
};

export default loginForm;
