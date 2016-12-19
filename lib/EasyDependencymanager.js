var Path = require('path');

var DEPENDENCIES = null;

module.exports = {
    setDependencies: function (depListOrRelativePathToFile) {
        if (!depListOrRelativePathToFile) throw new Error('Invalid dependency file or path to file');
        //It can be a path to JSON dependency file or an object (this object can be a JSON loaded by require too)
        DEPENDENCIES = byTypeOf(depListOrRelativePathToFile);       
    },
    load: function (dependencyName) {
            return require(Path.join(process.cwd(),DEPENDENCIES[dependencyName]))
    }
}

function byTypeOf(depListOrRelativePathToFile) {
    switch (typeof depListOrRelativePathToFile) {
        case 'object': return depListOrRelativePathToFile;
        case 'string': return require(Path.join(process.cwd(), depListOrRelativePathToFile))
        default: throw new Error('Invalid dependency file or path to file');
    }
}