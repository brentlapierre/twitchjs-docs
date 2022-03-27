# Chat: Getting Started

## Installation
#### NPM
```bash
npm install @twitch.js/chat
```

## Connect
```js
import { chat } from '@twitch.js/chat';

const options = {
  user: 'my_bot',
  token: 'oauth:abcde12345',
};

chat.connect(options);
```

## Connection Options
| Option             | Type    | Description                                             |
| ------------------ | ------- | ------------------------------------------------------- |
| user               | string  | The username of your Twitch account.                    |
| token              | string  | An oauth token granting chat permissions.               |
| rateLimit.joins    | number  | The number of channel joins permitted every 60 seconds. |
| rateLimit.messages | number  | The number of messages permitted every 60 seconds.      |
| development        | boolean | Enables detailed logging.                               |

## Disconnect
```js
chat.dsconnect();
```
