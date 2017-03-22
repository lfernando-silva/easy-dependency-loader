const Path = require('path')
const DEPENDENCIES = {}

module.exports = {
    setDependencies(depListOrRelativePathToFile) {
        if (!depListOrRelativePathToFile) throw new Error('Invalid dependency file or path to file')
        DEPENDENCIES = byTypeOf(depListOrRelativePathToFile)      
    },
    load(dependencyName) {
        let required = DEPENDENCIES[dependencyName]
            ? Path.join(process.cwd(), DEPENDENCIES[dependencyName])
            : dependencyName
        return require(required)
    }
}

function byTypeOf(depListOrRelativePathToFile) {
    switch (typeof depListOrRelativePathToFile) {
        case 'object': return depListOrRelativePathToFile;
        case 'string': return require(Path.join(process.cwd(), depListOrRelativePathToFile))
        default: throw new Error('Invalid dependency file or path to file')
    }
}
