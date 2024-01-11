const { alias = {} } = require('./crw.config')()

module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
        allowImportExportEverywhere: true,
        ecmaFeatures: {
            jsx: true,
            globalReturn: true
        }
    },
    extends: [
        'eslint:recommended',
        'prettier',
        'airbnb'
    ],
    rules: {
        semi: ['error', 'never'],
        'no-console': 'off',
        'comma-dangle': 'off',
        'max-len': ['error', { code: 120 }],
        'constructor-super': 2,
        'for-direction': 2,
        'getter-return': 2,
        'no-async-promise-executor': 2,
        'no-case-declarations': 2,
        'no-class-assign': 2,
        'no-compare-neg-zero': 2,
        'no-cond-assign': 2,
        'no-const-assign': 2,
        'no-constant-condition': 2,
        'no-control-regex': 2,
        'no-debugger': 2,
        'no-delete-var': 2,
        'no-dupe-args': 2,
        'no-dupe-class-members': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty': 2,
        'no-empty-character-class': 2,
        'no-empty-pattern': 2,
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-semi': 2,
        'no-fallthrough': 2,
        'no-func-assign': 2,
        'no-global-assign': 2,
        'no-inner-declarations': 2,
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': 2,
        'no-misleading-character-class': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-new-symbol': 2,
        'no-obj-calls': 2,
        'no-octal': 2,
        'no-prototype-builtins': 2,
        'no-redeclare': 2,
        'no-regex-spaces': 2,
        'no-self-assign': 2,
        'no-shadow-restricted-names': 2,
        'no-sparse-arrays': 2,
        'no-this-before-super': 2,
        'no-undef': 2,
        'no-unexpected-multiline': 2,
        'no-unreachable': 2,
        'no-unsafe-finally': 2,
        'no-unsafe-negation': 2,
        'no-unused-labels': 2,
        'no-unused-vars': 2,
        'no-useless-catch': 2,
        'no-useless-escape': 2,
        'no-return-await': 'off',
        'space-before-blocks': 'off',
        'no-with': 2,
        'require-atomic-updates': 2,
        'require-yield': 2,
        'use-isnan': 2,
        'valid-typeof': 2,
        'import/extensions': [
            'error', {
                js: 'never',
                jsx: 'never'
            }
        ],
        'import/no-extraneous-dependencies': 'off',
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/react-in-jsx-scope': 'off',
        'react/no-unknown-property': ['error', { ignore: ['styleName'] }],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
    },
    settings: {
        'import/resolver': {
            webpack: {
                config: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
                    alias
                }
            }
        }
    },
    env: {
        node: true,
        browser: true,
        es6: true
    }
}
