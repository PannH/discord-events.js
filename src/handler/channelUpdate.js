module.exports = {
   name: 'channelUpdate',
   call: function(client, oldChannel, newChannel) {

      // Channel Name Update //
      if (oldChannel.name !== newChannel.name)
         client.emit('channelNameUpdate', newChannel, oldChannel.name, newChannel.name);

      // Channel Parent Update //
      if (oldChannel.parentId !== newChannel.parentId)
         client.emit('channelParentUpdate', newChannel, oldChannel.parent, newChannel.parent);

      // Channel Permissions Overwrite Update //
      if (oldChannel.permissionOverwrites !== newChannel.permissionOverwrites)
         client.emit('channelPermissionOverwritesUpdate', newChannel, oldChannel.permissionOverwrites, newChannel.permissionOverwrites);

      // Channel NSFW State Update //
      if ((!oldChannel.nsfw && newChannel.nsfw) || (oldChannel.nsfw && !newChannel.nsfw))
         client.emit('channelNsfwStateUpdate', newChannel, newChannel.nsfw);

      // Channel Rate Limit Update //
      if (oldChannel.rateLimitPerUser !== newChannel.rateLimitPerUser)
         client.emit('channelRateLimitUpdate', newChannel, oldChannel.rateLimitPerUser, newChannel.rateLimitPerUser);

      // Channel Topic Update //
      if (oldChannel.topic !== newChannel.topic)
         client.emit('channelTopicUpdate', newChannel, oldChannel.topic, newChannel.topic);

      // Channel RTC Region Update //
      if (oldChannel.rtcRegion !== newChannel.rtcRegion)
         client.emit('channelRtcRegionUpdate', newChannel, oldChannel.rtcRegion, newChannel.rtcRegion);

      // Channel User Limit Update //
      if (oldChannel.userLimit !== newChannel.userLimit)
         client.emit('channelUserLimitUpdate', newChannel, oldChannel.userLimit, newChannel.userLimit);

      // Channel Bitrate Update //
      if (oldChannel.bitrate !== newChannel.bitrate)
         client.emit('channelBitrateUpdate', newChannel, oldChannel.bitrate, newChannel.bitrate)

   }
};