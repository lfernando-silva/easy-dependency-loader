const DependencyManager = require('./DependencyManager.js')

const setDependencies = (dependencies) => DependencyManager.setDependencyByTypeOf(dependencies)
const load = (dependencyName) =>
    require(DependencyManager.getDependencyName(dependencyName)) || require(dependencyName)

module.exports = {
    setDependencies: setDependencies,
    load: load
}
