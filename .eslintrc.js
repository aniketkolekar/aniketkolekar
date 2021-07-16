/**
 * @author Aniket Kolekar
 * @email aniketkolekar47@gmail.com
 * @create date 2021-07-16 17:27:00
 * @modify date 2021-07-16 17:30:31
 * @desc The config file for eslint.
 */

module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    requireConfigFile: false,
    ecmaFeatures: {
      globalReturn: true,
      jsx: true,
    },
  },
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'next',
    'next/core-web-vitals',
    'react-app',
    'eslint:recommended',
    'plugin:prettier/recommended', // Required for plugin as well as config.
    'plugin:react/recommended', // Required for preset.
  ],
  plugins: ['simple-import-sort', 'unicorn'],
  rules: {
    /**
     * START: eslint default Rules
     * @description: Ref: https://eslint.org/docs/rules/
     */
    camelcase: ['error'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-use-before-define': ['error'],
    'react-hooks/exhaustive-deps': [0],
    yoda: [2],
    /* END: eslint default Rules */

    /**
     * START: eslint-plugin-react Rules
     * @description: Ref: https://github.com/yannickcr/eslint-plugin-react/
     */
    'react/display-name': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': ['error'],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/sort-prop-types': [
      2,
      {
        callbacksLast: true,
        ignoreCase: false,
        requiredFirst: true,
        sortShapeProp: true,
        noSortAlphabetically: false,
      },
    ],
    /* END: eslint-plugin-react Rules */

    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    /**
     * START: eslint-plugin-unicorn Rules
     * @description: Ref: https://github.com/sindresorhus/eslint-plugin-unicorn
     */
    'unicorn/filename-case': ['error', { case: 'kebabCase' }],
    'unicorn/better-regex': 'error',
    'unicorn/consistent-destructuring': 'error',
    'unicorn/consistent-function-scoping': 'error',
    'unicorn/empty-brace-spaces': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-lonely-if': 'error',
    'unicorn/prefer-default-parameters': 'error',
    /* END: eslint-plugin-unicorn Rules */
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      plugins: ['simple-import-sort'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Node.js built-ins. You could also generate this regex if you use a `.js` config.
              // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
              [
                '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
              ],

              // `react` related packages come first.
              ['^react$'],

              // `next` related packages come next.
              ['^next$', '^next/'],

              // Side effect imports.
              ['^\\u0000'],

              ['^@?\\w'],

              // `lodash` related packages.
              ['^lodash$', '^lodash/'],

              // Material imports
              ['^@material-ui/core'],
              ['^@material-ui/lab'],
              ['^@material-ui/icons'],
              ['^@material-ui'],

              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],

              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

              // Style imports.
              ['^.+\\.s?css$'],
            ],
          },
        ],
      },
    },
  ],
};
