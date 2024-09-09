# [@vwsode/frontend-configs](https://github.com/vwsode/frontend-configs)

A library that contains various configurations to enter a project.

#### Configurations that can be contained in the library:

-   Commitlint(`@vwsode/frontend-configs/commitlint`)
-   Eslint (`@vwsode/frontend-configs/eslint`)
-   Jest (`@vwsode/frontend-configs/jest`)
-   Prettier (`@vwsode/frontend-configs/prettier`)
-   Semantic Release (`@vwsode/frontend-configs/semantic-release`)
-   Stylelint (`@vwsode/frontend-configs/stylelint`)

## Installation

```shell
npm install @vwsode/frontend-configs
```

## Usage

To use the Prettier configuration provided by this package, create a `.prettierrc.js` file in the root of your project with the following content:

```javascript
module.exports = require('@vwsode/frontend-configs/prettier');
```
