module.exports = {
   name: 'messageUpdate',
   call: function(client, oldMessage, newMessage) {

      // Message Content Update //
      if (oldMessage.content !== newMessage.content)
         client.emit('messageContentUpdate', newMessage, oldMessage.content, newMessage.content);

      // Message Attachments Update //
      if (oldMessage.attachments.size !== newMessage.attachments.size)
         client.emit('messageAttachmentsUpdate', newMessage, oldMessage.attachments, newMessage.attachments);

   }
};