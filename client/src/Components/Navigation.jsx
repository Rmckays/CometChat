import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
   return (
      <div className='m-1 p-1'>
         <nav className='d-flex text-white justify-content-between align-content-center m-1 p-1'>
            <div className='p-1 m-1 brand'>CometChat</div>
            <div className='m-1 p-1'>
               <ul className='d-flex nav-list py-1 mx-2'>
                  <li className='px-3'>
                     <NavLink className='text-white' to='/'>
                        Home
                     </NavLink>
                  </li>
                  <li className='px-3'>
                     <NavLink className='text-white' to='/about'>
                        About
                     </NavLink>
                  </li>
                  <li className='px-3'>
                     <NavLink className='text-white' to='/register'>
                        Register
                     </NavLink>
                  </li>
               </ul>
            </div>
         </nav>
      </div>
   );
};

export default Navigation;
