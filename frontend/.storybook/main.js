const path = require("path");
//　Next.jsプロジェクトにStorybookを導入したときに困ったこと
// https://dev.classmethod.jp/articles/tried-to-add-storybook-to-nextjs-project/
module.exports = {
  typescript: {
    reactDocgen: false
  },
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-mdx-gfm"],
  staticDirs: ['../public'],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "src": path.resolve(__dirname, "../src"),
      "@common": path.resolve(__dirname, "../src/common"),
      "@features": path.resolve(__dirname, "../src/features")
    };
    return config;
  },
  docs: {
    autodocs: true
  }
};