/**
 * 
 * @param {Discord.Client} client 
 * @description Initialize the 'discord-events.js' package.
 */
module.exports.init = client => {

   for (const e of require('./handler/index.js')) {
      
      client.on(e.name, e.call.bind(null, client));

   };

};