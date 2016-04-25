# ATL

Version At Least x.x.x

[![npm](https://img.shields.io/npm/v/atl.svg?style=plastic)](https://npmjs.org/package/atl) [![npm](https://img.shields.io/npm/dm/atl.svg?style=plastic)](https://npmjs.org/package/atl)

## Usage

```
npm install atl --save
```

```js
var atl = require('atl');
//atl('acture version', 'expect at least version');

// Below
atl('1.2.3','1.4.4'); // false
// Ahead
atl('v1.6.6','V1.2.2'); // true
// Same
atl('V1.2.3','v1.2.3'); // true
```

## Benchmark

```
ATL
  > (true) .............................................. 2,840,767 op/s
  = (true) .............................................. 2,853,232 op/s
  < (false) .............................................. 2,905,035 op/s
```

## License

MIT
