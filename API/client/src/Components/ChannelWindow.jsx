import React, { useState, useEffect } from 'react';
import { Menu } from 'semantic-ui-react';
import {connect} from 'react-redux';

const ChannelWindow = () => {
   const [activeChannelStyle, setActiveChannelStyle] = useState('general');

   // useEffect();

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

const mapStateToProps = state => {
    return {
        currentChannelId: state.currentChannelId,
        currentChannelName: state.currentChannelName
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChannelChange: event => {
            dispatch({type: 'CHANNELCHANGE', val: event.target.value})
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelWindow);
