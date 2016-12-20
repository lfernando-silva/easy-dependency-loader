var Path = require('path');
var DEPENDENCIES = {};

module.exports = {
    setDependencies: function (depListOrRelativePathToFile) {
        if (!depListOrRelativePathToFile) throw new Error('Invalid dependency file or path to file');
        DEPENDENCIES = byTypeOf(depListOrRelativePathToFile);       
    },
    load: function (dependencyName) {
        var required = DEPENDENCIES[dependencyName]
            ? Path.join(process.cwd(), DEPENDENCIES[dependencyName])
            : dependencyName
        return require(required);
    }
}

function byTypeOf(depListOrRelativePathToFile) {
    switch (typeof depListOrRelativePathToFile) {
        case 'object': return depListOrRelativePathToFile;
        case 'string': return require(Path.join(process.cwd(), depListOrRelativePathToFile))
        default: throw new Error('Invalid dependency file or path to file');
    }
}