module.exports = {
   name: 'presenceUpdate',
   call: function(client, oldPresence, newPresence) {

      // Member Status Update //
      if (oldPresence?.status !== newPresence?.status)
         client.emit('guildMemberPresenceStatusUpdate', newPresence.member, oldPresence?.status, newPresence?.status);

      // Member Online //
      if (oldPresence?.status === 'offline' && newPresence?.status !== 'offline')
         client.emit('guildMemberOnline', newPresence.member, oldPresence?.status, newPresence?.status);

      // Member Offline //
      if (oldPresence?.status !== 'offline' && newPresence?.status === 'offline')
         client.emit('guildMemberOffline', newPresence.member, oldPresence?.status, newPresence?.status);

      // Member Activities Update //
      if (oldPresence?.activities !== newPresence?.activities)
         client.emit('guildMemberActivitiesUpdate', newPresence.member, oldPresence?.activities, newPresence?.activities);

   }
};