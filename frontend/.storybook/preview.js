import * as nextImage from 'next/image';

// Nextのimageを使うための処理
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img alt="storybook" {...props} />
});


export const parameters = {
  backgrounds: {
    default: "default",
    values: [
      {
        name: "default",
        value: "#E0E0E0",
      },
    ],
  },
  // layout: "centered", // centeredにすると横幅が狭くなるので、やらない
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

};
