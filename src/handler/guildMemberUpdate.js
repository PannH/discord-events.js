module.exports = {
   name: 'guildMemberUpdate',
   call: function(client, oldMember, newMember) {

      // Member Nickname Update //
      if (oldMember.nickname !== newMember.nickname)
         client.emit('guildMemberNicknameUpdate', newMember, oldMember.nickname, newMember.nickname);

      // Member Boost Start //
      if (!oldMember.premiumSince && newMember.premiumSince)
         client.emit('guildMemberBoostStart', newMember);

      // Member Boost Stop //
      if (oldMember.premiumSince && !newMember.premiumSince)
         client.emit('guildMemberBoostStop', newMember);

      // Member Timeout //
      if (!oldMember.isCommunicationDisabled() && newMember.isCommunicationDisabled())
         client.emit('guildMemberTimeout', newMember);

      // Member Timeout Remove //
      if (oldMember.isCommunicationDisabled() && !newMember.isCommunicationDisabled())
         client.emit('guildMemberTimeoutRemove', newMember);


      // Member Roles Update //
      const addedRoles   = [];
      const removedRoles = [];

      newMember.roles.cache.forEach(role => {

         if (!oldMember.roles.cache.has(role.id))
            addedRoles.push(role);

      });

      oldMember.roles.cache.forEach(role => {

         if (!newMember.roles.cache.has(role.id))
            removedRoles.push(role);

      });

      for (const role of addedRoles) {

         client.emit('guildMemberRoleAdd', newMember, role);

      };

      for (const role of removedRoles) {

         client.emit('guildMemberRoleRemove', newMember, role);

      };

   }
};