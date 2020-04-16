module.exports = {
  "extends": [
    // Yup. We like a lot of these. It's a good starting place, and when
    // you bump into a rule, there's usually helpful explanation in their
    // style guide at https://github.com/airbnb/javascript -- which we can
    // read and either learn from or decide the rule isn't for us.
    "airbnb",

    // Cypress testing globals and such: (https://github.com/cypress-io/eslint-plugin-cypress)
    "plugin:cypress/recommended",

    // Prettier config(s) should be last, to override previous rules/avoid conflicts:
    "plugin:prettier/recommended",
    // airbnb rules add eslint-react, which also needs some fixes from Prettier:
    "prettier/react",
  ],
  "globals": {
    "window": true,
    "document": true,
    // May not be necessary w/ plugin:cypress/recommended ...
    "it": true,

    // Used in Blockbuster.
    // TODO: Why isn't this expected by ESLint? Missing a plugin?
    "FileReader": true
  },
  "env": {
    "browser": true
  },
  "parser": 'babel-eslint',
  "rules": {
    // Allow `.js` files to contain JSX, per https://github.com/yannickcr/eslint-plugin-react/blob/41d9809c430a0ea0651a4c011f83b25b71f8c779/docs/rules/jsx-filename-extension.md#rule-options
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],

    // We had a long talk about this rule at https://lcdigerati.slack.com/archives/C7EUUJH16/p1578501178038400
    // We aren't as strict as Airbnb @ https://github.com/airbnb/javascript#naming--leading-underscore
    // See also: https://github.com/airbnb/javascript/issues/1880
    "no-underscore-dangle": ["warn", { "allowAfterThis": true }],

    // Since we use Cypress Testing Library, this rule trips on importing
    // those custom commands, because it's a devDependency. Per the docs,
    // this will allow Dev Dep imports in files matching the globs:
    // See: https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/no-extraneous-dependencies.md#options
    "import/no-extraneous-dependencies": ["error", { "devDependencies": ["**/*.test.js", "**/*.spec.js"] }]
  }

};
