# Easy Dependency Loader

A simple way to manage your dependencies and use "require" with no problems with relative paths. It is very useful to complex project structures and when it is needed to change some file from it's place.

### Installation

EDL requires [Node.js](https://nodejs.org/) v4+ to run.

```sh
$ npm install --save easy-dependency-loader
```

### Usage

Make sure you have a dependencies file: a JSON file descriptor containing all dependencies names with their respective paths from the project root folder.
```sh
//config.json
{
  "Dog": "./models/Dog.js",
  "Falcon": "./models/birds/Falcon.js",
  "Chicken": "./models/birds/Chicken.js",
  "Worm": "./models/birds/insects/Worm.js"
}
```
Then, you need to set the relative path to the configs file from the project root path and call the modules using the .load method. It works exactly the same way of common require, but with no problems with relative paths: it's just call the name of the module in config descriptor file.

```sh
//in the main app file, e.g., app.js
var EDM = require('easy-dependency-loader')
EDM.setDependenciesFile('./configs/configs.json');

//in some other place on project
var EDM = require('easy-dependency-loader')
var Dog = EDM.load('Dog');
Dog.bark(); 
```

### Contributions
Pull requests are welcome!

### Todos
 - Tests
 - Using other types of config files, such xml.
 - Allow to set dependencies with no dependencies file.
 
License
----
MIT
