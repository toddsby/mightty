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

__STEP 1__ 
```
$ npm i -S mightty

```
__STEP 2__ 
```
import mighty from 'mightty';

```
or
```
import { cUN } from 'mightty';

```
__STEP 3 PROFIT__ 
```
console.log( mightty.cUN( value ) );

```

## Running tests

```
$ make test
```

## Authors

See [AUTHORS](AUTHORS).

# License

  MIT
