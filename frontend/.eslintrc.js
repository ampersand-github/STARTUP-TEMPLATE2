module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  overrides: [
    {
      files: ["src/features/**/*"], // featuresディレクトリはfeatureディレクトリをインポートして良い
      rules: { "no-restricted-imports": "off"},
    },
  ],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "no-restricted-imports": ["error", { patterns: ["@features/*/*"] }], // 二階層以上のディレクトリはimportできないようにする
  },
};
