import React, { useState } from 'react';
import { Grid, Container, Menu } from 'semantic-ui-react';

const ChannelWindow = () => {
   const [activeChannelStyle, setActiveChannelStyle] = useState('general');

   return (
      <Menu
         pointing
         vertical
         style={{
            background: 'rgba(255,255,255, 0.7)',
            height: '100%',
            borderRadius: '0',
         }}>
         <Menu.Item active={activeChannelStyle === 'general'} name='general' />
         <Menu.Item
            active={activeChannelStyle === 'javascript'}
            name='javascript'
         />
         <Menu.Item active={activeChannelStyle === 'react'} name='react' />
         <Menu.Item active={activeChannelStyle === 'asp.net'} name='asp.net' />
      </Menu>
   );
};

export default ChannelWindow;
