# Palindrome Checker

![npm (scoped)](https://img.shields.io/npm/v/@huynhducduy/is-palindrome)

> Zero dependency, lightweight and fully functional palindrome checker.

Install with [npm](https://www.npmjs.com/)

```sh
npm i @huynhducduy/is-palindrome --save
```

## Table of Contents

<!-- toc -->

- [Palindrome Checker](#palindrome-checker)
  - [Table of Contents](#table-of-contents)
  - [Usage](#usage)
  - [API](#api)
    - [default](#default)
    - [options](#options)
  - [Other awesome projects](#other-awesome-projects)
  - [Running tests](#running-tests)
  - [Contributing](#contributing)

## Usage

CommonJS (Node)

```js
var isPalindrome = require("@huynhducduy/is-palindrome/dist/is-palindrome.common.js");
```

ES Modules

```js
import isPalindrome from "@huynhducduy/is-palindrome/dist/is-palindrome.module.js";
```

Also support `amd (requirejs)`, `umd`, `systemjs` as well.

## API

### [default](index.js#L23)

Check if the given string is a valid palindrome

**Params**

- `str` **{Any}**: String to check, it's not a valid string, the function will try to convert it, or will throws an exception
- `options` **{Object}**: See [options object](#options)
- `debug` **{Boolean}**: Log debug or not

Return: **{Boolean}**: True if it is a valid palindrome that match out options, otherwise False

**Example**

```js
var isPalindrome = require("@huynhducduy/is-palindrome/dist/is-palindrome.common.js");
console.log(isPalindrome("ahhhhzha", { trimTrailing: "h" }, false)); // true
```

### [options](index.js#L23)

Options pass to is-palindrome

| name          | type/values                    | default   | description                                                                                                                                                                 |
| ------------- | ------------------------------ | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| exception     | boolean                        | false     | Inform the function to throw exceptions or not                                                                                                                              |
| normalize     | boolean                        | false     | Inform the function to normalize string or not                                                                                                                              |
| normalizeForm | "NFC", "NFD", "NFKC", "NFKD"   | "NFC"     | The form being used to normalize string (if normalize === true), must be one of supported values, otherwise a exception will be thrown or the normalization will be omitted |
| trim          | "none", "start", "end", "both" | "none"    | Trim trailing whitespace mode                                                                                                                                               |
| trimTrailing  | string, \[string\]             | undefined | Trim trailing characters or strings                                                                                                                                         |
| caseSensitive | boolean                        | true      | Indicate the case sensitivity of the function                                                                                                                               |

## Other awesome projects

- Update...

## Running tests

Install dev dependencies:

```sh
yarn && yarn test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/huynhducduy/is-palindrome/issues/new)
