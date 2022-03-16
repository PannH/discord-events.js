module.exports = {
   name: 'stickerUpdate',
   call: function(client, oldSticker, newSticker) {

      // Sticker Name Update //
      if (oldSticker.name !== newSticker.name)
         client.emit('stickerNameUpdate', newSticker, oldSticker.name, newSticker.name);

   }
};