Mightty: ES6 Javascript Utility Library

## Requirements
Mightty requires __node v4.5.0__ or higher for (partial) ES2015 support.
(IE > 11, Firefox > 45, or Chrome > 55)

```
$ npm i -S mightty
```

## Hello mightty

```js
let data = {
  a: '',
  b: undefined,
  c: 'hello',
  d: 25
};

mighttyConsole.log( isNil( 'Empty? ',data.a, data.b, data.c, data.d ) );
// returns Empty? True True False False

```

##  Quick Start

```
// STEP 1
$ npm i -S mightty

// STEP 2
import { isNil, mighttyConsole } from 'mightty';

// PROFIT
mighttyConsole.log( isNil( value ) );
```

## USE IN BROWSER
```html
<script src="lib/main.js"></script>
```
## Authors

See [AUTHORS](AUTHORS.md).

## History

See [HISTORY](HISTORY.md).

# License

  MIT
