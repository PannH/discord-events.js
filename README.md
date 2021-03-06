![Discord Events](https://i.imgur.com/sKJRQXq.png)

## 📖 About
**discord-events.js** is a module that gives to your Discord client many events that are much more precise.
It is useful for a **logs system** for example.

## 💻 Installation
```
npm install discord-events.js
```

## ❔ Help
- For the usage, you can read the **Documentation** below.
-  For more precise help, you can join this server: [Click to join](https://discord.gg/4b3X43JDQs), and contact the Developer  (me).

## 📚 Documentation
> You can find below the list of all the events that **discord-events.js** gives to your client and how to use them.
> *Click on the name to expand the events.*

### Usage Example
```js
const { Client } = require('discord.js');
const events     = require('discord-events.js');

const client = new Client({intents: 32767}); // 32767 => ALL intents

// Init the package, otherwise the events will not be emitted.
events.init(client);

client.on('ready', () => {
   console.log(`Logged in as ${client.user.username}`);
});

client.on('channelNameUpdate', (channel, oldName, newName) => {
	console.log(`A channel's name has been updated: "${oldName}" => "${newName}"`);
});

// Check the other events below.
```

<details><summary><strong>Channel Updates <i>(extends channelUpdate)</i></strong></summary><br/>
<h3><strong>channelNameUpdate</strong></h3><br/>
<h4>📡 Emitted when a channel's name is updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| channel | [GuildChannel](https://discord.js.org/#/docs/discord.js/stable/class/GuildChannel) | The channel whose name has been updated. |
| oldName | [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String) | The old channel's name. |
| newName | [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String) | The new channel's name |

**Exemple :**
```js
client.on('channelNameUpdate', (channel, oldName, newName) => {
	console.log(`A channel's name has been updated: "${oldName}" => "${newName}"`);
});
```
---

<h3><strong>channelParentUpdate</strong></h3><br/>
<h4>📡 Emitted when a channel's parent is updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| channel | [GuildChannel](https://discord.js.org/#/docs/discord.js/stable/class/GuildChannel) | The channel whose parent has been updated. |
| oldParent | [CategoryChannel](https://discord.js.org/#/docs/discord.js/stable/class/CategoryChannel) | The old channel's parent. |
| newParent | [CategoryChannel](https://discord.js.org/#/docs/discord.js/stable/class/CategoryChannel) | The new channel's parent. |

**Example :**
```js
client.on('channelParentUpdate', (channel, oldParent, newParent) => {
	console.log(`A channel's parent has been updated: ${oldParent.id} => ${newParent.id}`);
});
```

---

<h3><strong>channelPermissionOverwritesUpdate</strong></h3><br/>
<h4>📡 Emitted when the permissions of a channel are updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| channel | [GuildChannel](https://discord.js.org/#/docs/discord.js/stable/class/GuildChannel) | The channel whose permissions have been updated. |
| oldPermissions | [PermissionOverwrites](https://discord.js.org/#/docs/discord.js/stable/class/PermissionOverwrites) | The old channel's permissions. |
| newPermissions | [PermissionOverwrites](https://discord.js.org/#/docs/discord.js/stable/class/PermissionOverwrites) | The new channel's permissions. |

**Example :**
```js
client.on('channelPermissionOverwritesUpdate', (channel, oldPermissions, newPermissions) => {
	console.log('The permissions of a channel have been updated :');
	console.log(oldPermissions, newPermissions);
});
```

---

<h3><strong>channelNsfwStateUpdate</strong></h3><br/>
<h4>📡 Emitted when someone enable/disable the "Age-Restricted Channel" option for a channel.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| channel | [BaseGuildTextChannel](https://discord.js.org/#/docs/discord.js/stable/class/BaseGuildTextChannel) | The channel whose NSFW state has been updated. |
| nsfw | [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Wether the channel is NSFW or not. |

**Example :**
```js
client.on('channelNsfwStateUpdate', (channel, nsfw) => {
	console.log(`NSFW state has been ${nsfw ? 'enabled' : 'disabled'} in a channel.`);
});
```

---

<h3><strong>channelRateLimitUpdate</strong></h3><br/>
<h4>📡Emitted when a channel's slowmode is updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| channel | [BaseGuildTextChannel](https://discord.js.org/#/docs/discord.js/stable/class/BaseGuildTextChannel) | The channel whose slowmode has been updated. |
| oldRateLimit | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The old channel's slowmode (in seconds). |
| newRateLimit | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The new channel's slowmode (in seconds). |

**Example :**
```js
client.on('channelRateLimitUpdate', (channel, oldRateLimit, newRateLimit) => {
	console.log(`A channel's slowmode has been updated: ${oldRateLimit} => ${newRateLimit}`);
});
```

---

<h3><strong>channelTopicUpdate</strong></h3><br/>
<h4>📡 Emitted when a channel's topic is updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| channel | [BaseGuildTextChannel](https://discord.js.org/#/docs/discord.js/stable/class/BaseGuildTextChannel) | The channel whose topic has been updated. |
| oldTopic | [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String) | The old channel's topic. |
| newTopic | [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String) | The new channel's topic. |

**Example :**
```js
client.on('channelTopicUpdate', (channel, oldTopic, newTopic) => {
	console.log(`A channel's topic has been updated: "${oldTopic}" => "${newTopic}"`);
});
```

---

<h3><strong>channelRtcRegionUpdate</strong></h3><br/>
<h4>📡 Emitted when a voice channel's RTC region is updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| channel | [BaseGuildVoiceChannel](https://discord.js.org/#/docs/discord.js/stable/class/BaseGuildVoiceChannel) | The voice channel whose RTC region has been updated. |
| oldRtcRegion | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The old channel's RTC region. |
| newRtcRegion | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The new channel's RTC region |

**Example :**
```js
client.on('channelRtcRegionUpdate', (channel, oldRtcRegion, newRtcRegion) => {
	console.log(`A voice channel's RTC region has been updated: "${oldRtcRegion}" => "${newRtcRegion}"`);
});
```

---

<h3><strong>channelUserLimitUpdate</strong></h3><br/>
<h4>📡 Emitted when a voice channel's user limit is updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| channel | [BaseGuildVoiceChannel](https://discord.js.org/#/docs/discord.js/stable/class/BaseGuildVoiceChannel) | The voice channel whose user limit has been updated. |
| oldUserLimit | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The old channel's user limit. |
| newUserLimit | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The new channel's user limit. |

**Example :**
```js
client.on('channelUserLimitUpdate', (channel, oldUserLimit, newUserLimit) => {
	console.log(`A voice channel's user limit has been updated: ${oldUserLimit} => ${newUserLimit}`);
});
```

---

<h3><strong>channelBitrateUpdate</strong></h3><br/>
<h4>📡 Emitted when a voice channel's bitrate is updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| channel | [BaseGuildVoiceChannel](https://discord.js.org/#/docs/discord.js/stable/class/BaseGuildVoiceChannel) | The voice channel whose bitrate has been updated. |
| oldBitrate | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The old channel's bitrate. |
| newBitrate | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The new channel's bitrate. |

**Example :**
```js
client.on('channelBitrateUpdate', (channel, oldBitrate, newBitrate) => {
	console.log(`A voice channel's bitrate has been updated: ${oldBitrate} => ${newBitrate}`);
});
```
</details>

<details><summary><strong>Emoji Updates <i>(extends emojiUpdate)</i></strong></summary><br/>
<h3><strong>emojiNameUpdate</strong></h3><br/>
<h4>📡 Emitted when an emoji's name is updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| emoji | [BaseGuildEmoji](https://discord.js.org/#/docs/discord.js/stable/class/BaseGuildEmoji) | The emoji whose name has been updated. |
| oldName | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The old emoji's name. |
| newName | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The new emoji's name. |

**Example :**
```js
client.on('emojiNameUpdate', (emoji, oldName, newName) => {
	console.log(`An emoji's name has been updated: "${oldName}" => "${newName}"`);
});
```
</details>

<details><summary><strong>Guild Member Updates <i>(extends guildMemberUpdate)</i></strong></summary><br/>
<h3><strong>guildMemberNicknameUpdate</strong></h3><br/>
<h4>📡 Emitted when a guild member's nickname is updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| member | [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember) | The guild member whose nickname has been updated. |
| oldNickname | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [undefined](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) | The old guild member's nickname. |
| newNickname | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [undefined](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) | The new guild member's nickname. |

**Example :**
```js
client.on('guildMemberNicknameUpdate', (member, oldNickname, newNickname) => {
	console.log(`A guild member's nickname has been updated: "${oldNickname}" => "${newNickname}"`);
});
```

---

<h3><strong>guildMemberBoostStart</strong></h3><br/>
<h4>📡 Emitted when a guild member start boosting the server.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| member | [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember) | The guild member who started boosting. |

**Example :**
```js
client.on('guildMemberBoostStart', (member) => {
	console.log(`A guild member started boosting the server "${member.guild.name}"`);
});
```

---

<h3><strong>guildMemberBoostStart</strong></h3><br/>
<h4>📡 Emitted when a guild member stop boosting the server.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| member | [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember) | The guild member who stopped boosting. |

**Example :**
```js
client.on('guildMemberBoostStop', (member) => {
	console.log(`A guild member stopped boosting the server "${member.guild.name}"`);
});
```

---

<h3><strong>guildMemberTimeout</strong></h3><br/>
<h4>📡 Emitted when a guild member get timed out.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| member | [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember) | The guild member who has been timed out. |

**Example :**
```js
client.on('guildMemberTimeout', (member) => {
	console.log(`${member.user.tag} has been timed out.`);
});
```

---

<h3><strong>guildMemberTimeoutRemove</strong></h3><br/>
<h4>📡 Emitted when a guild member's timeout is removed.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| member | [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember) | The guild member whose timeout has been removed. |

**Example :**
```js
client.on('guildMemberTimeoutRemove', (member) => {
	console.log(`${member.user.tag} timeout has been removed.`);
});
```

---

<h3><strong>guildMemberRoleAdd</strong></h3><br/>
<h4>📡 Emitted when a role is added to a guild member.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| member | [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember) | The guild member who reveived the role. |
| role | [Role](https://discord.js.org/#/docs/discord.js/stable/class/Role) | The role that has been added to the guild member. |

**Example :**
```js
client.on('guildMemberRoleAdd', (member, role) => {
	console.log(`The "${role.name}" has been added to ${member.user.tag}.`);
});
```

---

<h3><strong>guildMemberRoleRemove</strong></h3><br/>
<h4>📡 Emitted when a role is added to a guild member.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| member | [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember) | The guild member who lost the role. |
| role | [Role](https://discord.js.org/#/docs/discord.js/stable/class/Role) | The role that has been removed from the guild member. |

**Example :**
```js
client.on('guildMemberRoleRemove', (member, role) => {
	console.log(`The "${role.name}" has been removed from ${member.user.tag}.`);
});
```
</details>

<details><summary><strong>Guild Updates <i>(extends guildUpdate)</i></strong></summary><br/>
<h3><strong>guildBannerUpdate</strong></h3><br/>
<h4>📡 Emitted when a guild's banned is updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| guild | [BaseGuild](https://discord.js.org/#/docs/discord.js/stable/class/BaseGuild) | The guild whose banner has been updated. |
| oldBannerURL | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [undefined](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) | The old guild's banner URL. |
| newBannerURL | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [undefined](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) | The new guild's banner URL. |

**Example :**
```js
client.on('guildBannerUpdate', (guild, oldBannerURL, newBannerURL) => {
	console.log(`A guild's banner has been updated: ${oldBannerURL} => ${newBannerURL}`);
});
```

---

<h3><strong>guildDescriptionUpdate</strong></h3><br/>
<h4>📡 Emitted when a guild's description is updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| guild | [BaseGuild](https://discord.js.org/#/docs/discord.js/stable/class/BaseGuild) | The guild whose description has been uptated. |
| oldDescription | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [undefined](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) | The old guild's description. |
| newDescription | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [undefined](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) | The new guild's description. |

**Example :**
```js
client.on('guildDescriptionUpdate', (guild, oldDescription, newDescription) => {
	console.log(`A guild's description has been updated: "${oldDescription}" => "${newDescription}"`);
});
```

---

<h3><strong>guildIconUpdate</strong></h3><br/>
<h4>📡 Emitted when a guild's icon is updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| guild | [BaseGuild](https://discord.js.org/#/docs/discord.js/stable/class/BaseGuild) | The guild whose icon has been updated. |
| oldIconURL | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [undefined](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) | The old guild's icon URL. |
| newIconURL | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [undefined](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) | The new guild's icon URL. |

**Example :**
```js
client.on('guildIconUpdate', (guild, oldIconURL, newIconURL) => {*
	console.log(`A guild's icon has been updated: ${oldIconURL} => ${newIconURL}`);
});
```

---

<h3><strong>guildNameUpdate</strong></h3><br/>
<h4>📡 Emitted when a guild's name is updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| guild | [BaseGuild](https://discord.js.org/#/docs/discord.js/stable/class/BaseGuild) | The guild whose name has been updated. |
| oldName | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The old guild's name. |
| newName | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The new guild's name. |

**Example :**
```js
client.on('guildNameUpdate', (guild, oldName, newName) => {
	console.log(`A guild's name has been updated: "${oldName}" => "${newName"`);
});
```

--- 

<h3><strong>guildMfaLevelUpdate</strong></h3><br/>
<h4>📡 Emitted when a guild's MFA level is updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| guild | [BaseGuild](https://discord.js.org/#/docs/discord.js/stable/class/BaseGuild) | The guild whose MFA level has been updated. |
| oldMfaLevel | [MFALevel](https://discord.js.org/#/docs/discord.js/stable/typedef/MFALevel) | The old guild's MFA level. |
| newMfaLevel | [MFALevel](https://discord.js.org/#/docs/discord.js/stable/typedef/MFALevel) | The new guild's MFA level. |

**Example :**
```js
client.on('guildMfaLevelUpdate', (guild, oldMfaLevel, newMfaLevel) => {
	console.log(`A guild's MFA level has been updated: "${oldMfaLevel}" => "${newMfaLevel}"`);
});
```

---

<h3><strong>guildNsfwLevelUpdate</strong></h3><br/>
<h4>📡 Emitted when a guild's NSFW level is updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| guild | [BaseGuild](https://discord.js.org/#/docs/discord.js/stable/class/BaseGuild) | The guild whose NSFW level has been updated. |
| oldNsfwLevel | [NSFWLevel](https://discord.js.org/#/docs/discord.js/stable/typedef/NSFWLevel) | The old guild's NSFW level. |
| newNsfwLevel | [NSFWLevel](https://discord.js.org/#/docs/discord.js/stable/typedef/NSFWLevel) | The new guild's NSFW level. |

**Example :**
```js
client.on('guildNsfwLevelUpdate', (guild, oldNsfwLevel, newNsfwLevel) => {
	console.log(`A guild's NSFW level has been updated: "${oldNsfwLevel}" => "${newNsfwLevel}"`);
});
```

---

<h3><strong>guildAfkChannelUpdate</strong></h3><br/>
<h4>📡 Emitted when a guild's AFK channel is updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| guild | [BaseGuild](https://discord.js.org/#/docs/discord.js/stable/class/BaseGuild) | The guild whose AFK channel has been updated. |
| oldAfkChannel | [VoiceChannel](https://discord.js.org/#/docs/discord.js/stable/class/VoiceChannel) \| [undefined](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) | The old guild's AFK channel. |
| newAfkChannel | [VoiceChannel](https://discord.js.org/#/docs/discord.js/stable/class/VoiceChannel) \| [undefined](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) | The new guild's AFK channel. |

**Example :**
```js
client.on('guildAfkChannelUpdate', (guild, oldAfkChannel, newAfkChannel) => {
   console.log(`A guild's AFK channel has been updated: ${oldAfkChannel?.name} => ${newAfkChannel?.name}`);
});
```

---

<h3><strong>guildOwnerUpdate</strong></h3><br/>
<h4>📡 Emitted when a guild's owner transfers the ownership.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| guild | [BaseGuild](https://discord.js.org/#/docs/discord.js/stable/class/BaseGuild) | The guild whose owner has been updated. |
| oldOwner | [User](https://discord.js.org/#/docs/discord.js/stable/class/User) | The old guild's owner. |
| newOwner | [User](https://discord.js.org/#/docs/discord.js/stable/class/User) | The new guild's owner. |

**Example :**
```js
client.on('guildOwnerUpdate', (guild, oldOwner, newOwner) => {
   console.log(`A guild's ownership has been transfered: ${oldOwner.tag} => ${newOwner.tag}`);
});
```

---

<h3><strong>guildRulesChannelUpdate</strong></h3><br/>
<h4>📡 Emitted when a guild's rules channel is updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| guild | [BaseGuild](https://discord.js.org/#/docs/discord.js/stable/class/BaseGuild) | The guild whose owner has been updated. |
| oldRulesChannel  | [TextChannel](https://discord.js.org/#/docs/discord.js/stable/class/TextChannel) \| [undefined](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) | The old guild's rules channel. |
| newRulesChannel | [TextChannel](https://discord.js.org/#/docs/discord.js/stable/class/TextChannel) \| [undefined](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) | The new guild's rules channel. |

**Example :**
```js
client.on('guildRulesChannelUpdate', (guild, oldRulesChannel, newRulesChannel) => {
   console.log(`A guild's rules channel has been updated: ${oldRulesChannel?.name} => ${newRulesChannel?.name}`);
});
```
---

<h3><strong>guildSystemChannelUpdate</strong></h3><br/>
<h4>📡 Emitted when a guild's system channel is updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| guild | [BaseGuild](https://discord.js.org/#/docs/discord.js/stable/class/BaseGuild) | The guild whose system channel has been updated. |
| oldSystemChannel | [TextChannel](https://discord.js.org/#/docs/discord.js/stable/class/TextChannel) \| [undefined](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) | The old guild' system channel. |
| newSystemChannel | [TextChannel](https://discord.js.org/#/docs/discord.js/stable/class/TextChannel) \| [undefined](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) | The new guild' system channel. |

**Example :**
```js
client.on('guildSystemChannelUpdate', (guild, oldSystemChannel, newSystemChannel) => {
   console.log(`A guild' system channel has been updated: ${oldSystemChannel?.name} => ${newSystemChannel?.name}`);
});
```

---

<h3><strong>guildVerified</strong></h3><br/>
<h4>📡 Emitted when a guild gets verified.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| guild | [BaseGuild](https://discord.js.org/#/docs/discord.js/stable/class/BaseGuild) | The guild that has been verified. |

**Example :**
```js
client.on('guildVerified', (guild) => {
   console.log(`The guild "${guild.name}" has been verified.`);
});
```

---

<h3><strong>guildPartnered</strong></h3><br/>
<h4>📡 Emitted when a guild gets verified.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| guild | [BaseGuild](https://discord.js.org/#/docs/discord.js/stable/class/BaseGuild) | The guild that has been verified. |

**Example :**
```js
client.on('guildPartnered', (guild) => {
   console.log(`The guild "${guild.name}" has been partnered.`);
});
```
</details>


<details><summary><strong>Message Updates <i>(extends messageUpdate)</i></strong></summary><br/>
<h3><strong>messageContentUpdate</strong></h3><br/>
<h4>📡 Emitted when a message's content is updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| message | [Message](https://discord.js.org/#/docs/discord.js/stable/class/Message) | The message that has been edited. |
| oldContent | [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String) \| [undefined](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) | The old message's content. |
| newContent | [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String) \| [undefined](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) | The new message's content. |

**Example :**
```js
client.on('messageContentUpdate', (message, oldContent, newContent) => {
   console.log(`A message has been edited in #${message.channel.name} channel: "${oldContent}" => "${newContent}"`);
});
```

---

<h3><strong>messageAttachmentsUpdate</strong></h3><br/>
<h4>📡 Emitted when the attachments of a message are updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| message | [Message](https://discord.js.org/#/docs/discord.js/stable/class/Message) | The message that has been edited. |
| oldAttachments | [Collection](https://discord.js.org/#/docs/collection/main/class/Collection)<[Snowflake](https://discord.js.org/#/docs/discord.js/stable/typedef/Snowflake), [MessageAttachment](https://discord.js.org/#/docs/discord.js/stable/class/MessageAttachment)> \| [undefined](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) | The old attachments of the message. |
| newAttachments | [Collection](https://discord.js.org/#/docs/collection/main/class/Collection)<[Snowflake](https://discord.js.org/#/docs/discord.js/stable/typedef/Snowflake), [MessageAttachment](https://discord.js.org/#/docs/discord.js/stable/class/MessageAttachment)> \| [undefined](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) | The new attachments of the message. |

**Example :**
```js
client.on('messageAttachmentsUpdate', (message, oldAttachments, newAttachments) => {
   console.log(`The attachments of a message have been updated :`);
   console.log(oldAttachments, newAttachments);
});
```
</details>

<details><summary><strong>Presence Updates <i>(extends presenceUpdate)</i></strong></summary><br/>
<h3><strong>guildMemberPresenceStatusUpdate</strong></h3><br/>
<h4>📡 Emitted when a guild member's status is updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| member | [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember) | The guild member whose status has been updated. |
| oldStatus | [PresenceStatus](https://discord.js.org/#/docs/discord.js/stable/typedef/PresenceStatus) | The old guild member's status. |
| newStatus | [PresenceStatus](https://discord.js.org/#/docs/discord.js/stable/typedef/PresenceStatus) | The new guild member's status. |

**Example :**
```js
client.on('guildMemberPresenceStatusUpdate', (member, oldStatus, newStatus) => {
   console.log(`A guild member's status has been updated: ${oldStatus} => ${newStatus}`);
});
```

---

<h3><strong>guildMemberOnline</strong></h3><br/>
<h4>📡 Emitted when a guild member goes online ('online', 'idle', 'dnd').</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| member | [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember) | The guild member who is now online. |
| oldStatus | [PresenceStatus](https://discord.js.org/#/docs/discord.js/stable/typedef/PresenceStatus) | The old guild member's status. |
| newStatus | [PresenceStatus](https://discord.js.org/#/docs/discord.js/stable/typedef/PresenceStatus) | The new guild member's status. |

**Example :**
```js
client.on('guildMemberOnline', (member, oldStatus, newStatus) => {
   console.log(`A guild member is now online (${newStatus})`);
});
```

---

<h3><strong>guildMemberOffline</strong></h3><br/>
<h4>📡 Emitted when a guild member goes offline.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| member | [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember) | The guild member who is now offline. |
| oldStatus | [PresenceStatus](https://discord.js.org/#/docs/discord.js/stable/typedef/PresenceStatus) | The old guild member's status. |
| newStatus | [PresenceStatus](https://discord.js.org/#/docs/discord.js/stable/typedef/PresenceStatus) | The new guild member's status. |

**Example :**
```js
client.on('guildMemberOnline', (member, oldStatus, newStatus) => {
   console.log(`A guild member is now offline.`);
});
```

---

<h3><strong>guildMemberActivitiesUpdate</strong></h3><br/>
<h4>📡 Emitted when the activites of a guild member are updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| member | [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember) | The guild member whose activites have been updated. |
| oldActivites | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[Activity](https://discord.js.org/#/docs/discord.js/stable/class/Activity)> | The old guild member's activites. |
| newActivites | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[Activity](https://discord.js.org/#/docs/discord.js/stable/class/Activity)> | The new guild member's activities. |

**Example :**
```js
client.on('guildMemberActivitiesUpdate', (member, oldActivites, newActivites) => {
   console.log(`The activites of a guild member have been updated :`);
   console.log(oldActivites, newActivites);
});
```
</details>

<details><summary><strong>Role Updates <i>(extends roleUpdate)</i></strong></summary><br/>
<h3><strong>roleColorUpdate</strong></h3><br/>
<h4>📡 Emitted when a role's color is updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| role | [Role](https://discord.js.org/#/docs/discord.js/stable/class/Role) | The role whose color has been updated. |
| oldHexColor | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The old role's hex color. |
| newHexColor | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The new role's hex color. |

**Example :**
```js
client.on('roleColorUpdate', (role, oldHexColor, newHexColor) => {
   console.log(`A role's color has been updated: ${oldHexColor} => ${newHexColor}`);
});
```

---

<h3><strong>roleHoistUpdate</strong></h3><br/>
<h4>📡 Emitted when a role "hoist" option is enabled/disabled.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| role | [Role](https://discord.js.org/#/docs/discord.js/stable/class/Role) | The role whose "hoist" option has been enabled/disabled. |
| hoist | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Wether the role is hoisted or not. |

**Example :**
```js
client.on('roleHoistUpdate', (role, hoist) => {
   console.log(`A role hoist has been ${hoist ? 'enabled' : 'disabled'}.`);
});
```

---

<h3><strong>roleMentionableUpdate</strong></h3><br/>
<h4>📡 Emitted when a role "mentionable" option is enabled/disabled.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| role | [Role](https://discord.js.org/#/docs/discord.js/stable/class/Role) | The role whose "mentionable" option has been enabled/disabled. |
| mentionable | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Wether the role is mentionable or not. |

**Example :**
```js
client.on('roleMentionableUpdate', (role, mentionable) => {
   console.log(`The "mentionable" option of a role has been ${mentionable ? 'enabled' : 'disabled'}.`);
});
```

---

<h3><strong>roleIconUpdate</strong></h3><br/>
<h4>📡 Emitted when a role's icon is updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| role | [Role](https://discord.js.org/#/docs/discord.js/stable/class/Role) | The role whose icon has been updated. |
| oldIconURL | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [undefined](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) | The old role's icon URL. |
| newIconURL | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [undefined](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) | The new role's icon URL. |

**Example :**
```js
client.on('roleIconUpdate', (role, oldIconURL, newIconURL) => {
   console.log(`A role's icon has been updated: ${oldIconURL} => ${newIconURL}`);
});
```

---

<h3><strong>rolePermissionsUpdate</strong></h3><br/>
<h4>📡 Emitted when a role "mentionable" option is enabled/disabled.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| role | [Role](https://discord.js.org/#/docs/discord.js/stable/class/Role) | The role whose permissions have been updated. |
| oldPermissions | Readonly<[Permissions](https://discord.js.org/#/docs/discord.js/stable/class/Permissions)> | The old role's permissions. |
| newPermissions | Readonly<[Permissions](https://discord.js.org/#/docs/discord.js/stable/class/Permissions)> | The new role's permissions. |

**Example :**
```js
client.on('rolePermissionsUpdate', (role, oldPermissions, newPermissions) => {
   console.log('The permissions of a role have been updated :');
   console.log(oldPermissions, newPermissions)
});
```
</details>

<details><summary><strong>Sticker Updates <i>(extends stickerUpdate)</i></strong></summary><br/>
<h3><strong>stickerNameUpdate</strong></h3><br/>
<h4>📡 Emitted when a sticker's name is updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| sticker | [Sticker](https://discord.js.org/#/docs/discord.js/stable/class/Sticker) | The role whose permissions have been updated. |
| oldName | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The old sticker's name. |
| newName | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The new sticker's name. |

**Example :**
```js
client.on('stickerNameUpdate', (sticker, oldName, newName) => {
   console.log(`A sticker's name has been updated: "${oldName}" => "${newName}"`);
});
```
</details>

<details><summary><strong>Thread Member Add/Remove <i>(extends threadMembersUpdate)</i></strong></summary><br/>
<h3><strong>threadMemberAdd</strong></h3><br/>
<h4>📡 Emitted when a guild member is added to a thread.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| thread | [ThreadChannel](https://discord.js.org/#/docs/discord.js/stable/class/ThreadChannel) | The thread where the guild member has been added. |
| member | [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember) | The guild member who has been added to the thread. |

**Example :**
```js
client.on('threadMemberAdd', (thread, member) => {
   console.log(`${member.user.tag} has been added to a thread.`);
});
```

---

<h3><strong>threadMemberRemove</strong></h3><br/>
<h4>📡 Emitted when a guild member is removed from a thread.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| thread | [ThreadChannel](https://discord.js.org/#/docs/discord.js/stable/class/ThreadChannel) | The thread from where the guild member has been removed. |
| member | [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember) | The guild member who has been removed from the thread. |

**Example :**
```js
client.on('threadMemberRemove', (thread, member) => {
   console.log(`${member.user.tag} has been removed from a thread.`);
});
```
</details>

<details><summary><strong>Thread Archive/Unarchive <i>(extends threadUpdate)</i></strong></summary><br/>
<h3><strong>threadArchived</strong></h3><br/>
<h4>📡 Emitted when a thread is archived.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| thread | [ThreadChannel](https://discord.js.org/#/docs/discord.js/stable/class/ThreadChannel) | The thread that has been archived. |

**Example :**
```js
client.on('threadArchived', (thread) => {
   console.log(`The thread #${thread.name} has been archived.`);
});
```

---

<h3><strong>threadUnarchived</strong></h3><br/>
<h4>📡 Emitted when a thread is unarchived.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| thread | [ThreadChannel](https://discord.js.org/#/docs/discord.js/stable/class/ThreadChannel) | The thread that has been unarchived. |

**Example :**
```js
client.on('threadUnarchived', (thread) => {
   console.log(`The thread #${thread.name} has been unarchived.`);
});
```
</details>

<details><summary><strong>User Updates <i>(extends userUpdate)</i></strong></summary><br/>
<h3><strong>userAvatarUpdate</strong></h3><br/>
<h4>📡 Emitted when a user's avatar is updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| guild | [BaseGuild](https://discord.js.org/#/docs/discord.js/stable/class/BaseGuild) | The guild where the user is. |
| user | [User](https://discord.js.org/#/docs/discord.js/stable/class/User) | The user whose avatar has been updated. |
| oldAvatarURL | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The old user's avatar URL. |
| newAvatarURL | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The new user's avatar URL. |

**Example :**
```js
client.on('userAvatarUpdate', (guild, user, oldAvatarURL, newAvatarURL) => {
   console.log(`A user's avatar has been updated: ${oldAvatarURL} => ${newAvatarURL}`);
});
```

---

<h3><strong>userBannerUpdate</strong></h3><br/>
<h4>📡 Emitted when a user's banner is updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| guild | [BaseGuild](https://discord.js.org/#/docs/discord.js/stable/class/BaseGuild) | The guild where the user is. |
| user | [User](https://discord.js.org/#/docs/discord.js/stable/class/User) | The user whose banner has been updated. |
| oldBannerURL | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The old user's banner URL. |
| newBannerURL | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The new user's banner URL. |

**Example :**
```js
client.on('userBannerUpdate', (guild, user, oldBannerURL, newBannerURL) => {
   console.log(`A user's banner has been updated: ${oldBannerURL} => ${newBannerURL}`);
});
```

---

<h3><strong>userDiscriminatorUpdate</strong></h3><br/>
<h4>📡 Emitted when a user's discriminator is updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| guild | [BaseGuild](https://discord.js.org/#/docs/discord.js/stable/class/BaseGuild) | The guild where the user is. |
| user | [User](https://discord.js.org/#/docs/discord.js/stable/class/User) | The user whose discriminator has been updated. |
| oldDiscriminator | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The old user's discriminator. |
| newDiscriminator | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The new user's discriminator. |

**Example :**
```js
client.on('userDiscriminatorUpdate', (guild, user, oldDiscriminator, newDiscriminator) => {
   console.log(`A user's discriminator has been updated: ${oldDiscriminator} => ${newDiscriminator}`);
});
```

---

<h3><strong>userUsernameUpdate</strong></h3><br/>
<h4>📡 Emitted when a user's username is updated.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| guild | [BaseGuild](https://discord.js.org/#/docs/discord.js/stable/class/BaseGuild) | The guild where the user is. |
| user | [User](https://discord.js.org/#/docs/discord.js/stable/class/User) | The user whose username has been updated. |
| oldUsername | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The old user's username. |
| newUsername | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The new user's username. |

**Example :**
```js
client.on('userUsernameUpdate', (guild, user, oldUsername, newUsername) => {
   console.log(`A user's username has been updated: ${oldUsername} => ${newUsername}`);
});
```
</details>

<details><summary><strong>Voice Channel Updates <i>(extends voiceStateUpdate)</i></strong></summary><br/>
<h3><strong>voiceChannelJoin</strong></h3><br/>
<h4>📡 Emitted when a guild member joins a voice channel.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| member | [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember) | The guild member who joined a voice channel. |
| channel | [BaseGuildVoiceChannel](https://discord.js.org/#/docs/discord.js/stable/class/BaseGuildVoiceChannel) | The channel that the guild member joined. |

**Example :**
```js
client.on('voiceChannelJoin', (member, channel) => {
   console.log(`${member.user.tag} joined the voice channel #${channel.name}.`);
});
```

---

<h3><strong>voiceChannelLeave</strong></h3><br/>
<h4>📡 Emitted when a guild member leaves a voice channel.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| member | [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember) | The guild member who left a voice channel. |
| channel | [BaseGuildVoiceChannel](https://discord.js.org/#/docs/discord.js/stable/class/BaseGuildVoiceChannel) | The channel that the guild member left. |

**Example :**
```js
client.on('voiceChannelLeave', (member, channel) => {
   console.log(`${member.user.tag} left the voice channel #${channel.name}.`);
});
```

---

<h3><strong>voiceChannelSwitch</strong></h3><br/>
<h4>📡 Emitted when a guild member leaves a voice channel to join another.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| member | [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember) | The guild member who left a voice channel. |
| oldChannel | [BaseGuildVoiceChannel](https://discord.js.org/#/docs/discord.js/stable/class/BaseGuildVoiceChannel) | The channel that the guild member left. |
| newChannel | [BaseGuildVoiceChannel](https://discord.js.org/#/docs/discord.js/stable/class/BaseGuildVoiceChannel) | The channel that the guild member joined. |

**Example :**
```js
client.on('voiceChannelSwitch', (member, oldChannel, newChannel) => {
   console.log(`${member.user.tag} left the #${oldChannel} to join #${newChannel}.`);
});
```

---

<h3><strong>voiceChannelSelfDeaf</strong></h3><br/>
<h4>📡 Emitted when a guild member deafens himself.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| member | [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember) | The guild member who deafened himself. |

**Example :**
```js
client.on('voiceChannelSelfDeaf', (member) => {
   console.log(`${member.user.tag} deafened himself in the voice channel #${member.voice.channel.name}.`);
});
```

---

<h3><strong>voiceChannelSelfMute</strong></h3><br/>
<h4>📡 Emitted when a guild member mutes himself.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| member | [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember) | The guild member who muted himself. |

**Example :**
```js
client.on('voiceChannelSelfMute', (member) => {
   console.log(`${member.user.tag} muted himself in the voice channel #${member.voice.channel.name}.`);
});
```

---

<h3><strong>voiceChannelServerDeaf</strong></h3><br/>
<h4>📡 Emitted when a guild member is server-deafened.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| member | [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember) | The guild member who has been deafened. |

**Example :**
```js
client.on('voiceChannelServerDeaf', (member) => {
   console.log(`${member.user.tag} has been deafened in the voice channel #${member.voice.channel.name}.`);
});
```

---

<h3><strong>voiceChannelServerMute</strong></h3><br/>
<h4>📡 Emitted when a guild member is server-muted.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| member | [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember) | The guild member who has been muted. |

**Example :**
```js
client.on('voiceChannelServerMute', (member) => {
   console.log(`${member.user.tag} has been muted in the voice channel #${member.voice.channel.name}.`);
});
```

---

<h3><strong>voiceChannelSelfUndeaf</strong></h3><br/>
<h4>📡 Emitted when a guild member undeafens himself.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| member | [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember) | The guild member who undeafened himself. |

**Example :**
```js
client.on('voiceChannelSelfUndeaf', (member) => {
   console.log(`${member.user.tag} undeafened himself in the voice channel #${member.voice.channel.name}.`);
});
```

---

<h3><strong>voiceChannelSelfUnmute</strong></h3><br/>
<h4>📡 Emitted when a guild member unmutes himself.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| member | [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember) | The guild member who unmuted himself. |

**Example :**
```js
client.on('voiceChannelSelfUnmute', (member) => {
   console.log(`${member.user.tag} unmuted himself in the voice channel #${member.voice.channel.name}.`);
});
```

---

<h3><strong>voiceChannelServerUndeaf</strong></h3><br/>
<h4>📡 Emitted when a guild member is server-undeafened.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| member | [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember) | The guild member who has been undeafened. |

**Example :**
```js
client.on('voiceChannelServerUndeaf', (member) => {
   console.log(`${member.user.tag} has been server-undeafened in the voice channel #${member.voice.channel.name}.`); 
});
```

---

<h3><strong>voiceChannelServerUnmute</strong></h3><br/>
<h4>📡 Emitted when a guild member is server-unmuted.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| member | [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember) | The guild member who has been unmuted. |

**Example :**
```js
client.on('voiceChannelServerUnmute', (member) => {
   console.log(`${member.user.tag} has been server-unmuted in the voice channel #${member.voice.channel.name}.`); 
});
```

---

<h3><strong>voiceChannelStreamStart</strong></h3><br/>
<h4>📡 Emitted when a guild member starts streaming.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| member | [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember) | The guild member who started streaming. |

**Example :**
```js
client.on('voiceChannelStreamStart', (member) => {
   console.log(`${member.user.tag} has started streaming in the voice channel #${member.voice.channel.name}.`);
});
```

---

<h3><strong>voiceChannelStreamStop</strong></h3><br/>
<h4>📡 Emitted when a guild member stops streaming.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| member | [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember) | The guild member who stopped streaming. |

**Example :**
```js
client.on('voiceChannelStreamStop', (member) => {
   console.log(`${member.user.tag} has stopped streaming in the voice channel #${member.voice.channel.name}.`);
});
```

---

<h3><strong>voiceChannelVideoStart</strong></h3><br/>
<h4>📡 Emitted when a guild member activates his camera.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| member | [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember) | The guild member who activated his camera. |

**Example :**
```js
client.on('voiceChannelVideoStart', (member) => {
   console.log(`${member.user.tag} has activated his camera in the voice channel #${member.voice.channel.name}.`);
});
```

---

<h3><strong>voiceChannelVideoStop</strong></h3><br/>
<h4>📡 Emitted when a guild member deactivates his camera.</h4>

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| member | [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember) | The guild member who deactivated his camera. |

**Example :**
```js
client.on('voiceChannelVideoStop', (member) => {
   console.log(`${member.user.tag} has deactivated his camera in the voice channel #${member.voice.channel.name}.`);
});
```
</details>