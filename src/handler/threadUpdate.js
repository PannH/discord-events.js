module.exports = {
   name: 'threadUpdate',
   call: function(client, oldThread, newThread) {

      // Thread Archived //
      if (!oldThread.archived && newThread.archived)
         client.emit('threadArchived', newThread);

      // Thread Unarchived //
      if (oldThread.archived && !newThread.archived)
         client.emit('threadUnarchived', newThread);

      // Thread Name Update //
      if (oldThread.name !== newThread.name)
         client.emit('threadNameUpdate', newThread, oldThread.name, newThread.name);

      // Thread Rate Limit Update //
      if (oldThread.rateLimitPerUser !== newThread.rateLimitPerUser)
         client.emit('threadRateLimitUpdate', newThread, oldThread.rateLimitPerUser, newThread.rateLimitPerUser);

   }
};