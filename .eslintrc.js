module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  globals: {
    JSX: true,
    NodeJS: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["prettier", "react", "@typescript-eslint"],
  rules: {
    quotes: [
      2,
      "double",
      {
        avoidEscape: true
      }
    ],
    "operator-linebreak": "off",
    "prefer-destructuring": [
      "error",
      {
        array: false,
        object: true
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    indent: "off",
    "global-require": "off",
    "no-empty-function": "off",
    "no-console": 1,
    "prettier/prettier": 2,
    "react/function-component-definition": "off",
    "object-curly-newline": "off",
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "react/jsx-closing-bracket-location": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
    "no-unused-expressions": "off",
    "react/jsx-props-no-spreading": "off",
    "arrow-body-style": "off",
    "@typescript-eslint/no-var-requires": 0,
    "class-methods-use-this": "off",
    "max-classes-per-file": "off",
    "default-case": "off",
    "default-param-last": 0,
    "import/no-dynamic-require": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-return-assign": "off",
    "no-shadow": "off",
    "no-underscore-dangle": "off",
    "no-use-before-define": "off",
    "react/destructuring-assignment": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/no-this-in-sfc": "off",
    "react/prefer-stateless-function": "off",
    "no-unsafe-optional-chaining": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "implicit-arrow-linebreak": "off",
    "react/static-property-placement": "off",
    "react/prop-types": [
      "error",
      {
        ignore: ["navigation"]
      }
    ],
    "arrow-parens": [0, "as-needed"],
    yoda: "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": [
      "warn",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
        vars: "all"
      }
    ],
    "comma-dangle": ["error", "never"],
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "consistent-this": ["error", "classRef"]
  }
};
