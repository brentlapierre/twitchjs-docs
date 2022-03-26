# Chat: Commands

## Action
Sends a `/me` message to the channel.

#### Types
| Argument | Type   |
| -------- | ------ |
| channel  | string |
| message  | string |

#### Example
```js
await chat.action(channel, message);
```
## Ban
Bans a user from the channel.

#### Types
| Argument | Type   |
| -------- | ------ |
| channel  | string |
| user     | string |
| reason   | string |

#### Example
```js
await chat.ban(channel, user, reason);
```
## Unban
Unbans a user from the channel.

#### Types
| Argument | Type   |
| -------- | ------ |
| channel  | string |
| user     | string |

#### Example
```js
await chat.unban(channel, user);
```
## Clear Chat
Clears the chat of all messages.

#### Types
| Argument | Type   |
| -------- | ------ |
| channel  | string |

#### Example
```js
await chat.clear(channel);
```
## Color
Changes the color of your username.

#### Types
| Argument | Type   |
| -------- | ------ |
| newColor | string |

#### Example
```js
await chat.color(newColor);
```
## Commercial
Starts a commercial.

#### Types
| Argument | Type   |
| -------- | ------ |
| channel  | string |
| duration | number |

#### Duration
A valid commercial duration ranges from `30-180 seconds` in blocks of 30 seconds.

#### Example
```js
await chat.commercial(channel, duration);
```
## Emote Only
Toggles emote only mode on or off.

#### Types
| Argument | Type    |
| -------- | ------- |
| channel  | string  |
| toggle   | boolean |

#### Example
```js
await chat.emoteOnly(channel, toggle);
```
## Followers Only
Toggles followers only mode on or off.

#### Types
| Argument | Type    |
| -------- | ------- |
| channel  | string  |
| toggle   | boolean |
| duration | string  |

#### Duration
A valid duration ranges from 0 minutes to 3 months.

#### Example
```js
await chat.followersOnly(channel, toggle, duration);
```
## Host
Hosts the target channel.

#### Types
| Argument | Type   |
| -------- | ------ |
| channel  | string |
| target   | string |

#### Example
```js
await chat.host(channel, target);
```
## Unhost
Takes the channel out of host mode.

#### Types
| Argument | Type   |
| -------- | ------ |
| channel  | string |

#### Example
```js
await chat.unhost(channel);
```
## Join Channel
Joins the channel.

#### Types
| Argument | Type   |
| -------- | ------ |
| channel  | string |

#### Example
```js
await chat.joinChannel(channel);
```
## Part Channel
Leaves the channel.

#### Types
| Argument | Type   |
| -------- | ------ |
| channel  | string |

#### Example
```js
await chat.partChannel(channel);
```
## Mod
Grants the mod role to the user.

#### Types
| Argument | Type   |
| -------- | ------ |
| channel  | string |
| user     | string |

#### Example
```js
await chat.mod(channel, user);
```
## Unmod
Removes the mod role from the user.

#### Types
| Argument | Type   |
| -------- | ------ |
| channel  | string |
| user     | string |

#### Example
```js
await chat.unmod(channel, user);
```
## Mods
Gets the list of mods in the channel.

#### Types
| Argument | Type   |
| -------- | ------ |
| channel  | string |

#### Example
```js
await chat.mods(channel);
```
## Purge
Deletes a specific message from the chat.

#### Types
| Argument  | Type   |
| --------- | ------ |
| channel   | string |
| messageId | string |

#### Example
```js
await chat.purge(channel, messageId);
```
## R9K Beta
Toggles `r9k beta` mode on or off.

#### Types
| Argument | Type    |
| -------- | ------- |
| channel  | string  |
| toggle   | boolean |

#### Example
```js
await chat.r9k(channel, toggle);
```
## Raid
Raids the target channel.

#### Types
| Argument | Type   |
| -------- | ------ |
| channel  | string |
| target   | string |

#### Example
```js
await chat.raid(channel, target);
```
## Unraid
Stops the ongoing raid.

#### Types
| Argument | Type   |
| -------- | ------ |
| channel  | string |

#### Example
```js
await chat.raid(channel);
```
## Say
Sends a message in the chat.

#### Types
| Argument | Type   |
| -------- | ------ |
| channel  | string |
| message  | string |

#### Example
```js
await chat.say(channel, message);
```
## Slow Mode
Toggles slow mode on or off.

#### Types
| Argument | Type    |
| -------- | ------- |
| channel  | string  |
| toggle   | boolean |
| duration | number  |

#### Duration
How long users must wait between sending messages in seconds.

#### Example
```js
await chat.slow(channel, toggle, duration);
```
## Subscribers Only
Limits the chat to subscribers.

#### Types
| Argument | Type    |
| -------- | ------- |
| channel  | string  |
| toggle   | boolean |

#### Example
```js
await chat.subs(channel, toggle);
```
## Timeout
Temporarily prevents the user from sending chat messages.

#### Types
| Argument | Type   |
| -------- | ------ |
| channel  | string |
| user     | string |
| duration | number |
| reason   | string |

#### Example
```js
await chat.timeout(channel, user, duration, reason);
```
## Untimeout
Allows a timed out user to send chat messages again.

#### Types
| Argument | Type   |
| -------- | ------ |
| channel  | string |
| user     | string |

#### Example
```js
await chat.untimeout(channel, user);
```
## VIP
Grants the VIP role to the user.

#### Types
| Argument | Type   |
| -------- | ------ |
| channel  | string |
| user     | string |

#### Example
```js
await chat.vip(channel, user);
```
## Unvip
Removes the VIP role from the user.

#### Types
| Argument | Type   |
| -------- | ------ |
| channel  | string |
| user     | string |

#### Example
```js
await chat.unvip(channel, user);
```
## VIPs
Get the list of VIPs in the channel.

#### Types
| Argument | Type   |
| -------- | ------ |
| channel  | string |

#### Example
```js
await chat.vips(channel);
```
## Whisper
Sends a whisper to the target user.

#### Types
| Argument | Type   |
| -------- | ------ |
| user     | string |
| message  | string |

#### Example
```js
await chat.whisper(user, message);
```
