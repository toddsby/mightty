Mightty: ES6 Javascript Utility Library

## Requirements
Mightty requires __node v4.5.0__ or higher for (partial) ES2015 support.

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

mighttyConsole.log( mightty.isNil( 'Empty? ',data.a, data.b, data.c, data.d ) );
// returns Empty? True True False False

```

##  Quick Start

```
// STEP 1
$ npm i -S mightty

// STEP 2
import mighty from 'mightty';

// PROFIT
mighttyConsole.log( mightty.isNil( value ) );
```

## Authors

See [AUTHORS](AUTHORS.md).

## History

See [HISTORY](HISTORY.md).

# License

  MIT
