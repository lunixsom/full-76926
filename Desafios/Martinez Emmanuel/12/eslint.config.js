import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

export default [
    {
        ignores: [
            "node_modules/**",
            "dist/**",
            "build/**",
            "*.min.js",
            "*.bundle.js",
            "public/**",
        ],
    },
    {
        files: ["**/*.js", "**/*.jsx"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.es2021,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            react,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            // ▼ Reglas base de ESLint =========================================================
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,

            // ▼ Reglas de React ===============================================================
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "error",
            "react/no-unused-prop-types": "error",
            "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

            // ▼ Reglas de formato básico ======================================================
            "semi": ["error", "always"],
            "quotes": ["error", "double"],
            "jsx-quotes": ["error", "prefer-double"],
            "indent": ["error", 4],
            "eol-last": ["error", "always"],
            "no-trailing-spaces": "error",
            "no-multiple-empty-lines": ["error", { "max": 1 }],

            // ▼ Reglas de espaciado ===========================================================
            "no-multi-spaces": "error",
            "space-infix-ops": "error",
            "space-before-blocks": "error",
            "space-before-function-paren": ["error", "always"],
            "space-in-parens": ["error", "never"],
            "keyword-spacing": ["error", { "before": true, "after": true }],
            "spaced-comment": ["error", "always"],

            // ▼ Reglas de objetos y arrays ====================================================
            "object-curly-spacing": ["error", "always"],
            "array-bracket-spacing": ["error", "never"],
            "comma-spacing": ["error", { "before": false, "after": true }],
            "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
            "comma-dangle": ["error", "always-multiline"],

            // ▼ Reglas de operadores ==========================================================
            "operator-linebreak": ["error", "before"],

            // ▼ Reglas de variables y funciones ===============================================
            "no-unused-vars": ["warn", {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "React",
            }],

            // ▼ Reglas de debugging y desarrollo ==============================================
            "no-console": "warn",
        },
    },
];
