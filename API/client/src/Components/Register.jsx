import React from 'react';

const registerForm = () => {
   return (
      <div className='register'>
         <form id='login-form' className='col-md-2 col-sm-4'>
            <h2 className='text-white text-center'>Create your Account</h2>
            <div id='form-group'>
               <label htmlFor='username' className='text-left text-white'>
                  Choose Username:
               </label>
               <input type='text' className='form-control' />
            </div>
            <div id='form-group'>
               <label htmlFor='email' className='text-left text-white'>
                  Enter Email:
               </label>
               <input type='email' className='form-control' />
            </div>
            <div className='form-group'>
               <label htmlFor='password' className='text-left text-white'>
                  Choose Password:
               </label>
               <input type='password' className='form-control' />
               <label htmlFor='password' className='text-left text-white'>
                  Confirm Password:
               </label>
               <input type='password' className='form-control' />
            </div>
            <div className='form-group'>
               <button
                  id='login-btn'
                  type='button'
                  className='btn form-control text-white loginBtn'>
                  Create
               </button>
            </div>
         </form>
      </div>
   );
};

export default registerForm;
