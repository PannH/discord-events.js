module.exports = {
   name: 'guildUpdate',
   call: function(client, oldGuild, newGuild) {

      // Guild Banner Update //
      if (oldGuild.banner !== newGuild.banner)
         client.emit('guildBannerUpdate', newGuild, oldGuild.bannerURL({dynamic: true, format: 'png', size: 4096}), newGuild.bannerURL({dynamic: true, format: 'png', size: 4096}));

      // Guild Description Update //
      if (oldGuild.description !== newGuild.description)
         client.emit('guildDescriptionUpdate', newGuild, oldGuild.description, newGuild.description);

      // Guild Icon Update //
      if (oldGuild.icon !== newGuild.icon)
         client.emit('guildIconUpdate', newGuild, oldGuild.iconURL({dynamic: true, format: 'png', size: 4096}), newGuild.iconURL({dynamic: true, format: 'png', size: 4096}));

      // Guild Name Update //
      if (oldGuild.name !== newGuild.name)
         client.emit('guildNameUpdate', newGuild, oldGuild.name, newGuild.name);

      // Guild MFA Level Update //
      if (oldGuild.mfaLevel !== newGuild.mfaLevel)
         client.emit('guildMfaLevelUpdate', newGuild, oldGuild.mfaLevel, newGuild.mfaLevel);

      // Guild NSFW Level Update //
      if (oldGuild.nsfwLevel !== newGuild.nsfwLevel)
         client.emit('guildNsfwLevelUpdate', newGuild, oldGuild.nsfwLevel, newGuild.nsfwLevel);

      // Guild AFK Channel Update //
      if (oldGuild.afkChannelId !== newGuild.afkChannelId)
         client.emit('guildAfkChannelUpdate', newGuild, oldGuild.afkChannel, newGuild.afkChannel);

      // Guild AFK Timeout Update //
      if (oldGuild.afkTimeout !== newGuild.afkTimeout)
         client.emit('guildAfkTimeoutUpdate', newGuild, oldGuild.afkTimeout, newGuild.afkTimeout);
      
      // Guild Owner Update //
      if (oldGuild.ownerId !== newGuild.ownerId)
         client.emit('guildOwnerUpdate', newGuild, client.users.cache.get(oldGuild.ownerId), client.users.cache.get(newGuild.ownerId));

      // Guild Rules Channel Update //
      if (oldGuild.rulesChannelId !== newGuild.rulesChannelId)
         client.emit('guildRulesChannelUpdate', newGuild, oldGuild.rulesChannel, newGuild.rulesChannel);

      // Guild System Channel Update //
      if (oldGuild.systemChannelId !== newGuild.systemChannelId)
         client.emit('guildSystemChannelUpdate', newGuild, oldGuild.systemChannel, newGuild.systemChannel);

      // Guild Verified //
      if (!oldGuild.verified && newGuild.verified)
         client.emit('guildVerified', newGuild);

      // Guild Partnered //
      if (!oldGuild.partnered && newGuild.partnered)
         client.emit('guildPartnered', newGuild);
   
   }
};