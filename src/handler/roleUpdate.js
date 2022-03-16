module.exports = {
   name: 'roleUpdate',
   call: function(client, oldRole, newRole) {

      // Role Color Update //
      if (oldRole.color !== newRole.color)
         client.emit('roleColorUpdate', newRole, oldRole.hexColor, newRole.hexColor);

      // Role Hoist Update //
      if (oldRole.hoist !== newRole.hoist)
         client.emit('roleHoistUpdate', newRole, newRole.hoist);

      // Role Mentionable Update //
      if (oldRole.mentionable !== newRole.mentionable)
         client.emit('roleMentionableUpdate', newRole, newRole.mentionable);

      // Role Icon Update //
      if (oldRole.icon !== newRole.icon)
         client.emit('roleIconUpdate', newRole, oldRole.iconURL({dynamic: true, format: 'png', size: 4096}), newRole.iconURL({dynamic: true, format: 'png', size: 4096}));

      // Role Permissions Update //
      if (oldRole.permissions !== newRole.permissions)
         client.emit('rolePermissionsUpdate', newRole, oldRole.permissions, newRole.permissions);
         
   }
};