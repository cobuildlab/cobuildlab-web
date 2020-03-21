module.exports = {
  plugins: ['jsdoc'],
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
    'eslint-config-prettier',
  ],
  rules: {
    indent: ['error', 2],
    semi: [2, 'always'],
    'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
    'react/require-default-props': [2, { forbidDefaultForRequired: true }],
    'react/no-unused-prop-types': [2],
    'jsdoc/check-alignment': 1, // Recommended
    'jsdoc/check-param-names': 1, // Recommended
    'jsdoc/check-tag-names': 1, // Recommended
    'jsdoc/check-types': 1, // Recommended
    'jsdoc/implements-on-classes': 1, // Recommended
    'jsdoc/newline-after-description': 1, // Recommended
    'jsdoc/no-undefined-types': 1, // Recommended
    'jsdoc/require-description-complete-sentence': 1,
    'jsdoc/require-hyphen-before-param-description': 1,
    'jsdoc/require-jsdoc': 1, // Recommended
    'jsdoc/require-param': 1, // Recommended
    'jsdoc/require-param-description': 1, // Recommended
    'jsdoc/require-param-name': 1, // Recommended
    'jsdoc/require-param-type': 1, // Recommended
    'jsdoc/require-returns': 1, // Recommended
    'jsdoc/require-returns-check': 1, // Recommended
    'jsdoc/require-returns-description': 1, // Recommended
    'jsdoc/require-returns-type': 1, // Recommended
    'jsdoc/valid-types': 1, // Recommended
  },
};
