var Path = require('path');

var DEPENDENCIES_FILE = null;

var global = process.env;

module.exports = {
    setDependenciesFile: function (relativePathToFile) {
        var path = Path.join(process.cwd(), relativePathToFile);
        if (!path) throw new Error('Invalid dependency file or path to file');
        DEPENDENCIES_FILE = require(path);
    },

    load: function (dependencyName) {
            return require(Path.join(process.cwd(),DEPENDENCIES_FILE[dependencyName]))
    }
}