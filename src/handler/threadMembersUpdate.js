module.exports = {
   name: 'threadMembersUpdate',
   call: function(client, oldMembers, newMembers) {

      const addedMembers   = [];
      const removedMembers = [];

      newMembers.forEach(member => {

         if (!oldMembers.get(member.id))
            addedMembers.push(member);

      });

      oldMembers.forEach(member => {

         if (!newMembers.get(member.id))
            removedMembers.push(member);

      });

      for (const member of addedMembers) {

         client.emit('threadMemberAdd', member.thread, member);

      };

      for (const member of removedMembers) {

         client.emit('threadMemberRemove', member.thread, member);

      };

   }
};