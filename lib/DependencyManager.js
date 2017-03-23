const Path = require('path')
const error = 'Invalid dependency file or path to file'
const DEPENDENCIES = {}

const setDependencyByTypeOf = (dependencies) => {
    require('./dependency_types/As' + getCapitalizedName(typeof dependencies) + '.js')
        .assignDependencies(DEPENDENCIES, dependencies)
}

const getDependencyName = dependencyName => DEPENDENCIES[dependencyName]
    ? Path.join(process.cwd(), DEPENDENCIES[dependencyName])
    : dependencyName

const getCapitalizedName = (name) => name.charAt(0).toUpperCase() + name.slice(1)

module.exports = {
    setDependencyByTypeOf: setDependencyByTypeOf,
    getDependencyName: getDependencyName
}