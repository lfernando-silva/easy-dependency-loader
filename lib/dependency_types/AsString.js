const Path = require('path')
module.exports = {
    assignDependencies(list, dependencies) {
        if (!dependencies.length) throw new Error()
        Object.assign(list, require(Path.join(process.cwd(),dependencies)))
        return list   
    }
}