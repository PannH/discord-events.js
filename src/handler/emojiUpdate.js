module.exports = {
   name: 'emojiUpdate',
   call: function(client, oldEmoji, newEmoji) {

      // Emoji Name Update //
      if (oldEmoji.name !== newEmoji.name)
         client.emit('emojiNameUpdate', newEmoji, oldEmoji.name, newEmoji.name);

   }
};