# Easy Dependency Loader

A simple way to manage your dependencies and use "require" with no problems with relative paths. It is very useful to complex project structures and when it is needed to change some file from it's place.

### Installation

EDL requires [Node.js](https://nodejs.org/) v4+ to run.

```sh
$ npm install --save easy-dependency-loader
```

### Usage

Make sure you have a dependencies list in the following format:

```sh
{
...
    "dependency1": "path/to/dependency1",
    "dependency2": "path/to/dependency2",
    "dependency3": "path/to/dependency3",
...
}
```

It can be described in a JSON file or in a object. The EDL works exactly in the same way of require, so, every load that works with require also works with EDL.

```sh
EDL.setDependencies(dependencies); //As an object descriptor

EDL.setDependencies('./path/to/dependencies.json'); //Path to dependencies file

var myDependencies = require('./path/to/dependencies.json');
EDL.setDependencies(myDependencies); //Using an JSON module with require
```
Then, you just need to call the name of module using the load() method. Is no necessary to use the relative path.

```sh
var Module = EDL.load('ModuleName');
Module.doSomething();
```

### Example
```sh
var EDL = require('easy-dependency-loader');

//Passing a JSON path
EDM.setDependencies('./path/to/jsonfile/dependencies.json');

//Passing a JSON module with require
var myDependencies = require('./configs/confgis.json');
EDM.setDependencies(myDependencies);

//Passing an object
EDM.setDependencies({
  "Dog": "./models/Dog.js",
  "Falcon": "./models/birds/Falcon.js",
  "Chicken": "./models/birds/Chicken.js",
  "Worm": "./models/birds/insects/Worm.js"
});

//Finally, you can call the module in other place of project
var EDM = require('easy-dependency-loader')
var Dog = EDM.load('Dog');
var Worm = EDM.load('Worm');
Dog.bark(); 
Worm.crawl();
```

### Contributions
Pull requests are welcome!

### Errors
In general, problems with using this module maybe are problems with require, such wrong relative path or file type. But if not, you can open an issue and make a pull request!

### Todos
 - Tests
 - Using other types of config files, such xml.

License
----
MIT
