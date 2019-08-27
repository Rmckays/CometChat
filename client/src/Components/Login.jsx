import React from 'react';

const loginForm = () => {
   return(
      <div class="showcase">
         <form id="login-form" class="col-md-2 col-sm-4">
            <h2 class="text-white text-center">Welcome to CometChat</h2>
            <div id="form-group">
               <label for="username" class="text-white">Username:</label>
               <input type="text" class="form-control" />
            </div>
            <div class="form-group">
               <label for="password" class="text-white">Password:</label>
               <input type="password" class="form-control" />
            </div>
            <div class="form-group">
               <button id="login-btn" type="button" class="btn form-control">
               Login
               </button>
            </div>
         </form>
      </div>
   )
}