<big><h1 align="center">sequelize-model-initial</h1></big>

<p align="center">
  <a href="https://npmjs.org/package/sequelize-model-initial">
    <img src="https://img.shields.io/npm/v/sequelize-model-initial.svg?style=flat-square"
         alt="NPM Version">
  </a>

  <a href="https://coveralls.io/r/solee0524/sequelize-model-initial">
    <img src="https://img.shields.io/coveralls/solee0524/sequelize-model-initial.svg?style=flat-square"
         alt="Coverage Status">
  </a>

  <a href="https://travis-ci.org/solee0524/sequelize-model-initial">
    <img src="https://img.shields.io/travis/solee0524/sequelize-model-initial.svg?style=flat-square"
         alt="Build Status">
  </a>

  <a href="https://npmjs.org/package/sequelize-model-initial">
    <img src="http://img.shields.io/npm/dm/sequelize-model-initial.svg?style=flat-square"
         alt="Downloads">
  </a>

  <a href="https://david-dm.org/solee0524/sequelize-model-initial.svg">
    <img src="https://david-dm.org/solee0524/sequelize-model-initial.svg?style=flat-square"
         alt="Dependency Status">
  </a>

  <a href="https://github.com/solee0524/sequelize-model-initial/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/sequelize-model-initial.svg?style=flat-square"
         alt="License">
  </a>
</p>

<p align="center"><big>
Initial the models in models folder wieh sequelize sync.
</big></p>


## Install

```sh
npm install --save sequelize-model-initial
```

## Usage

```js
import sequelizeModelInitial from "sequelize-model-initial"

or

var sequelizeModelInitial = require('sequelize-model-initial');

sequelizeModelInitial.init() // true
```

## Function

### .init([modelPath])

Input the model folder path. Default to '\[projectpath\]/models'


## Version

List significant modify versions here.

### 0.0.2

Add **.init()** function.


## License

MIT © [solee0524](http://solee.me)

[npm-url]: https://npmjs.org/package/sequelize-model-initial
[npm-image]: https://img.shields.io/npm/v/sequelize-model-initial.svg?style=flat-square

[travis-url]: https://travis-ci.org/solee0524/sequelize-model-initial
[travis-image]: https://img.shields.io/travis/solee0524/sequelize-model-initial.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/solee0524/sequelize-model-initial
[coveralls-image]: https://img.shields.io/coveralls/solee0524/sequelize-model-initial.svg?style=flat-square

[depstat-url]: https://david-dm.org/solee0524/sequelize-model-initial
[depstat-image]: https://david-dm.org/solee0524/sequelize-model-initial.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/sequelize-model-initial.svg?style=flat-square
