![Discord Events](https://i.imgur.com/sKJRQXq.png)

## 📖 About
**discord-events** is a module that gives to your Discord client many events that are much more precise.
It is useful for a **logs system** for example.

## 💻 Installation
```
npm install discord-events
```

## ❔ Help
- For the usage, you can read the **Documentation** below.
-  For more precise help, you can join this server: [Click to join](https://discord.gg/4b3X43JDQs), and contact the Developer  (me).

## 📚 Documentation
> You can find below the list of all the events that **discord-events** gives to your client and how to use them.

<details><summary><strong>Channel Updates <i>(extends channelUpdate)</i></strong></summary><br/>
<strong>channelNameUpdate</strong>
📡 Emitted when a channel's name is updated.

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

<strong>channelParentUpdate</strong>
📡 Emitted when a channel's parent is updated.

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

<strong>channelPermissionOverwritesUpdate</strong>
📡 Emitted when the permissions of a channel are updated.

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

<strong>channelNsfwStateUpdate</strong>
📡 Emitted when someone enable/disable the "Age-Restricted Channel" option for a channel.

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| channel | [BaseGuildTextChannel](https://discord.js.org/#/docs/discord.js/stable/class/BaseGuildTextChannel) | The channel whose NSFW state has been updated. |
| nsfw | [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | `true` if the channel is now NSFW, `false` otherwise. |

**Example :**
```js
client.on('channelNsfwStateUpdate', (channel, nsfw) => {
	console.log(`NSFW state has been ${nsfw ? 'enabled' : 'disabled'} in a channel.`);
});
```

---

<strong>channelRateLimitUpdate</strong>
📡Emitted when a channel's slowmode is updated.

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

<strong>channelTopicUpdate</strong>
📡 Emitted when a channel's topic is updated.

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

<strong>channelRtcRegionUpdate</strong>
📡 Emitted when a voice channel's RTC region is updated.

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

<strong>channelUserLimitUpdate</strong>
📡 Emitted when a voice channel's user limit is updated.

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

<strong>channelBitrateUpdate</strong>
📡 Emitted when a voice channel's bitrate is updated.

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
<strong>emojiNameUpdate</strong>
📡 Emitted when an emoji's name is updated.

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
<strong>guildMemberNicknameUpdate</strong>
📡 Emitted when a guild member's nickname is updated.

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| member | [GuildMember](https://discord.js.org/#/docs/discord.js/stable/class/GuildMember) | The guild member whose nickname has been updated. |
| oldNickname | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The old guild member's nickname. |
| newNickname | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The new guild member's nickname. |

**Example :**
```js
client.on('guildMemberNicknameUpdate', (member, oldNickname, newNickname) => {
	console.log(`A guild member's nickname has been updated: "${oldNickname}" => "${newNickname}"`);
});
```

---

<strong>guildMemberBoostStart</strong>
📡 Emitted when a guild member start boosting the server.

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

<strong>guildMemberBoostStop</strong>
📡 Emitted when a guild member stop boosting the server.

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

<strong>guildMemberTimeout</strong>
📡 Emitted when a guild member get timed out.

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

<strong>guildMemberTimeoutRemove</strong>
📡 Emitted when a guild member's timeout is removed.

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

<strong>guildMemberRoleAdd</strong>
📡 Emitted when a role is added to a guild member.

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
</details>

<details><summary><strong>Guild Updates <i>(extends guildUpdate)</i></strong></summary><br/>
<strong>guildBannerUpdate</strong>
📡 Emitted when a guild's banned is updated.

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

<strong>guildDescriptionUpdate</strong>
📡 Emitted when a guild's description is updated.

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

<strong>guildIconUpdate</strong>
📡 Emitted when a guild's icon is updated.

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

<strong>guildNameUpdate</strong>
📡 Emitted when a guild's name is updated.

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

<strong>guildMfaLevelUpdate</strong>
📡 Emitted when a guild's MFA level is updated.

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

<strong>guildNsfwLevelUpdate</strong>
📡 Emitted when a guild's NSFW level is updated.

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

<strong>guildAfkChannelUpdate</strong>
📡 Emitted when a guild's AFK channel is updated.

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

<strong>guildOwnerUpdate</strong>
📡 Emitted when a guild's owner transfers the ownership.

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

<strong>guildRulesChannelUpdate</strong>
📡 Emitted when a guild's rules channel is updated.

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

<strong>guildSystemChannelUpdate</strong>
📡 Emitted when a guild's system channel is updated.

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

<strong>guildVerified</strong>
📡 Emitted when a guild gets verified.

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

<strong>guildPartnered</strong>
📡 Emitted when a guild gets verified.

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
