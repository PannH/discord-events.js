module.exports = {
   name: 'voiceStateUpdate',
   call: function(client, oldState, newState) {

      // Voice Channel Join //
      if (!oldState.channelId && newState.channelId)
         client.emit('voiceChannelJoin', newState.member, newState.channel);

      // Voice Channel Leave //
      if (oldState.channelId && !newState.channelId)
         client.emit('voiceChannelLeave', newState.member, oldState.channel);

      // Voice Channel Switch //
      if ((oldState.channelId && newState.channelId) && (oldState.channelId !== newState.channelId))
         client.emit('voiceChannelSwitch', newState.member, oldState.channel, newState.channel);

      // Voice Channel Self Deaf //
      if (!oldState.selfDeaf && newState.selfDeaf)
         client.emit('voiceChannelSelfDeaf', newState.member);

      // Voice Channel Self Mute //
      if (!oldState.selfMute && newState.selfMute)
         client.emit('voiceChannelSelfMute', newState.member);

      // Voice Channel Server Deaf //
      if (!oldState.serverDeaf && newState.serverDeaf)
         client.emit('voiceChannelServerDeaf', newState.member);

      // Voice Channel Server Mute //
      if (!oldState.serverMute && newState.serverMute)
         client.emit('voiceChannelServerMute', newState.member);

      // Voice Channel Self Undeaf //
      if (oldState.selfDeaf && !newState.selfDeaf)
         client.emit('voiceChannelSelfUndeaf', newState.member);

      // Voice Channel Self Unmute //
      if (oldState.selfMute && !newState.selfMute)
         client.emit('voiceChannelSelfUnmute', newState.member);

      // Voice Channel Server Undeaf //
      if (oldState.serverDeaf && !newState.serverDeaf)
         client.emit('voiceChannelServerUndeaf', newState.member);

      // Voice Channel Server Unmute //
      if (oldState.serverMute && !newState.serverMute)
         client.emit('voiceChannelServerUnmute', newState.member);

      // Voice Channel Stream Start //
      if (!oldState.streaming && newState.streaming)
         client.emit('voiceChannelStreamStart', newState.member);

      // Voice Channel Stream Stop //
      if (oldState.streaming && !newState.streaming)
         client.emit('voiceChannelStreamStop', newState.member);

      // Voice Channel Video Start //
      if (!oldState.selfVideo && newState.selfVideo)
         client.emit('voiceChannelVideoStart', newState.member);

      // Voice Channel Video Stop //
      if (oldState.selfVideo && !newState.selfVideo)
         client.emit('voiceChannelVideoStop');

   }
};