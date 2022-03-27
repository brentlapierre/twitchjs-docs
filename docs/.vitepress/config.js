import { defineConfig } from 'vitepress'

function getChatSidebar () {
  return [
    { text: 'Overview', link: '/' },
    {
      text: 'Chat',
      children: [
        { text: 'Getting Started', link: '/chat/getting_started' },
        { text: 'Commands', link: '/chat/commands' },
        { text: 'Events', link: '/chat/events' },
      ],
    },
    {
      text: 'Api',
      children: [
        
      ],
    },
  ];
}

export default defineConfig({
  title: 'Twitch.js Docs',
  description: '',
  repo: 'brentlapierre/twitchjs-docs',
  themeConfig: {
    nav: [
      { text: 'twitch.js', link: 'https://github.com/brentlapierre/twitch.js' },
      { text: 'GitHub', link: 'https://github.com/brentlapierre/twitchjs-docs' },
    ],
    sidebar: {
      '/': getChatSidebar(),
    },
  },
});
