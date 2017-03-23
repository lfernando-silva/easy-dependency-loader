
# Easy Dependency Loader 1.1.0

A simple way to manage your dependencies and use "require" with no problems with relative paths. It is very useful to complex project structures and when it is needed to change some file from it's place.

### Change Log
    [FEATURE] Migration to ES6 sintax!
    [FEATURE] Refactoring (finally I had time to)!
    [FEATURE] Unit tests!

### Installation

EDL requires [Node.js](https://nodejs.org/) v6+ to run.

```sh
$ npm install --save easy-dependency-loader
```

### Usage

Make sure you have a dependencies list in the following format:

```js
{
...
    "dependency1": "path/to/dependency1",
    "dependency2": "path/to/dependency2",
    "dependency3": "path/to/dependency3",
...
}
```

It can be described in a JSON file or in a object. The EDL works exactly in the same way of require, so, every load that works with require also works with EDL.

```js
EDL.setDependencies(dependencies) //As an object descriptor
EDL.setDependencies('./path/from/project/root/to/dependencies.json') //Path to dependencies file

const myDependencies = require('./path/to/dependencies.json')
EDL.setDependencies(myDependencies) //Using an JSON module with require

//Then, you just need to call the name of module using the load() method. Is no necessary to use the relative path.
const Module = EDL.load('moduleName')
Module.doSomething()
```

### Example
```js
const EDL = require('easy-dependency-loader')

//Passing a JSON path
EDL.setDependencies('./path/to/jsonfile/dependencies.json')

//Or passing a JSON module with require
const myDependencies = require('./configs/confgis.json')
EDL.setDependencies(myDependencies)

//Or passing an object
EDL.setDependencies({
  "Dog": "./models/Dog.js",
  "Falcon": "./models/birds/Falcon.js",
  "Chicken": "./models/birds/Chicken.js",
  "Worm": "./models/birds/insects/Worm.js"
})

//Finally, you can call the module in other place of project
const EDL = require('easy-dependency-loader')
const Dog = EDL.load('Dog')
Dog.bark()
```

#### Note: You also can use EDL to load native modules and modules in package.json if you want. Example:

```js
//Lets suppose that async module is already installed
const EDL = require('../lib/Loader.js')
const async = EDL.load('async') // the same of const async = require('async');
const os = EDL.load('os') // the same of const os = require('os');

async.eachOf(os.cpus(), (cpu, key, next) => {
    console.log('CPU [%s] PROPS: %j', key, cpu)
    return next()
})

/*
Logs something like
CPU [0] PROPS: {"model":"Intel(R) Core(TM) ... }}
CPU [1] PROPS: {"model":"Intel(R) Core(TM) ... }}
...
*/
```

### Contributions
Pull requests are welcome!

### Errors
In general, problems with using this module maybe are problems with require, such:
 - Wrong relative path
 - Non-requireble file (empty, not exported, not supported extension, wrong path, wrong file name...);
 - "Cyclic" requires (module1 requires module2, that requires module1).

### Todos
 - Using other types of config files, such xml (does make sense?)
 - Feature sugestions also are welcome

License
----
MIT
