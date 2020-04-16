# Installation

## Install this package from npm

## Set up ignore patterns

Project specific paths leave it up to you to determine what files or
directories might need to be ignored by ESLint.

You should set `ignorePatterns` or an `.eslintignore` file as necessary, per [the ESLint documentation](https://eslint.org/docs/user-guide/configuring#ignorepatterns-in-config-files).


## Add Prettier config manually (required)

Since ESLint config can't control Prettier configuration, we'll have to put
our specific Prettier options in a `.prettierrc` file, or in our `package.json`
file. [More specifics about Prettier config available here](https://prettier.io/docs/en/configuration.html).

Here's our Prettier config, as it would be added to the root of a `package.json`:

```json
{
  "prettier": {
    printWidth: 80,
    trailingComma: "all",
    tabWidth: 2,
    semi: false,
    arrowParens: "always",
    singleQuote: true,
    jsxSingleQuote: false
  }
}
```


## Configure your editor to use it

### VSCode
### Sublime
### vi


# Usage


# References

 * https://eslint.org/docs/1.0.0/developer-guide/shareable-configs#publishing-a-shareable-config
 * https://prettier.io/docs/en/integrating-with-linters.html#recommended-configuration
 * https://github.com/prettier/eslint-config-prettier
 * https://prettier.io/docs/en/configuration.html#sharing-configurations
 * https://github.com/wesbos/eslint-config-wesbos
 * https://medium.com/@natterstefan/how-to-create-your-own-shared-eslint-prettier-and-stylelint-configuration-3930dd764de3
