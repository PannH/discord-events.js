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

## <details><summary>Channel Updates</summary><br/>
### channelNameUpdate *(extends channelUpdate)*
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

### channelParentUpdate *(extends channelUpdate)*
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

### channelPermissionOverwritesUpdate *(extends channelUpdate)*
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

### channelNsfwStateUpdate *(extends channelUpdate)*
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

### channelRateLimitUpdate *(extends channelUpdate)*
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

### channelTopicUpdate *(extends channelUpdate)*
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

### channelRtcRegionUpdate *(extends channelUpdate)*
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

### channelUserLimitUpdate *(extends channelUpdate)*
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

### channelBitrateUpdate *(extends channelUpdate)*
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
