# key-creator [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) [![Generic badge](https://img.shields.io/badge/version-v1.3.3-brightgreen.svg)](https://shields.io/)  [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-blueviolet.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
key-creator is a mini library to generate secure keys or passwords when developing your apps.
# Documentation
key-creator is fully documented. It is rewritten with TypeScript to make the code less error-prone and maintainable.
# Example
You can start using library just including it like below:
```js
const keyCreator = require('key-creator');
```
Here is a example about how to generate a key for your app and use it:
```js
const keyCreator = require('key-creator');

class User {

    constructor(name) {
        this.id = keyCreator();
        this.name = name;
    }

    // Some business logic here
}
```

This example will create an ID field for the user and assign it using the keyCreator function.

You'll notice how easy to generate a secure key using `keyCreator` method without struggling all these complex middleware. This is one the most powerful sides of this library. It offers a well-thought abstraction. Without taking any control it gives you ligthweight coding benefit. It is minimal yet crucial.

## Licence 
key-creator is **GNU Licensed**.