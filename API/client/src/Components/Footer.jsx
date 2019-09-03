import React from 'react';

const date = new Date().getFullYear();
const Footer = () => {
   return (
      <div
         id='footer'
         className='d-flex justify-content-center align-items-center footer'>
         <p>Comet Chat App &copy; {date}</p>
      </div>
   );
};

export default Footer;
