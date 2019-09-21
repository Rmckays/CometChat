import React, { useState, useEffect } from 'react';
import { Menu } from 'semantic-ui-react';
import axios from 'axios';
import {connect} from 'react-redux';

const ChannelWindow = (props) => {
   const [activeChannelStyle, setActiveChannelStyle] = useState('general');

   const createChannels = props.channels.map(channel => {
       return <Menu.Item
            name={channel.name}
            active={activeChannelStyle === `${channel.name}`}
            value={channel.Id}
       />
   });

   useEffect(() => {
    axios.get('/api/channels/')
        .then(response => {
            props.loadChannels(response.data);
        })
        .catch(error => console.log(error))}, []);

   useEffect(() => {
       },
       [props.channels]);

   return (
      <Menu
         pointing
         vertical
         style={{
            background: 'rgba(255,255,255, 0.7)',
            height: '100%',
            borderRadius: '0',
         }}>
         {createChannels}
      </Menu>
   );
};

const mapStateToProps = state => {
    return {
        currentChannelId: state.currentChannelId,
        currentChannelName: state.currentChannelName,
        channels: state.channels
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChannelChange: event => {
            dispatch({type: 'CHANNELCHANGE', val: event.target.value})
        },
        loadChannels: response => {
            console.log(response);
            dispatch({type: 'LOADCHANNELS', val: response})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelWindow);
