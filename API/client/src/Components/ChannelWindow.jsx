import React from 'react';
import { Grid, Container, Menu } from 'semantic-ui-react';

const ChannelWindow = () => {
   return (
      <Menu vertical style={{ background: 'rgba(255,255,255, 0.7)' }}>
         <Menu.Item href='//google.com' target='_blank'>
            Visit Google
         </Menu.Item>
         <Menu.Item link>Link via prop</Menu.Item>
         <Menu.Item>Javascript Link</Menu.Item>
      </Menu>
   );
};

export default ChannelWindow;
