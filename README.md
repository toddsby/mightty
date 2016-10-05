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

console.log( mightty.cUN( data.a ) );
// returns true
console.log( mightty.cUN( data.b ) );
// returns true
console.log( mightty.cUN( data.c ) );
// returns false
console.log( mightty.cUN( data.d ) );
// returns false

```

##  Quick Start

```
// STEP 1
$ npm i -S mightty

// STEP 2
import mighty from 'mightty';

// PROFIT
console.log( mightty.cUN( value ) );
```

## Authors

See [AUTHORS](AUTHORS.md).

## History

See [HISTORY](HISTORY.md).

# License

  MIT
