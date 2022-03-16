module.exports = {
   name: 'userUpdate',
   call: function(client, oldUser, newUser) {

      const guilds = client.guilds.cache.filter(g => g.members.cache.get(newUser.id));

      guilds.forEach(guild => {

         // User Avatar Update //
         if (oldUser.avatar !== newUser.avatar)
            client.emit('userAvatarUpdate', guild, newUser, oldUser.displayAvatarURL({dynamic: true, format: 'png', size: 4096}), newUser.displayAvatarURL({dynamic: true, format: 'png', size: 4096}));

         // User Banner Update //
         if (oldUser.banner !== newUser.banner)
            client.emit('userBannerUpdate', guild, newUser, oldUser.bannerURL({dynamic: true, format: 'png', size: 4096}), newUser.bannerURL({dynamic: true, format: 'png', size: 4096}));

         // User Discriminator Update //
         if (oldUser.discriminator !== newUser.discriminator)
            client.emit('userDiscriminatorUpdate', guild, newUser, oldUser.discriminator, newUser.discriminator);

         // User Username Update //
         if (oldUser.username !== newUser.username)
            client.emit('userUsernameUpdate', guild, newUser, oldUser.username, newUser.username);

      });

   }
};