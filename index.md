# Palindrome Checker

![npm (scoped)](https://img.shields.io/npm/v/@huynhducduy/is-palindrome)
[![devDependencies Status](https://david-dm.org/huynhducduy/is-palindrome/dev-status.svg)](https://david-dm.org/huynhducduy/is-palindrome?type=dev)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@huynhducduy/is-palindrome)
![npm](https://img.shields.io/npm/dm/@huynhducduy/is-palindrome)
![jsDelivr hits (npm scoped)](https://img.shields.io/jsdelivr/npm/hm/@huynhducduy/is-palindrome)
![Dependent repos (via libraries.io), scoped npm package](https://img.shields.io/librariesio/dependent-repos/npm/@huynhducduy/is-palindrome)

> Zero dependencies, lightweight and fully functional palindrome checker

Install with [npm](https://www.npmjs.com/)

```sh
npm i @huynhducduy/is-palindrome --save
```

Install with [yarn](https://yarnpkg.com/)

```sh
yarn add @huynhducduy/is-palindrome
```

## Table of Contents

<!-- toc -->

- [Palindrome Checker](#palindrome-checker)
  - [Table of Contents](#table-of-contents)
  - [Usage](#usage)
  - [Example](#example)
  - [API](#api)
    - [default](#default)
    - [options](#options)
  - [Other awesome projects](#other-awesome-projects)
  - [Running tests](#running-tests)
  - [Contributing](#contributing)

## Usage

CommonJS (Node)

```js
var isPalindrome = require("@huynhducduy/is-palindrome");
```

ES Modules

```js
import isPalindrome from "@huynhducduy/is-palindrome/dist/esm.js";
```

Browser (IIFE)

```html
<script
  src="https://cdn.jsdelivr.net/npm/@huynhducduy/is-palindrome@1/dist/iife.js"
  crossorigin="anonymous"
></script>
```

## Example

```js
console.log(
  isPalindrome(
    "    Are we not pure? “No sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man; a prisoner up to new era.    ",
    {
      remove: ["punctuation", "non-printable-ascii", "whitespace"],
      caseSensitive: false,
      trim: "both",
    }
  )
);
// true
```

Also support `amd` (RequireJS), `umd`, `sys` (SystemJS) as well.

## API

### [default](index.js#L23)

Check if the given string is a valid palindrome

**Params**

- `str` **{Any}**: String to check, it's not a valid string, the function will try to convert it, or will throws an exception
- `options` **{Object}**: See [options object](#options)
- `debug` **{Boolean}**: Log debug or not

Return: **{Boolean}**: True if it is a valid palindrome that match out options, otherwise False

### [options](index.js#L23)

Options pass to is-palindrome.
The processing flow is: Normalize -> Remove -> (Transform to lower case) -> Trim (whitespace and trailing)

| name          | type/values                    | default | description                                                                                                                                                                 |
| ------------- | ------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| exception     | boolean                        | false   | Inform the function to throw exceptions or not                                                                                                                              |
| normalize     | boolean                        | false   | Inform the function to normalize string or not                                                                                                                              |
| normalizeForm | "NFC", "NFD", "NFKC", "NFKD"   | "NFC"   | The form being used to normalize string (if normalize === true), must be one of supported values, otherwise a exception will be thrown or the normalization will be omitted |
| remove        | string, \[string\]             | []      | remove some kind of char from string, accepted: "non-printable-ascii", "punctuation", "whitespace"                                                                          |
| caseSensitive | boolean                        | true    | Indicate the case sensitivity of the function                                                                                                                               |
| trim          | "none", "start", "end", "both" | "none"  | Trim trailing whitespace mode                                                                                                                                               |
| trimTrailing  | string, \[string\]             |         | Trim trailing characters or strings                                                                                                                                         |

<br/>
Details: in `punctuation` remove mode, these chars will be remove:

```text
~\`!@#\$%^&\*(){}\[\];:"'<,.>?\/\\|\_+=-`
```

## Other awesome projects

- Update...

## Running tests

Install dev dependencies:

```sh
yarn && yarn test
```

Compile & Minify:

```sh
yarn compile
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/huynhducduy/is-palindrome/issues/new)
