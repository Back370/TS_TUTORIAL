module.exports = {
  root: true, //このプロジェクトのルートディレクトリにあることを示す、また他のディレクトリまでさかのぼらないようにする
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends:["airbnb-base"],
  rules: {
    "import/prefer-default-export": "off",
    quotes: ["error", "double"],
  },
};
