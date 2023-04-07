module.exports = {
    root: true,
    extends: ['@react-native-community', 'airbnb', 'airbnb-typescript', 'airbnb/hooks', 'prettier'],

    parser: '@typescript-eslint/parser',

    ignorePatterns: ['.eslintrc.js', 'metro.config.js'],

    parserOptions: {
        project: ['./tsconfig.json'],
        sourceType: 'module',
    },

    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'import/no-named-as-default': 0,
                'import/named': 'off',
                'import/no-unresolved': 'off',
                'import/extensions': 'off',
                'simple-import-sort/imports': 'error',
                'simple-import-sort/exports': 'error',
                'import/first': 'error',
                'import/newline-after-import': 'error',
                'import/no-duplicates': 'error',
                '@typescript-eslint/no-unused-vars': 'off',
                '@typescript-eslint/default-param-last': 'off',
                '@typescript-eslint/no-unused-expressions': 'off',
                'import/prefer-default-export': 'off',
                'react/no-unstable-nested-components': 'off',
                'no-param-reassign': 'off',
                'import/no-extraneous-dependencies': 'off',
                '@typescript-eslint/dot-notation': 'off',
                'react-hooks/exhaustive-deps': 'off',
                'react/no-unused-prop-types': 'off',
                'react/function-component-definition': [
                    2,
                    {
                        namedComponents: 'arrow-function',
                        unnamedComponents: 'arrow-function',
                    },
                ],
            },
        },
    ],

    plugins: ['@typescript-eslint', 'simple-import-sort'],
};
