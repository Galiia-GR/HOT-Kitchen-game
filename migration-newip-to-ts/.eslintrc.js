module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin: @typescript-eslint/recommended',
        'plugin: prettier/recomemded',
    ],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['prettier', '@typescript-eslint'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: ['./tsconfig.json'],
            },
        },
    ],
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        'import/extensions': 'off',
        'prettier/prettier': 'error',
        'no-debugger': 'off',
        'no-console': 0,
        'class-methods-use-this': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/array-type': [
            'error',
            {
                default: 'array',
            },
        ],
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                accessibility: 'explicit',
                overrides: {
                    accessors: 'explicit',
                    constructors: 'off',
                    methods: 'explicit',
                    properties: 'explicit',
                    parameterProperties: 'explicit',
                },
            },
        ],
        'max-lines-per-function': [error, 40],
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
    },
};
