import React from 'react';

const loginForm = () => {
   return (
      <div className='showcase'>
         <form id='login-form' class='col-md-2 col-sm-4'>
            <h2 className='text-white text-center'>Welcome to CometChat</h2>
            <div id='form-group'>
               <label for='username' className='text-left'>
                  Username:
               </label>
               <input type='text' className='form-control' />
            </div>
            <div class='form-group'>
               <label for='password' className='text-left'>
                  Password:
               </label>
               <input type='password' className='form-control' />
            </div>
            <div className='form-group'>
               <button
                  id='login-btn'
                  type='button'
                  className='btn form-control'>
                  Login
               </button>
            </div>
         </form>
      </div>
   );
};

export default loginForm;
