import { defineConfig } from 'vitepress'

function getChatSidebar () {
  return [
    { text: 'Overview', link: '/' },
    {
      text: 'Chat',
      children: [
        { text: 'Getting Started', link: '/chat/getting_started' },
        { text: 'Commands', link: '/chat/commands' },
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
  themeConfig: {
    sidebar: {
      '/': getChatSidebar(),
    },
  },
});
