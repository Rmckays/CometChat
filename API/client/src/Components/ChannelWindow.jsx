import React from 'react';
import { Grid, Container, Menu } from 'semantic-ui-react';

const ChannelWindow = () => {
   return (
      // <Menu vertical style={{ background: 'rgba(255,255,255, 0.7)' }}>
      //    <Menu.Item href='//google.com' target='_blank'>
      //       Visit Google
      //    </Menu.Item>
      //    <Menu.Item link>Link via prop</Menu.Item>
      //    <Menu.Item>Javascript Link</Menu.Item>
      // </Menu>
      <Menu
         fluid
         vertical
         tabular
         style={{ background: 'rgba(255,255,255, 0.7)', height: '100%' }}>
         <Menu.Item name='#General' />
         <Menu.Item name='#Javascript' />
         <Menu.Item name='#React' />
         <Menu.Item name='#ASP.NET' />
      </Menu>
   );
};

export default ChannelWindow;
