module.exports = {
  root: true,

  env: {
    browser: true,
    es6: true,
    es2021: true,
    node: true,
  },

  overrides: [
    {
      env: { node: true },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: { sourceType: 'script' },
    },
  ],

  plugins: ['import'],

  rules: {
    indent: ['error', 4, { SwitchCase: 1 }],
    'max-len': ['error', { code: 80, ignoreComments: true }],
    'import/newline-after-import': ['error', { count: 1 }],
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: ['type', ['builtin', 'external'], 'internal', ['sibling', 'parent'], 'index', 'unknown'],
        'newlines-between': 'always',
      },
    ],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['-', '+'],
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true,
        },
      },
    ],
    'import/no-duplicates': ['error', { considerQueryString: true }],
  },
};
