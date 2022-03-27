# Chat Events

## Connect
Sent on a successful connection to the Twitch IRC.

#### Example
```js
chat.on('connect', () => {
  console.log('Connected to Twitch IRC!');
});
```
## globaluserstate
Provides data of the logged in user upon a successful connection.

#### Example
```js
chat.on('globaluserstate', (tags: any) => {
  // Example of data you may receive
  
  {
    badge-info='subscriber/6',
    badges='subscriber/6',
    color='#FFFFFF'
    display-name='MyBoT',
    emote-sets=0,
    turbo=0,
    user-id='user-id-of-account',
    user-type='',
  }
});
```
## Timeout
Sent when a user is timed out.

#### Example
```js
chat.on('timeout', (channel: string, user: string, duration: number) => {
  console.log(`${user} was timed out in ${channel} for ${duration} seconds.`);
});
```
## Ban
Sent when a user is banned.

#### Example
```js
chat.on('ban', (channel: string, user: string) => {
  console.log(`${user} was banned in ${channel}.`);
});
```
## Clear Chat
Sent when the chat is cleared.

#### Example
```js
chat.on('clear', (channel: string) => {
  console.log(`Chat cleared in ${channel}.`);
});
```
## Host
Sent when the channel started hosting another.

#### Example
```js
chat.on('host', (channel: string, target_channel: string, viewers: number) => {
  console.log(`${target_channel} is now being hosted by ${channel} with ${viewers} viewers.`);
});
```
## Unhost
Sent when the channel stops hosting.

#### Example
```js
chat.on('unhost', (channel: string) => {
  console.log(`${channel} has stopped hosting.`);
});
```
## Join Channel
Sent when a user joins the channel.

#### Example
```js
chat.on('join', (channel: string, user: string) => {
  console.log(`${user} has joined ${channel}.`);
});
```
## Part Channel
Sent when a user parts the channel.

#### Example
```js
chat.on('part', (channel: string, user: string) => {
  console.log(`${user} has left ${channel}.`);
});
```
## Action
Sent when a user sends a `/me` message.

#### Example
```js
chat.on('action', (channel: string, user: string, message: string) => {
  console.log(`${user} has sent /me message ${message} in ${channel}.`);
});
```
## Chat
Sent when a user sends a chat message.

#### Example
```js
chat.on('chat', (channel: string, user: string, message: string) => {
  console.log(`${user} said ${message} in ${channel}.`);
});
```
## Cheer
Sent when a user cheers with bits.

#### Example
```js
chat.on('action', (channel: string, user: string, message: string, bits: number) => {
  console.log(`${user} cheered with ${bits} and said ${message} in ${channel}.`);
});
```
## Command
Sent when a user sends a chat command (i.e.,`!command`).

#### Example
```js
chat.on('command', (channel: string, user: string, command: string, args: any[]) => {
  console.log(`${user} issued command ${command} in ${channel}.`);
});
```
## Language
Sent when the channel updates their language settings.

#### Example
```js
chat.on('language', (channel: string, language: string) => {
  console.log(`${channel} has updated their channel language to ${language}.`);
});
```
## Emote Only
Sent when the channel toggles emote only mode.

#### Example
```js
chat.on('emoteOnly', (channel: string, toggle: boolean) => {
  console.log(`${channel} has updated their emote only settings.`);
});
```
## Followers Only
Sent when the channel toggles followers only mode.

#### Example
```js
chat.on('followersOnly', (channel: string, duration: number) => {
  console.log(`${channel} has updated their followers only settings.`);
});
```
## R9K Beta
Sent when the channel toggles r9k beta mode.

#### Example
```js
chat.on('r9k', (channel: string, toggle: boolean) => {
  console.log(`${channel} has updated their r9k beta settings.`);
});
```
## Slow Mode
Sent when the channel toggles slow mode.

#### Example
```js
chat.on('slow', (channel: string, duration: number) => {
  console.log(`${channel} has updated slow mode to ${duration} seconds.`);
});
```
## Subscribers Only
Sent when the channel toggles subscribers only mode.

#### Example
```js
chat.on('subsOnly', (channel: string, toggle: boolean) => {
  console.log(`${channel} has updated their subscribers only settings.`);
});
```
## Roomstate
Sent when the channels roomstate updates.

#### Example
```js
chat.on('roomstate', (channel: string, tags: any) => {
  console.log(`${channel} has updated their roomstate.`);
});
```
## Userstate
Sent when the user joins a channel or sends a message.

#### Example
```js
chat.on('userstate', (channel: string, tags: any) => {
  console.log(`Userstate of user in ${channel}: ${tags}`);
});
```
## Whisper
Sent when the user receives a whisper.

#### Example
```js
chat.on('whisper', (from: string, message: string) => {
  console.log(`Whisper from ${from}: ${message}`);
});
```
## Raid
Sent when the channel receives a raid.

#### Example
```js
chat.on('raid', (channel: string, from_channel: any, viewers: number) => {
  console.log(`${channel} has been raided by ${from_channel.name} with ${viewers} viewers.`);
});
```
## Ritual
A user has sent a ritual in the channel.

#### Example
```js
chat.on('ritual', (channel: string, user: string, ritual: string) => {
  console.log(`${user.name} has sent ${ritual} in ${channel}.`);
});
```
## Subscription
A user has subscribed to the channel.

#### Example
```js
chat.on('subscription', (channel: string, user: string, message: string, sub: any) => {
  console.log(`${user.name} has subscribed to ${channel} for ${sub.cumulative} months.`);
});
```
## Subscription Gift
A user has gifted a subscription to the channel.

#### Example
```js
chat.on('subgift', (channel: string, user: string, sub: any) => {
  console.log(`${user.name} has gifted a subscription to ${sub.recipient.name} in ${channel}.`);
});
```
## Subscription Gift: Upgrade
A user has upgraded their gifted subscription to a paid subscription.

#### Example
```js
chat.on('subgiftupgrade', (channel: string, user: string, sub: any) => {
  console.log(`${user.name} has upgraded their gift sub from ${sub.gifter.name} in ${channel} to a ${sub.promo.name} sub.`);
});
```
