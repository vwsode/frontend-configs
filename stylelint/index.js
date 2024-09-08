module.exports = {
    allowEmptyInput: true,
    extends: [
        'stylelint-config-standard',
        'stylelint-config-styled-components',
        'stylelint-config-prettier',
        'stylelint-prettier/recommended',
    ],

    plugins: ['stylelint-prettier'],
    processors: ['stylelint-processor-styled-components'],
    rules: {
        'prettier/prettier': true,
    },
};
