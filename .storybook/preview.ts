import { useEffect } from 'react';
import type { Preview } from '@storybook/react-vite';
import i18n from '../src/i18n';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', right: '🇺🇸', title: 'English' },
          { value: 'es', right: '🇪🇸', title: 'Español' },
          { value: 'fr', right: '🇨🇦', title: 'Français' },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const { locale } = context.globals;

      useEffect(() => {
        i18n.changeLanguage(locale);
      }, [locale]);

      return Story();
    },
  ],
};

export default preview;
